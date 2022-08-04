import React from 'react';
import { ExpenseLogsContextContainer } from './ExpenseContextContainer';

// @ts-ignore
export const WithContextContainer = (BaseComponent) => {
  return function WrappedWithContextContainer() {
    return (
        <ExpenseLogsContextContainer>
          <BaseComponent />
        </ExpenseLogsContextContainer>
    );
  };
};