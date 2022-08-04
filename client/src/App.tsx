// import { useContext } from 'react';
// import { ExpenseLogsContext } from './context/ExpenseContext'
import { ExpenseLogsContextContainer } from './context/ExpenseContextContainer';
import { ToolbarExpenses } from './components/Toolbar/Toolbar';
import { ExpensesTable } from './components/Table/Table';
import { FormDialog } from './components/CreateExpense/CreateExpense';

export const App = () => {
  // const { expenseLogs, updateContextValue } = useContext(ExpenseLogsContext);

  // const {
  //   data,
  //   createModalOpen,
  // } = expenseLogs;

  return (
    <ExpenseLogsContextContainer>
       <>
          <FormDialog />
          <ToolbarExpenses />
          <ExpensesTable />
        </>
      {/* {data && data.length ?
        <>
          <FormDialog />
          <ToolbarExpenses />
          <ExpensesTable />
        </>
        : null} */}
    </ExpenseLogsContextContainer>
  );
}
