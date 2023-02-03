import React, {useEffect,useState } from "react";
import axios from "axios";
import { logoWindows } from "ionicons/icons";



 function UseData()  {
    axios
            .post("http://encherews-production-f5d6.up.railway.app/deconnections",{"valeur": localStorage.getItem("token")})
            .then((response) => {
                window.location.href="/";
            })
            .catch((error)=>{
            })
    
}

export default UseData; 