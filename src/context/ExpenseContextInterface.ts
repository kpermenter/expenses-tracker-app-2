export interface ExpenseLogsValues {
  data: Array<any>,
  createModalOpen: boolean,
}

export interface ExpenseLogs {
  expenseLogs: ExpenseLogsValues,
  updateContextValue?: (name: string, values: any) => void,
  // @ts-ignore
  updateContextValues?: (object) => void,
}