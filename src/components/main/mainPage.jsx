import { useState, useEffect } from 'react';
import {
  getTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} from '../../services/api';
import FoodIcon from '../icons/FoodIcon';
import { useExpenses } from '../../ExpenseContext';
import MainLayout from './MainLayout';
import { useExpenseForm } from '../../hooks/useExpenseForm';
import * as S from './main.styled';
import { useLocation } from 'react-router-dom';

const CATEGORY_MAPPING = {
  Еда: 'food',
  Транспорт: 'transport',
  Жильё: 'housing',
  Развлечения: 'joy',
  Образование: 'education',
  Другое: 'others',
};

const REVERSE_CATEGORY_MAPPING = {
  food: 'Еда',
  transport: 'Транспорт',
  housing: 'Жильё',
  joy: 'Развлечения',
  education: 'Образование',
  others: 'Другое',
};

function MainPage() {
  const { expenses = [], setExpenses } = useExpenses() || {};
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('Дата');
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [showNewTransaction, setShowNewTransaction] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [showButtons, setShowButtons] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.showNewTransaction) {
      setShowNewTransaction(true);

      window.history.replaceState({}, document.title);
    } else {
      setShowNewTransaction(false);
    }
  }, [location.state, location.pathname]);

  const handleEditExpenseWrapper = (index) => {
    handleEditExpense(index);

    setShowNewTransaction(true);

    setSelectedRowId(null);
    setShowButtons(false);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleRowClick = (expenseId) => {
    if (isMobile) {
      if (selectedRowId === expenseId) {
        setSelectedRowId(null);
        setShowButtons(false);
      } else {
        setSelectedRowId(expenseId);
        setShowButtons(true);
      }
    }
  };

  const handleSubmit = async (expenseData, index) => {
    try {
      const transactionData = {
        description: expenseData.description,
        sum: parseFloat(expenseData.amount.replace(/\s/g, '')),
        category: CATEGORY_MAPPING[expenseData.category],
        date: expenseData.date,
      };

      if (index !== undefined) {
        await updateTransaction(expenses[index]._id, transactionData);
      } else {
        await createTransaction(transactionData);
      }

      await loadTransactions();
      setApiError(null);

      setNewDescription('');
      setNewCategory('');
      setNewDate('');
      setNewAmount('');
      setEditMode(false);
      setShowNewTransaction(false);
    } catch (error) {
      if (
        error.message?.includes('description') &&
        error.message?.includes('4 characters')
      ) {
        setApiError('Описание должно быть более 4 символов');
      } else {
        setApiError('Произошла ошибка при добавлении расхода');
      }
      throw error;
    }
  };

  const {
    newDescription,
    setNewDescription,
    newCategory,
    setNewCategory,
    newDate,
    setNewDate,
    newAmount,
    setNewAmount,
    errors,
    descriptionError,
    dateError,
    amountError,
    editMode,
    setEditMode,
    editingExpenseIndex,
    handleDescriptionChange,
    handleDateChange,
    handleAmountChange,
    handleEditExpense,
    handleAddExpense,
    // eslint-disable-next-line no-unused-vars
    resetForm,
  } = useExpenseForm(expenses, setExpenses, handleSubmit);

  const categories = [
    'Еда',
    'Транспорт',
    'Жильё',
    'Развлечения',
    'Образование',
    'Другое',
  ];
  const sortOptions = ['Дата', 'Сумма'];

  const loadTransactions = async () => {
    try {
      setIsLoading(true);
      const params = {
        sortBy: sortOrder === 'Дата' ? 'date' : 'sum',
        filterBy: selectedCategory
          ? CATEGORY_MAPPING[selectedCategory]
          : undefined,
      };
      const data = await getTransactions(params);
      const formattedData = data.map((transaction) => ({
        ...transaction,
        category: REVERSE_CATEGORY_MAPPING[transaction.category],
        date: new Date(transaction.date).toLocaleDateString('ru-RU', {
          timeZone: 'UTC',
        }),
        amount: `${transaction.sum} ₽`,
      }));
      setExpenses(formattedData);
    } catch (error) {
      console.error('Ошибка загрузки транзакций:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, sortOrder]);

  const handleDelete = async (id) => {
    try {
      await deleteTransaction(id);
      await loadTransactions();
      setSelectedRowId(null);
      setShowButtons(false);
    } catch (error) {
      console.error('Ошибка удаления транзакции:', error);
    }
  };

  const categoryIcons = {
    Еда: <FoodIcon />,
    Транспорт: <S.CategoryIcon src="/car (1).svg" alt="Transport icon" />,
    Жильё: <S.CategoryIcon src="/HouseIcon.svg" alt="Housing icon" />,
    Развлечения: (
      <S.CategoryIcon src="/PlayIcon.svg" alt="Entertainment icon" />
    ),
    Образование: <S.CategoryIcon src="/StudyIcon.svg" alt="Education icon" />,
    Другое: <S.CategoryIcon src="/OtherIcon.svg" alt="Other icon" />,
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
    setIsSortDropdownOpen(false);
  };

  const toggleSortDropdown = () => {
    setIsSortDropdownOpen(!isSortDropdownOpen);
    setIsCategoryDropdownOpen(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsCategoryDropdownOpen(false);
  };

  const handleSortSelect = (order) => {
    setSortOrder(order);
    setIsSortDropdownOpen(false);
  };

  const filterExpenses = (expenses, selectedCategory) => {
    return selectedCategory
      ? (expenses || []).filter(
          (expense) => expense?.category === selectedCategory
        )
      : expenses || [];
  };

  const sortExpenses = (expenses, sortOrder) => {
    return [...(expenses || [])].sort((a, b) => {
      if (sortOrder === 'Дата') {
        const dateA = a?.date
          ? new Date(a.date.split('.').reverse().join('-'))
          : new Date();
        const dateB = b?.date
          ? new Date(b.date.split('.').reverse().join('-'))
          : new Date();
        return dateB - dateA;
      } else {
        const amountA = a?.amount
          ? parseFloat(a.amount.replace(' ₽', '').replace(' ', ''))
          : 0;
        const amountB = b?.amount
          ? parseFloat(b.amount.replace(' ₽', '').replace(' ', ''))
          : 0;
        return amountB - amountA;
      }
    });
  };

  const filteredExpenses = filterExpenses(expenses, selectedCategory);
  const sortedExpenses = sortExpenses(filteredExpenses, sortOrder);

  return (
    <MainLayout
      sortedExpenses={sortedExpenses}
      newDescription={newDescription}
      newCategory={newCategory}
      newDate={newDate}
      newAmount={newAmount}
      editMode={editMode}
      editingExpenseIndex={editingExpenseIndex}
      categories={categories}
      categoryIcons={categoryIcons}
      errors={errors}
      descriptionError={descriptionError}
      dateError={dateError}
      amountError={amountError}
      handleAddExpense={handleAddExpense}
      handleDescriptionChange={handleDescriptionChange}
      handleDateChange={handleDateChange}
      handleAmountChange={handleAmountChange}
      setNewDescription={setNewDescription}
      setNewCategory={setNewCategory}
      setNewDate={setNewDate}
      setNewAmount={setNewAmount}
      selectedCategory={selectedCategory}
      sortOrder={sortOrder}
      isCategoryDropdownOpen={isCategoryDropdownOpen}
      isSortDropdownOpen={isSortDropdownOpen}
      toggleCategoryDropdown={toggleCategoryDropdown}
      toggleSortDropdown={toggleSortDropdown}
      handleCategorySelect={handleCategorySelect}
      handleSortSelect={handleSortSelect}
      sortOptions={sortOptions}
      onDelete={handleDelete}
      apiError={apiError}
      setApiError={setApiError}
      isMobile={isMobile}
      showNewTransaction={showNewTransaction}
      setShowNewTransaction={setShowNewTransaction}
      onRowClick={handleRowClick}
      selectedRowId={selectedRowId}
      showButtons={showButtons}
      expenses={expenses}
      handleEditExpense={handleEditExpenseWrapper}
    />
  );
}

export default MainPage;
