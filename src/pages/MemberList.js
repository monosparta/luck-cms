import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import "./MemberList.css";

const MemberList = (props) => {

    const columns = [
        {
            field: 'firstName',
            headerName: '使用者名稱',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: '信箱',
            width: 150,
            editable: true,
        },
        {
            field: 'age',
            headerName: '身份',
            width: 150,
            editable: true,
        },
        {
            field: 'button',
            headerName: '',
            type: Button,
            width: 150,
            editable: true,
        },
    ];
    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
    return (
        <div>
            <div className="MemberHeader">
                管理者列表
                <Button
                    variant="contained"
                    style={{
                        width: 124,
                        height: 44,
                        background: "#2F384F",
                        boxShadow: "none",
                        fontSize: 16,
                        margin: 5,
                        textAlign: "left"
                    }}
                >
                    新增使用者
                </Button>
            </div>
            <div className="AddMember">

            </div>
            <div className="MemberList">
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[3]}
                    />
                </Box>
            </div>
        </div>
    );
};

export default MemberList;
