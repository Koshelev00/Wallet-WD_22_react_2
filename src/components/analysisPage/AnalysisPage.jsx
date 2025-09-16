import * as S from './Analysis.styled'
import { useState, useRef, useEffect } from 'react'
import {
    format,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    isSameDay,
    isToday,
    getYear,
    addMonths,
    isWithinInterval,
} from 'date-fns'
import { ru } from 'date-fns/locale/ru'
import ChartComponent from '../analysisPage/Diagram'
import { getTransactionsByPeriod } from '../../services/api'

function Analysispage() {
    const [months] = useState([
        new Date(),
        addMonths(new Date(), 1),
        addMonths(new Date(), 2),
    ])
    const [selectedRange, setSelectedRange] = useState([
        startOfMonth(new Date()),
        endOfMonth(new Date())
    ])
    const calendarRef = useRef(null)
    const dayNames = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
    const [activePeriod, setActivePeriod] = useState('month')
    const [showYearView, setShowYearView] = useState(false)
    const [transactions, setTransactions] = useState([])
    const [totalExpenses, setTotalExpenses] = useState(0)
    const [showCalendar, setShowCalendar] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

    // Отслеживаем размер окна
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Загрузка транзакций
    useEffect(() => {
        const fetchTransactions = async () => {
            if (selectedRange[0] && selectedRange[1]) {
                try {
                    const data = await getTransactionsByPeriod(
                        format(selectedRange[0], 'yyyy-MM-dd'),
                        format(selectedRange[1], 'yyyy-MM-dd')
                    )
                    setTransactions(data.map(t => ({
                        ...t,
                        category: t.category.toLowerCase()
                    })))
                } catch (error) {
                    console.error('Ошибка загрузки:', error)
                }
            }
        }
        fetchTransactions()
    }, [selectedRange])

    // Подсчет общей суммы расходов
    useEffect(() => {
        const total = transactions.reduce((acc, t) => acc + (t.sum || 0), 0)
        setTotalExpenses(total)
    }, [transactions])

    const handleDayClick = (day) => {
        if (!selectedRange[0]) setSelectedRange([day, null])
        else if (!selectedRange[1] && day >= selectedRange[0]) setSelectedRange([selectedRange[0], day])
        else setSelectedRange([day, null])
    }

    const isSelected = (day) => {
        if (selectedRange[0] && selectedRange[1]) {
            return isWithinInterval(day, { start: selectedRange[0], end: selectedRange[1] })
        } else if (selectedRange[0]) {
            return isSameDay(day, selectedRange[0])
        }
        return false
    }

    const renderCalendarMonth = (date) => {
        const year = getYear(date)
        const monthName = format(date, 'MMMM', { locale: ru })
        const startDate = startOfMonth(date)
        const endDate = endOfMonth(date)
        const days = eachDayOfInterval({ start: startDate, end: endDate })

        return (
            <S.CalendarContainer key={date}>
                <S.CalendarTitle>{monthName} {year}</S.CalendarTitle>
                <S.CalendarGrid>
                    {days.map(day => (
                        <S.Day
                            key={day}
                            onClick={() => handleDayClick(day)}
                            className={`${isSelected(day) ? 'selected' : ''} ${isToday(day) ? 'today' : ''}`}
                        >
                            {format(day, 'd')}
                        </S.Day>
                    ))}
                </S.CalendarGrid>
            </S.CalendarContainer>
        )
    }

    const handleYearClick = () => { setShowYearView(true); setActivePeriod('year') }
    const handleMonthClick = () => { setShowYearView(false); setActivePeriod('month') }

    const renderYearView = () => {
        const startYear = 2025, endYear = 2100
        const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i)
        const monthNames = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']

        const handleYearMonthClick = (year, monthIndex) => {
            const monthStart = new Date(year, monthIndex, 1)
            const monthEnd = new Date(year, monthIndex + 1, 0)

            if (!selectedRange[0]) setSelectedRange([monthStart, null])
            else if (!selectedRange[1] && monthStart >= selectedRange[0]) setSelectedRange([selectedRange[0], monthEnd])
            else setSelectedRange([monthStart, null])
        }

        const isMonthSelected = (year, monthIndex) => {
            if (!selectedRange[0] || !selectedRange[1]) return false
            const monthStart = new Date(year, monthIndex, 1)
            const monthEnd = new Date(year, monthIndex + 1, 0)
            return monthStart >= selectedRange[0] && monthEnd <= selectedRange[1]
        }

        return (
            <S.YearContainer>
                {years.map(year => (
                    <div key={year}>
                        <S.YearTitle>{year}</S.YearTitle>
                        <S.MonthsContainer>
                            {monthNames.map((monthName, index) => (
                                <S.MonthName
                                    key={`${year}-${index}`}
                                    onClick={() => handleYearMonthClick(year, index)}
                                    className={isMonthSelected(year, index) ? 'selected' : ''}
                                >
                                    {monthName}
                                </S.MonthName>
                            ))}
                        </S.MonthsContainer>
                    </div>
                ))}
            </S.YearContainer>
        )
    }

    const formatDateRange = () => {
        if (!selectedRange[0] || !selectedRange[1]) return ''
        const start = selectedRange[0], end = selectedRange[1]
        const formatMonthYear = (date) => {
            const formatted = format(date, 'LLLL yyyy', { locale: ru })
            return formatted.charAt(0).toUpperCase() + formatted.slice(1)
        }
        const isSameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()
        return isSameMonth
            ? `${format(start, 'd', { locale: ru })}–${format(end, 'd', { locale: ru })} ${formatMonthYear(start)}`
            : `${formatMonthYear(start)} — ${formatMonthYear(end)}`
    }

    return (
        <S.MainBlock>
          
            {!isMobile && (
                
            <S.H2>Анализ расходов</S.H2>
            )}

            <S.ContentContainer>
                {(isMobile ? showCalendar : true) && (
                    <S.NewExpenseContainer>
                          
                        {isMobile && (
                          <S.BackDiagramm onClick={() => setShowCalendar(!showCalendar)}>
                <S.BackImage src="../../../public/back.svg" alt="back"/>

                
                <S.BackTitle>
                    Анализ расходов
                </S.BackTitle>
            </S.BackDiagramm>
                        )}
                        <S.NewExpenseTitle>
                {isMobile ? "Выбор периода" : "Период"}
                            <S.PeriodElements>
                                <S.PeriodElement $isActive={activePeriod === 'month'} onClick={handleMonthClick}>Месяц</S.PeriodElement>
                                <S.PeriodElement $isActive={activePeriod === 'year'} onClick={handleYearClick}>Год</S.PeriodElement>
                            </S.PeriodElements>
                        </S.NewExpenseTitle>

                        {showYearView ? renderYearView() : (
                            <div ref={calendarRef}>
                                <S.DaysOfWeek>{dayNames.map((d, i) => <S.DayOfWeek key={i}>{d}</S.DayOfWeek>)}</S.DaysOfWeek>
                                {months.map(renderCalendarMonth)}
                            </div>
                        )}
                    </S.NewExpenseContainer>
                )}

                {(isMobile ? !showCalendar : true) && (
                    <S.ExpensesTableContainer>
                            {isMobile && (
                                 <S.NewExpenseTitle>
                {"Анализ расходов"}
                 </S.NewExpenseTitle>
                            )}
                        <S.TableHeader>
                            <S.H3>{totalExpenses.toLocaleString('ru-RU')} ₽</S.H3>
                            <S.FiltersContainer>Расходы за {formatDateRange()}</S.FiltersContainer>
                            <ChartComponent
                                expenses={transactions.filter(t => {
                                    const transactionDate = new Date(t.date)
                                    return transactionDate >= selectedRange[0] && transactionDate <= selectedRange[1]
                                }).map(t => ({ category: t.category, sum: t.sum }))}
                            />
                        </S.TableHeader>
                    </S.ExpensesTableContainer>
                )}
            </S.ContentContainer>

            {isMobile && (
                <S.ButtonBox>
                <S.ButtonPeriod onClick={() => setShowCalendar(!showCalendar)}>
                    {showCalendar ? "Выбрать период" : "Выбрать другой период"}
                </S.ButtonPeriod>
                </S.ButtonBox>
            )}
        </S.MainBlock>
    )
}

export default Analysispage
