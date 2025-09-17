import PropTypes from 'prop-types';
import ExpensesTable from './ExpensesTable';
import ExpenseForm from './ExpenseForm';
import * as S from './main.styled';

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
  onDelete,
  apiError,
  setApiError,
  isMobile,
  showNewTransaction,
  setShowNewTransaction,
  onRowClick,
  showButtons,
  expenses,
  selectedRowId,
}) => {
  // Добавьте эту функцию внутри компонента
  const getExpenseIndexById = (id) => {
    return expenses.findIndex((expense) => expense._id === id);
  };

  return (
    <S.MainBlock>
      {!isMobile && <S.H2>Мои расходы</S.H2>}
      <S.ContentContainer>
        {!showNewTransaction && (
          <S.ExpensesTableContainer>
            {isMobile && (
              <S.TitleBox>
                <S.Title>Мои расходы</S.Title>
                <S.NewTransactionBox>
                  <S.Add src="../../../public/Add.svg" alt="add" />
                  <S.NewTransaction
                    onClick={() => setShowNewTransaction(!showNewTransaction)}
                  >
                    Новый расход
                  </S.NewTransaction>
                </S.NewTransactionBox>
              </S.TitleBox>
            )}
            <S.TableHeader>
              {!isMobile && <S.H3>Таблица расходов</S.H3>}
              <S.FiltersRow>
                <S.FilterWrapper>
                  <S.FilterButton onClick={toggleCategoryDropdown}>
                    Фильтровать по категории{' '}
                    <S.GreenLink>{selectedCategory}</S.GreenLink>
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
                          onClick={() => handleCategorySelect(category)}
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
                    <S.GreenLink>{sortOrder.toLowerCase()}</S.GreenLink>
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
                          onClick={() => handleSortSelect(option)}
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
                onDelete={onDelete}
                isMobile={isMobile}
                onRowClick={onRowClick}
                showButtons={showButtons}
                selectedRowId={selectedRowId}
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
            {!isMobile ||
              (showButtons && (
                <S.ButtonBox>
                  <S.EditTransactionButton
                    onClick={() => {
                      const index = getExpenseIndexById(selectedRowId);
                      if (index !== -1) {
                        handleEditExpense(index);
                      }
                    }}
                  >
                    Редактировать расход
                  </S.EditTransactionButton>
                  <S.Delete onClick={() => onDelete(selectedRowId)}>
                    Удалить расход
                  </S.Delete>
                </S.ButtonBox>
              ))}
          </S.ExpensesTableContainer>
        )}

        {(isMobile ? showNewTransaction : true) && (
          <ExpenseForm
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
            apiError={apiError}
            setApiError={setApiError}
            isMobile={isMobile}
            showNewTransaction={showNewTransaction}
            setShowNewTransaction={setShowNewTransaction}
          />
        )}
      </S.ContentContainer>
    </S.MainBlock>
  );
};

MainLayout.propTypes = {
  onDelete: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
    })
  ),
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
  setNewCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  sortOrder: PropTypes.string.isRequired,
  isCategoryDropdownOpen: PropTypes.bool.isRequired,
  isSortDropdownOpen: PropTypes.bool.isRequired,
  toggleCategoryDropdown: PropTypes.func.isRequired,
  toggleSortDropdown: PropTypes.func.isRequired,
  handleCategorySelect: PropTypes.func.isRequired,
  handleSortSelect: PropTypes.func.isRequired,
  sortOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  apiError: PropTypes.string,
  setApiError: PropTypes.func,
  isMobile: PropTypes.bool,
  showNewTransaction: PropTypes.bool,
  setShowNewTransaction: PropTypes.func,
  onRowClick: PropTypes.func,
  selectedRowId: PropTypes.string,
  showButtons: PropTypes.bool,
};

export default MainLayout;
