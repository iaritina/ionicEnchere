import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonButtons,IonMenuButton, IonItem, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useParams } from 'react-router';
import Demande from '../components/DemandeRecharge';

function DemandeRecharge(){
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Recharge</IonTitle>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Demande de rechargement de votre compte</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <div className='Save_pers'>
                    <Demande />
                </div>
            </IonContent>
        </IonPage>
    );
}
export default DemandeRecharge;