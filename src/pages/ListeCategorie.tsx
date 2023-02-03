import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButtons, IonMenuButton, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import useData from '../components/GetData';

const Categorie: React.FC = () => {
    const { data, error } = useData("http://localhost:8080/categories");
    if (!data) {
        return <h1>Chargement....</h1>
    } else {
        return (<IonPage>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Avions</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonSelect>
                    {data.map(item => {
                        return (
                            <IonSelectOption>{item.categorie.idcategorie}</IonSelectOption>
                        )
                    })}
                </IonSelect>
            </IonContent>
        </IonPage>
        );
    }
};
export default Categorie;