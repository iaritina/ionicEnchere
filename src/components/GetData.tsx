import React, {useEffect,useState } from "react";
import axios from "axios";

function useData(url: any) {
    const [data,setData]=useState<Array<any>>([]);
    const [error,setError]=useState<any>(null);

    useEffect(()=>{
        axios
            .get(url)
            .then((response)=>{
                setData(response.data);
                if(response.data.error!=null){
                    setError(response.data.error);
                }   
            })
            .catch((error)=>{
                setError(error);
            })
    },[url]);
    console.log(data);
    return {data,error};   
}

export default useData;