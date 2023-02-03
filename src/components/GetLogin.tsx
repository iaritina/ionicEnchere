import React, {useEffect,useState } from "react";
import axios from "axios";



function UseData(url: any, login: String ,mdp:String) {
    axios
            .post(url,{"email": login,"mot": mdp})
            .then((response)=>{

                if(response.data.data!=null) {
                    localStorage.setItem("token",response.data.data.valeur);
                    localStorage.setItem("idUser",response.data.data.iduser); 
                    window.location.href="/list";
                }
            })
            .catch((error)=>{
            })
    
}

export default UseData;