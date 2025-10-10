import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const [userId, setUserId] = useState("");
    const navigate = useNavigate();
    const handleSearch = (e) => {
        e.preventDefault();
        console.log("User ID:", userId);
        navigate(`/user/${userId}`);
    }
  return (
    <>
    <h1>User</h1>
    <form onSubmit={handleSearch}>
    <input type="number" placeholder='Enter User ID' value={userId} 
    onChange={(e) => setUserId(e.target.value)}
    required
    />
    <button className='btn btn-primary btn-sm m-2'>Search By user id</button>
    </form>
    </>
  )
}

export default User