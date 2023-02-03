import { IonButton, IonCheckbox, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { Console } from 'console';
import { useParams } from 'react-router';
import UseData from './GetLogin';
import Token from  '../components/GetToken';


const Login: React.FC = () => {
  var email='edmond@gmail.com';
  var mdp='1234';
  
  function connect(){
    UseData('http://encherews-production-f5d6.up.railway.app/utilisateurs',email,mdp); 
  }
  function inscription(){window.location.href="saveUser";}


 
  return (
  <form className="ion-padding">
  <IonItem>
    <IonLabel position="floating">Email</IonLabel>
    <IonInput type="text" name='email'  value="edmond@gmail.com" onIonChange={(e) => {email=e.detail.value!}}/>   
  </IonItem>
  <IonItem>
    <IonLabel position="floating">Mot de passe</IonLabel>
    <IonInput type="password"  name='mdp'  value="1234" onIonChange={(e)  => {mdp=e.detail.value!}}/>
  </IonItem>
  <br></br>
  <br></br>
  <IonButton className="ion-margin-top" type="submit" expand="block" onClick={connect}>
    Login
  </IonButton>
  <br></br>
  <br></br>
  <IonButton className="ion-margin-top" type="submit" expand="block" onClick={inscription}>
    S'inscrire
  </IonButton>
  </form>
  )
};

export default Login;
