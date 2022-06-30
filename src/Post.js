import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link,useParams } from "react-router-dom";

export default function Post() {
    let {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id);
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, [id]);

  return (
    <div>
        <h1> Post {id} </h1>
            {
                loading ? <p>Loading....</p> : 
                <>
                    <p>{data.body}</p> 
                </>
            }
        <Link to="/"> Back to Home</Link>
    </div>
  )
}
