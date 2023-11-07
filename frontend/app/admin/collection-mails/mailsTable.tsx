import { useGetMailMutation } from '@/redux/features/mail/mailApi';
import { RootState } from '@/redux/store';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

interface Column {
    id: 'name' | 'email' | 'time' | "date";
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: Date) => string;
}

const columns: readonly Column[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'email', label: 'Mail', minWidth: 100 },
    { id: 'time', label: 'Time' },
    { id: 'date', label: 'Date' },
];

const MailsTable = () => {
    const [getMail, { isSuccess }] = useGetMailMutation();
    const mails = useSelector((state: RootState) => state.mails)
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    useEffect(() => {
        const res = async () => {
            const page = 1, limit = 100;
            await getMail(page)
        }
        res()
    }, [])

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden'}}>
            <TableContainer sx={{ maxHeight: 740 }}>
                <Table stickyHeader aria-label="sticky table z-10">
                    <TableHead>
                        <TableRow>
                            <TableCell> </TableCell>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mails.data && mails?.data.map((row, index) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                                    <TableCell className='text-center'>{index + 1}</TableCell>
                                    <TableCell className='text-center'>{row.name}</TableCell>
                                    <TableCell className='text-center'>{row.email}</TableCell>
                                    <TableCell className='text-center'>{new Date(row.createdAt).toLocaleTimeString()}</TableCell>
                                    <TableCell className='text-center'>{new Date(row.createdAt).toLocaleDateString()}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
        </Paper>
    );
};

export default MailsTable;