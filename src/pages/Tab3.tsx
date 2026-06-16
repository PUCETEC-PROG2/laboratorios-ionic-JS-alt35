import { IonCard, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil</IonTitle>
          </IonToolbar>
        </IonHeader>

          <div className='card-container'>
            <IonCard className='card'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpDTI4iUgc3E2OyOJCrxOsR3ffxB1SJ-BYDw&s" alt="Avatar"/>
              <IonHeader>
                <IonCardTitle>Jordan Castillo</IonCardTitle>
                <IonCardSubtitle>jordancastillopvc</IonCardSubtitle>
                <IonContent> <p>cualquier civilazion que nos contacte o nos haya contacto en el pasado</p></IonContent>
              </IonHeader>
            </IonCard> 
          </div>        


      </IonContent>
    </IonPage>
  );
};

export default Tab3;
