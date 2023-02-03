import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonButtons,IonMenuButton, IonItem, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useParams } from 'react-router';
import Inscription from '../components/Inscription';

function Save(){
    return(
        <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Inscription</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
              <IonHeader collapse="condense">
                <IonToolbar>
                  <IonTitle size="large">Utilisateurs</IonTitle>
                </IonToolbar>
              </IonHeader>
              <div className='Save_pers'>
                <Inscription/>
              </div>
            </IonContent>
        </IonPage>
    );
}
export default Save;