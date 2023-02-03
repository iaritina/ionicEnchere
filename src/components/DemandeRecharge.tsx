import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonButtons,IonMenuButton, IonItem, IonInput, IonButton,IonCol, IonGrid, IonRow, IonCheckbox, IonLabel } from '@ionic/react';
import axios from "axios";
import React, { useState } from 'react';

const Demanderecharge:React.FC=()=>{
    const idUser=localStorage.getItem("idUser");
    const[data,setData]=useState({});
    const demande={
        iduser:"",
        periode:"",
        somme:""
    };
    if(idUser!=null)
        demande.iduser=idUser.toString();
    const handleSubmit=()=>{
        console.log(demande);
        axios
            .post("http://encherews-production-f5d6.up.railway.app/demandes",demande)
            .then((response)=>{
                const x=response.data.data;
                console.log(x);
                setData(x);
                demande.iduser="";
                demande.periode="";
                demande.somme="";
            })
            .catch((error)=>{
                alert("Une erreur s'est produite lors de l'ajout");
                console.log(error);
            });
    };
    return(
        
        <form className="ion-padding">
            <IonItem>
                <IonLabel position="floating">Somme en Ariary</IonLabel>
                <IonInput type="number" value={demande.somme} name="somme" onIonChange={(e)=>(demande.somme=e.detail.value!)} />
            </IonItem>
            <IonButton className="ion-margin-top" type="submit" expand="block" onClick={handleSubmit}>
                Demander
            </IonButton>
        </form>
    )
};
export default Demanderecharge;