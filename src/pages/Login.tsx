import { IonButton, IonButtons, IonCheckbox, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { Console } from 'console';
import { useParams } from 'react-router';
import './Login.css';
import UseData from '../components/GetLogin';


const Login: React.FC = () => {
  var email='';
  var mdp='';
  function connect(){
    console.log(email);
    console.log(mdp);
    UseData('http://localhost:8080/utilisateurs',email,mdp); 
  }

 
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <IonTitle>Se connecter</IonTitle>
        </IonToolbar>
  </IonHeader>
  <div className="box"> 
  <div className="titre"> 
    <IonTitle>Se connecter</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
    
  </div>
  <br></br>
  <br></br>
  <IonItem>
    <IonLabel position="floating">Email</IonLabel>
    <IonInput type="text" name='email' onIonChange={(e) => {email=e.detail.value!}}/>   
  </IonItem>
  <IonItem>
    <IonLabel position="floating">Mot de passe</IonLabel>
    <IonInput type="password" name='mdp' onIonChange={(e)  => {mdp=e.detail.value!}}/>
  </IonItem>
  <br></br>
  <br></br>
  <IonButton className="ion-margin-top" type="submit" expand="block" onClick={connect}>
    Login
  </IonButton>
  </div>
    </IonPage>
  );
};

export default Login;
