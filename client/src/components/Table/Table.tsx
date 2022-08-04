import { useContext } from 'react';
import { ExpenseLogsContext } from '../../context/ExpenseContext'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export const ExpensesTable = () => {
  const { expenseLogs } = useContext(ExpenseLogsContext);

  const {
    data,
  } = expenseLogs;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold' }}>Expense Name</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Purchased Date</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Amount</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}          
            >
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.purchased}</TableCell>
              <TableCell align="left">{row.amount}</TableCell>
              <TableCell align="left">{row.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
