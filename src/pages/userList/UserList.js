import React, { useState } from 'react';
import './UserList.css'


import { DataGrid } from '@material-ui/data-grid';

// Icons
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../DummyData';

import { Link } from "react-router-dom"


const UserList = () => {
    const [data ,setData] = useState(userRows); 

    const handleDelete = (id)=>{
        setData(data.filter(item => item.id !== id ))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className='userListUser'>
                        <img className='userListImg' src={params.row.avatar} alt="hello" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 130 },
        {
            field: 'status',
            headerName: 'status',
            width: 130,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 150,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/"+params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon className='userListDelete' onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }

    ];

    return (
        <div className='userList'>
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
        </div>
    );
};

export default UserList;