import { IonContent, IonHeader,IonButton, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Links</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Links</IonTitle>
          </IonToolbar>
        </IonHeader>
       
       
        <a href="https://www.facebook.com/citbarueri">
        <IonItem button onClick={() => { }} detail>
          <IonLabel>
            Facebook: Cit Barueri
          </IonLabel>
        </IonItem></a>
        <a href="https://www.youtube.com/c/TVINOVA%C3%87%C3%83OBARUERI/videos">
        <IonItem button onClick={(download) => { }} detail>
          <IonLabel>
            Youtube: Tv Inovação Barueri
          </IonLabel>
        </IonItem>
      </a>
      <a href="https://www.instagram.com/inovacao.barueri/">
        <IonItem button onClick={() => { }} detail>
          <IonLabel>
            Instagram: @inovacao.barueri
          </IonLabel>
        </IonItem>
      </a>
      <a href="https://servicos.barueri.sp.gov.br/inovacaobarueri/">
        <IonItem button onClick={() => { }} detail>
          <IonLabel>
            Site Inovação Barueri
          </IonLabel>
        </IonItem>
      </a>
     
      <a href="https://servicos.barueri.sp.gov.br/tvinovacaobarueri/">
        <IonItem button onClick={() => { }} detail>
          <IonLabel>
            Site TV Inovação Barueri
          </IonLabel>
        </IonItem>
      </a>

    </IonContent>
    </IonPage>
  );
};

export default Tab3;
