import { useState } from 'react';
import { useContext } from 'react';
import { ExpenseLogsContext } from '../../context/ExpenseContext'
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { createNewExpense } from '../../api/api';

export const FormDialog = () => {
  const { expenseLogs, updateContextValue } = useContext(ExpenseLogsContext);
  const [value, setValue] = useState<Date | null>(new Date('2014-08-18T21:11:54'));

  const {
    // data,
    createModalOpen,
  } = expenseLogs;

  const handleClose = () => {
    /* @ts-ignore */
    updateContextValue('createModalOpen', false);
  };

  const handleDateChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  const saveExpense = () => {
    createNewExpense({
      "name": "Soccer",
      "purchased": "02/20/1999",
      "category": "Sports",
      "amount": '200',
    });
  }

  return (
    <>
      <Dialog open={createModalOpen} onClose={handleClose}>
        <DialogTitle>Create Expense</DialogTitle>
        <DialogContent>
        <div style={{ marginBottom: 30 }}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Expense Name"
            type="text"
            fullWidth
            variant="standard"
            />
            </div>
          <div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Purchased Date"
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
            </LocalizationProvider>
            </div>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Amount"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Category"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={saveExpense}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
