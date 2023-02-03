import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonButtons,IonMenuButton, IonItem, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useParams } from 'react-router';
import Dmd from './Recharge';

function User_Dmd(){
    return(
        <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Demandes credits</IonTitle>
                <IonButtons slot="start">
                  <IonMenuButton />
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
              <IonHeader collapse="condense">
                <IonToolbar>
                  <IonTitle size="large">Demandes de credits</IonTitle>
                </IonToolbar>
              </IonHeader>
              <div className='Save_pers'>
                <Dmd/>
              </div>
            </IonContent>
        </IonPage>
    );
}
export default User_Dmd;