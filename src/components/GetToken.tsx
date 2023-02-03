import React, {useEffect,useState } from "react";
import axios from "axios";

function Token(idUser:String) {
    axios
            .post("http://encherews-production-f5d6.up.railway.app/tokens",{"valeur": localStorage.getItem("token") })
            .then((response)=>{
                console.log(response);
                /* if(response.data.error!=null) {
                    window.location.href="/login/"+idUser;     
                }else
                    window.location.href="/list"; */
                
            })
            .catch((error)=>{
            })
    
}

export default Token;