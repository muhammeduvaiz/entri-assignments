import React from 'react'
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

export async function userLoader({params}){
    console.log(params);
    try{
const res=await axios.get(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
    console.log(res);
    return res.data;
    }
    catch(err){
        console.error("Error fetching user data:", err);
        throw new Response("User not found", { status: 404 });
    }
    
}

const UserDetails = () => {
    const user = useLoaderData();
  return (
    <div><h1>User Details</h1>
    <p>user id : {user?.name}</p>
    <p>user email : {user?.email}</p>
    <p>user website : {user?.website}</p>
    
    </div>
  )
}

export default UserDetails