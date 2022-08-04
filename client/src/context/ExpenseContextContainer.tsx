import { ExpenseLogsProvider } from './ExpenseContext';

export const ExpenseLogsContextContainer = ({ children }: React.PropsWithChildren<{}>) => {
  return (
      <ExpenseLogsProvider>
        { children }
      </ExpenseLogsProvider>
  );
};
