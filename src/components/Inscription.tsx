import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonButtons,IonMenuButton, IonItem, IonInput, IonButton,IonCol, IonGrid, IonRow, IonCheckbox, IonLabel } from '@ionic/react';
import axios from "axios";
import { useState } from 'react';

const Inscription:React.FC=()=>{
    const[data,setData]=useState({});
    const user={
        nom:"",
        prenom:"",
        email:"",
        mot:""
    };
    const handleSubmit=()=>{
        console.log(user);
        axios
            .post("http://encherews-production-f5d6.up.railway.app/utilisateurs/inscription",user)
            .then((response)=>{
                const x=response.data.data;
                setData(x);
                user.nom="";
                user.prenom="";
                user.email="";
                user.mot="";
                localStorage.setItem("idUser",response.data.data.iduser);
                window.location.href="/list";
            })
            .catch((error)=>{
                alert("Une erreur s'est produite lors de l'ajout");
                console.log(error);
            });
    };
    return(
        
        <form className="ion-padding">
            <IonItem>
                <IonLabel position="floating">Nom</IonLabel>
                <IonInput type="text" value={user.nom} name="nom" onIonChange={(e)=>(user.nom=e.detail.value!)}/>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Prenom</IonLabel>
                <IonInput type="text" value={user.prenom} name="prenom" onIonChange={(e)=>(user.prenom=e.detail.value!)} />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput type="email" value={user.email} name="email" onIonChange={(e)=>(user.email=e.detail.value!)} />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput type="password" value={user.mot} name="mot" onIonChange={(e)=>(user.mot=e.detail.value!)}/>
            </IonItem>
            <IonButton className="ion-margin-top" type="submit" expand="block" onClick={handleSubmit}>
                S'inscrire
            </IonButton>
        </form>
    )
};
export default Inscription;