import { IonContent, IonHeader, IonPage,IonLabel, IonItem, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cartão Virtual</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Cartão Virtuale</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            
          </IonCardHeader>

          <IonCardContent>
          <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=uksv02wilw" width="100%" height="480" scrolling="no" frameBorder="0" allowFullScreen></iframe>     

      </IonCardContent>
        </IonCard>
    </IonContent>
    </IonPage>
  );
};

export default Tab4;
