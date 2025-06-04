import React, { useEffect } from 'react'
import axios from 'axios';
import UserData from '../UserData';
const Axiosdata = () => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((Response)=>{
            console.log(Response?.data);
            setData(Response.data);
        })
        .catch((error)=>{
            console.error("Error fetching data:", error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);
    console.log(data);
  return (
    <>
    <div><h1>
        Axios Data Component
        </h1></div>
        {
            data?.length > 0 ?(
                <div>
                    <UserData users={data} />
                    
                </div>
            ) : (
                loading ? (<>loading....</>):(
                    <>No Data Found</>
                )
            )
        }
        </>
  )
}

export default Axiosdata