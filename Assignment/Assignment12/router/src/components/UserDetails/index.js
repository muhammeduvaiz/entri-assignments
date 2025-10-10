import React from 'react'
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

export async function userLoader({params}){
    try{const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.Id}`);
    console.log(response.data);
    if(!response.data || Object.keys(response.data).length === 0){
        const error = new Response('Not Found', { status: 404 });
        throw error;
    }
    return response.data;
} catch (error) {
    console.log("error",error);
    throw error;
}  
}
const UserDetails = () => {
    const user = useLoaderData();
    return(
      <div>
      <p>user id : {user?.id}</p>
      <p>user name : {user?.name}</p>
      <p>user email : {user?.email}</p>
      <p>user website : {user?.website}</p>
      </div>
    )
 
}

export default UserDetails