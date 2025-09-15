export const filterExpenses = (expenses, selectedCategory) =>
    selectedCategory
      ? expenses.filter((expense) => expense.category === selectedCategory)
      : expenses;
  
  export const sortExpenses = (expenses, sortOrder) =>
    [...expenses].sort((a, b) => {
      if (sortOrder === 'Дата') {
        const dateA = new Date(a.date.split('.').reverse().join('-'));
        const dateB = new Date(b.date.split('.').reverse().join('-'));
        return dateB - dateA;
      } else {
        const amountA = parseFloat(a.amount.replace(' ₽', '').replace(' ', ''));
        const amountB = parseFloat(b.amount.replace(' ₽', '').replace(' ', ''));
        return amountB - amountA;
      }
    });