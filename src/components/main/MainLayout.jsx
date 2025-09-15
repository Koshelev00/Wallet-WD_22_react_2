import PropTypes from 'prop-types'
import ExpensesTable from './ExpensesTable'
import ExpenseForm from './ExpenseForm'
import * as S from './main.styled'


const MainLayout = ({
    sortedExpenses,
    newDescription,
    newCategory,
    newDate,
    newAmount,
    editMode,
    editingExpenseIndex,
    categories,
    categoryIcons,
    errors,
    descriptionError,
    dateError,
    amountError,
    handleEditExpense,
    handleAddExpense,
    handleDescriptionChange,
    handleDateChange,
    handleAmountChange,
    setNewCategory,
    selectedCategory,
    sortOrder,
    isCategoryDropdownOpen,
    isSortDropdownOpen,
    toggleCategoryDropdown,
    toggleSortDropdown,
    handleCategorySelect,
    handleSortSelect,
    sortOptions,
    addExpense,
}) => (
    <S.MainBlock>
        <S.H2>Мои расходы</S.H2>
        <S.ContentContainer>
            <S.ExpensesTableContainer>
                <S.TableHeader>
                    <S.H3>Таблица расходов</S.H3>
                    <S.FiltersRow>
                        <S.FilterWrapper>
                            <S.FilterButton onClick={toggleCategoryDropdown}>
                                Фильтровать по категории{' '}
                                <S.GreenLink>
                                    {selectedCategory || 'выбрать'}
                                </S.GreenLink>
                                <S.DropdownArrow
                                    $isOpen={isCategoryDropdownOpen}
                                    src="/ArrowIcon.svg"
                                    alt="Arrow Icon"
                                />
                            </S.FilterButton>
                            {isCategoryDropdownOpen && (
                                <S.DropdownMenu>
                                    {categories.map((category) => (
                                        <S.DropdownItem
                                            key={category}
                                            onClick={() =>
                                                handleCategorySelect(category)
                                            }
                                        >
                                            {categoryIcons[category]}
                                            {category}
                                        </S.DropdownItem>
                                    ))}
                                </S.DropdownMenu>
                            )}
                        </S.FilterWrapper>
                        <S.FilterWrapper>
                            <S.FilterButton onClick={toggleSortDropdown}>
                                Сортировать по{' '}
                                <S.GreenLink>
                                    {sortOrder.toLowerCase()}
                                </S.GreenLink>
                                <S.DropdownArrow
                                    $isOpen={isSortDropdownOpen}
                                    src="/ArrowIcon.svg"
                                    alt="Arrow Icon"
                                />
                            </S.FilterButton>
                            {isSortDropdownOpen && (
                                <S.DropdownMenu>
                                    {sortOptions.map((option) => (
                                        <S.DropdownItem
                                            key={option}
                                            onClick={() =>
                                                handleSortSelect(option)
                                            }
                                        >
                                            {option}
                                        </S.DropdownItem>
                                    ))}
                                </S.DropdownMenu>
                            )}
                        </S.FilterWrapper>
                    </S.FiltersRow>
                </S.TableHeader>
                {sortedExpenses && sortedExpenses.length > 0 ? (
                    <ExpensesTable
                        expenses={sortedExpenses}
                        onEdit={handleEditExpense}
                        editMode={editMode}
                        editingExpenseIndex={editingExpenseIndex}
                    />
                ) : (
                    <S.Table>
                        <S.TableHead>
                            <S.TableRow>
                                <S.TableHeaderCell>Описание</S.TableHeaderCell>
                                <S.TableHeaderCell>Категория</S.TableHeaderCell>
                                <S.TableHeaderCell>Дата</S.TableHeaderCell>
                                <S.TableHeaderCell>Сумма</S.TableHeaderCell>
                                <S.TableHeaderCell></S.TableHeaderCell>
                            </S.TableRow>
                        </S.TableHead>
                        <tbody>
                            <S.TableRow>
                                <S.TableCell colSpan="5">
                                    Нет данных для отображения
                                </S.TableCell>
                            </S.TableRow>
                        </tbody>
                    </S.Table>
                )}
            </S.ExpensesTableContainer>
            <ExpenseForm
                addExpense={addExpense}
                newDescription={newDescription}
                newCategory={newCategory}
                setNewCategory={setNewCategory}
                newDate={newDate}
                newAmount={newAmount}
                handleAddExpense={handleAddExpense}
                editMode={editMode}
                categories={categories}
                categoryIcons={categoryIcons}
                errors={errors}
                descriptionError={descriptionError}
                dateError={dateError}
                amountError={amountError}
                handleDescriptionChange={handleDescriptionChange}
                handleDateChange={handleDateChange}
                handleAmountChange={handleAmountChange}
            />
        </S.ContentContainer>
    </S.MainBlock>
)

MainLayout.propTypes = {
    sortedExpenses: PropTypes.arrayOf(
        PropTypes.shape({
            description: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
        })
    ).isRequired,
    newDescription: PropTypes.string.isRequired,
    newCategory: PropTypes.string.isRequired,
    newDate: PropTypes.string.isRequired,
    newAmount: PropTypes.string.isRequired,
    editMode: PropTypes.bool.isRequired,
    editingExpenseIndex: PropTypes.number,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    categoryIcons: PropTypes.objectOf(PropTypes.node).isRequired,
    errors: PropTypes.object.isRequired,
    descriptionError: PropTypes.bool.isRequired,
    dateError: PropTypes.bool.isRequired,
    amountError: PropTypes.bool.isRequired,
    handleEditExpense: PropTypes.func.isRequired,
    handleAddExpense: PropTypes.func.isRequired,
    handleDescriptionChange: PropTypes.func.isRequired,
    handleDateChange: PropTypes.func.isRequired,
    handleAmountChange: PropTypes.func.isRequired,
    setNewDescription: PropTypes.func.isRequired,
    setNewCategory: PropTypes.func.isRequired,
    setNewDate: PropTypes.func.isRequired,
    setNewAmount: PropTypes.func.isRequired,
    selectedCategory: PropTypes.string.isRequired,
    sortOrder: PropTypes.string.isRequired,
    isCategoryDropdownOpen: PropTypes.bool.isRequired,
    isSortDropdownOpen: PropTypes.bool.isRequired,
    toggleCategoryDropdown: PropTypes.func.isRequired,
    toggleSortDropdown: PropTypes.func.isRequired,
    handleCategorySelect: PropTypes.func.isRequired,
    handleSortSelect: PropTypes.func.isRequired,
    addExpense: PropTypes.func.isRequired,
    sortOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
}


export default MainLayout
