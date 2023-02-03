import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonButtons,IonMenuButton, IonItem, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useParams } from 'react-router';
import Login from '../components/Login';
import Token from  '../components/GetToken';

function UserLogin(){
    Token ("");
    return(
        <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Se connecter</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
              <IonHeader collapse="condense">
                <IonToolbar>
                  <IonTitle size="large">Se connecter</IonTitle>
                </IonToolbar>
              </IonHeader>
              <div className='UserLogin_pers'>
                <Login/>
              </div>
            </IonContent>
        </IonPage>
    );
}
export default UserLogin;