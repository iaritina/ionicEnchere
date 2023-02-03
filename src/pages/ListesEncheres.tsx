import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard,IonImg, IonCardContent, IonCardHeader, IonCardTitle, IonButtons,IonMenuButton,IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import useData from '../components/GetData';

const Encheres: React.FC=() => {
    var idUser= localStorage.getItem("idUser");
    const { data, error } = useData(" http://encherews-production-f5d6.up.railway.app/encheres/enchereUser/"+idUser);
    console.log(data);
    if (!data) {
        return <h1>Chargement....</h1>
    } else {
        return (<IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Liste de vos propre enchères</IonTitle>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Enchere</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {data.map(item => {
                    var st="en cours"
                    if(item.statut==1)
                    st="Terminé"
                    return (
                        <IonCard>
                            <IonItem routerLink="#" detail={false}>
                                <IonCardContent>
                                <IonImg  style={{ width: '150px' }} src={item.image[0]} alt=""></IonImg>
                                    <IonCardTitle> {item.categorie.designation} {item.produit}</IonCardTitle>
                                    <IonCardContent>Date Mise: {item.dateMise}</IonCardContent>
                                    <IonCardContent>Date de Fin: {item.fin}</IonCardContent>
                                    <IonCardContent>Statut: {st}</IonCardContent>
                                </IonCardContent>
                            </IonItem>
                        </IonCard>
                    )
                })}
            </IonContent>
        </IonPage>
        );
    }
};
export default Encheres;