import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([]);

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
}

ExpenseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export function useExpenses() {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error(
      'useExpenses must be used within an ExpenseContext.Provider'
    );
  }
  return context;
}
