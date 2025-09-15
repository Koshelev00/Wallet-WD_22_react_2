import Header from './components/header/Header';
import AppRoutes from './AppRoutes';
import { ExpenseProvider } from './ExpenseContext';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './assests/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <ExpenseProvider>
        <GlobalStyles />
        <Header />
        <AppRoutes />
      </ExpenseProvider>
    </BrowserRouter>
  );
}

export default App;