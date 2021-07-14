
import { IonContent, IonText, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';



const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Transmissão Ao Vivo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Transmissão</IonTitle>
          </IonToolbar>
        </IonHeader>
     <IonCard>      <div className="video-container">
        <iframe className="video" src="https://www.youtube.com/embed/live_stream?channel=UC6tib1v2h--do1NfJW6GX9Q" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>    
      </div>
     </IonCard>

     <IonCard>
     <IonHeader>
        <IonToolbar>
          <IonTitle>Próximas Transmissões</IonTitle>
        </IonToolbar>
      </IonHeader>
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcitbarueri&tabs=events&width=340&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId" className="iframe"></iframe>     
      </IonCard>
       </IonContent>
    </IonPage>
    
  );
};

export default Tab2;
