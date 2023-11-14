import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { AiOutlineDelete } from 'react-icons/ai';
import { Box, Button } from '@mui/material';
import { useTheme } from 'next-themes';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'title', headerName: 'Course Title', flex: 1 },
    { field: 'ratings', headerName: 'Ratings', flex: 0.5 },
    { field: 'purchased', headerName: 'Rurchased', flex: 0.5 },
    { field: 'created_at', headerName: 'Created', flex: 0.5 },

    {
        field: '',
        headerName: 'Delete',
        flex: 0.2,
        sortable: false,
        renderCell: (params: any) =>
            <>
                <Button>
                    <AiOutlineDelete className="dark:text-white text-black" size={20} />
                </Button>
            </>
    },
];

const rows = [
    { id: 1, title: 'Snow', purchased: 'Jon', rating: 35, created_at: "xas" },
]

const AllCourses = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div className='mt-[120px]'>
            <Box m="20px">
                <Box m="40px 0 0 0" height="80vh" 
                    sx={{
                    "& .MuiDataGird-root":{
                        border:"none",
                        outline:"none"
                    },
                    "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon":{
                        color: theme === "dark" ? "#fff": "#000"
                    },
                    "& .MuiDataGrid-sortIcon":{
                        color: theme === "dark" ? "#fff": "#000"
                    },
                    "& .MuiDataGrid-row":{
                        color: theme === "dark" ? "#fff": "#000",
                        borderBottom: theme === "dark" ? "1px solid #ffffff30 !important": "1px solid #ccc !important"
                    },
                    "& .MuiTablePagination-root":{
                        color: theme === "dark" ? "#fff": "#000",
                    },
                    "& .MuiDataGrid-cell":{
                        borderBottom:"none",
                    },
                    "& .name-column--cell":{
                        color: theme === "dark" ? "#fff": "#000",
                    },
                    "& .MuiDataGrid-columnHeaders":{
                        color: theme === "dark" ? "#fff": "#000",
                        borderBottom:"none",
                        backgroundColor: theme === "dark" ? "#3e4396": "#a4a9fc",
                    },
                    "& .MuiDataGrid-virtualScroller":{
                        backgroundColor: theme === "dark" ? "#1f2a40": "#f2f0f0",
                    },
                    "& .MuiDataGrid-footerContainer":{
                        color: theme === "dark" ? "#fff": "#000",
                        borderTop:"none",
                        backgroundColor: theme === "dark" ? "#3e4396": "#a4a9fc",
                    },
                    "& .MuiCheckbox-root":{
                        color: theme === "dark" ? "#b7ebde !important": "#000 !important",
                    },
                    "& .MuiDataGrid-toolbarConatainer .MuiButton-text":{
                        color: "#fff !important"
                    }
                    }}
                >
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[50, 100]}
                        checkboxSelection
                    />
                </Box>
            </Box>
        </div>
    );
};

export default AllCourses;