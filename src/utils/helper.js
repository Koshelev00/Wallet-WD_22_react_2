export const isValidDateFormat = (date) => {
    const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    if (!dateRegex.test(date)) return false;
    const [day, month, year] = date.split('.').map(Number);
    const isValidDay = day >= 1 && day <= 31;
    const isValidMonth = month >= 1 && month <= 12;
    const isValidYear = year >= 1900 && year <= 2100;
    const isRealDate = () => {
      const parsedDate = new Date(year, month - 1, day);
      return parsedDate.getDate() === day && parsedDate.getMonth() + 1 === month && parsedDate.getFullYear() === year;
    };
    return isValidDay && isValidMonth && isValidYear && isRealDate();
  };
  
  export const isValidAmountFormat = (amount) => {
    const cleanedAmount = amount.replace(/\s/g, '');
    const amountRegex = /^\d+$/;
    return amountRegex.test(cleanedAmount);
  };