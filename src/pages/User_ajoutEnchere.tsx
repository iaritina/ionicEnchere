import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonButtons,IonMenuButton, IonItem, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useParams } from 'react-router';
import AjoutEnchere from '../components/AjoutEnchere';

function Save(){
    return(
        <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Ajout Enchere</IonTitle>
                <IonButtons slot="start">
                  <IonMenuButton />
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
              <IonHeader collapse="condense">
                <IonToolbar>
                  <IonTitle size="large">Utilisateurs</IonTitle>
                </IonToolbar>
              </IonHeader>
              <div className='Save_pers'>
                <AjoutEnchere/>
              </div>
            </IonContent>
        </IonPage>
    );
}
export default Save;