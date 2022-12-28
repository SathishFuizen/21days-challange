import React,{useState,useEffect} from 'react'
import axios from 'axios';

const Fetch = () => {
    const [Data,setData]=useState([]);
    const getusers=async()=>{
       const myusers=await axios.get("https://dummyjson.com/users")
       const result=myusers.data.users;
       
       console.log(result);
       //console.log(result1);
       setData(result);
    }

    useEffect(()=>{
       getusers();

        

    },[])
  return (
    <div>
        {
            Data.map((result)=>(<li>{result.age}</li>))
        }

       

    </div>
  )
}

export default Fetch