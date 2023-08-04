import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {

    const {data: users = [], refetch} = useQuery(['users'], async() => {
        const res = await fetch('http://localhost:5000/usersInfo')
        return res.json();
    })

    return (
        <div>
            {users.length}
        </div>
    );
};

export default AllUsers;