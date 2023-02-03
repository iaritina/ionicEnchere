import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
  } from '@ionic/react';
  
  import { useLocation } from 'react-router-dom';
  import { archiveOutline, archiveSharp, bookmarkOutline,create, albums,power,wallet,calendar,add, car, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
  import './Menu.css';
  
  interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
  }
  
  const appPages: AppPage[] = [
    {
      title: 'Liste de mes enchères',
      url: '/list',
      iosIcon: albums,
      mdIcon: albums
    },
    {
      title: "Nouvelle enchère",
      url: '/AjoutEnhere',
      iosIcon: create,
      mdIcon: create
    },
    {
      title: 'Recharger mon compte',
      url: '/demande',
      iosIcon: wallet,
      mdIcon: wallet
    },
    {
      title: 'Se déconnecter',
      url: '/deco',
      iosIcon: power,
      mdIcon: power
    }
  ];
  
  const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  
  const Menu: React.FC = () => {
    const location = useLocation();
  
    return (
      <IonMenu contentId="main" type="overlay">
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader>Encheres</IonListHeader>
            <IonNote></IonNote>
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>
        </IonContent>
      </IonMenu>
    );
  };
  
  export default Menu;
  