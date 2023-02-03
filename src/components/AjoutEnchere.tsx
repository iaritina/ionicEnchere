import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonList,IonSelectOption,IonSelect,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonButtons,IonMenuButton, IonItem, IonInput, IonButton,IonCol, IonGrid, IonRow, IonCheckbox, IonLabel, IonTextarea } from '@ionic/react';
import axios from "axios";
import { useState } from 'react';
import useData from './GetData';

const AjoutEnchere:React.FC=()=>{
    const id=localStorage.getItem("idUser");
    const[dt,setData]=useState({});
    const { data, error } = useData(" http://encherews-production-f5d6.up.railway.app/categories/");
    console.log(data);
    let photo: any[] = [];
    const user={
        idproprietaire:id,
        idcategorie:"",
        produit:"",
        description:"",
        mise:"",
        minimal:"",
        duree:"",
        photo :photo,
    };

    function addImage(idEnch : any){
        console.log(idEnch);
        axios
            .post("http://encherews-production-f5d6.up.railway.app/image",{"idenchere": idEnch,"photo": photo})
            .then((response)=>{
               
            })
            .catch((error)=>{
                alert("Une erreur s'est produite lors de l'ajout" + error);
                console.log(error);
            });
    };
    const handleFileInput=(event: React.ChangeEvent<HTMLInputElement>) => {
        for(let i=0;i<event.target.files!.length;i++){
            const file=event.target.files![i];
            const reader=new FileReader();
            reader.onload= ()=>{
                let str=reader.result as String;   
                    photo.push(str.toString());
            };
            reader.readAsDataURL(file);
        }
        user.photo=photo;
        console.log(photo);
    }
    const handleSubmit=()=>{
        console.log(user+" Json");
        axios
            .post("http://localhost:8080/enchereV",user)
            .then((response)=>{
                const x=response.data.data;
                setData(x);
                user.idproprietaire="";
                user.idcategorie="";
                user.produit="";
                user.description="";
                user.mise="";
                user.minimal="";
                user.duree="";
                user.photo=photo;
                addImage(response.data.data.idenchere);
            })
            .catch((error)=>{
                alert("Une erreur s'est produite lors de l'ajout" + error);
                console.log(error);
            });
    };
    return(
        
        <form className="ion-padding">
            <IonList>
                <IonItem>
                    <IonSelect placeholder="Choisir une catégorie" interface="popover" onIonChange={(e)=>(user.idcategorie=e.detail.value!)}>
                        {data.map(item => {
                            return (
                            <IonSelectOption key={item.idcategorie} value={item.idcategorie}>{item.designation}</IonSelectOption>
                            )
                        })}
                    </IonSelect>
                </IonItem>
            </IonList>
            <IonItem>
                <IonLabel position="floating">produit</IonLabel>
                <IonInput type="text" value={user.produit} name="produit" onIonChange={(e)=>(user.produit=e.detail.value!)} />
            </IonItem>
            <IonItem>
                <IonInput ><input type="file" accept="image/*" multiple onChange={handleFileInput} /></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Description</IonLabel>
                <IonTextarea value={user.description} name="description" onIonChange={(e)=>(user.description=e.detail.value!)}/>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Mise minimal</IonLabel>
                <IonInput type="number" value={user.mise} name="mise" onIonChange={(e)=>(user.mise=e.detail.value!)} />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Durée en minutes</IonLabel>
                <IonInput type="number" step='0.1' value={user.duree} name="duree" onIonChange={(e)=>(user.duree=e.detail.value!)} />
            </IonItem>
            <IonButton className="ion-margin-top" type="submit" expand="block" onClick={handleSubmit}>
                Valider
            </IonButton>
        </form>
    )
};
export default AjoutEnchere;