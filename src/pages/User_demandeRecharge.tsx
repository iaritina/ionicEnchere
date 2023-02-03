import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonButtons,IonMenuButton, IonItem, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useParams } from 'react-router';
import DemandeRecharge from '../components/DemandeRecharge';

function SaveDemande(){
    return(
        <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Ajout Demande</IonTitle>
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
                <DemandeRecharge/>
              </div>
            </IonContent>
        </IonPage>
    );
}
export default SaveDemande;