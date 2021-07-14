import { IonContent, IonButton, IonHeader, IonPage,IonLabel, IonItem, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, useIonToast } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [present, dismiss] = useIonToast();
  return (
    <IonPage     

    onLoad={() => present('Bem-Vindo à Tv Inovação Barueri!', 1500)}
     >
     

      <IonHeader>
        <IonToolbar>
          <IonTitle>Programas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Programas</IonTitle>
          </IonToolbar>
        </IonHeader>
      
        <IonCard>
          <IonCardHeader>
            <img src="https://trello-attachments.s3.amazonaws.com/5de0fb5e5137420a333d2827/5fb3fcbf32df464329f7193f/2489289c3f3c6789cf73c442cdbafe93/mulheres_podcasts.jpg" />
           
            <IonCardTitle>Mulheres na Tecnologia</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          Trazer convidados de relevância para contribuir com a mudança atual do cenário, onde apenas 25% das mulheres no Brasil atuam na área de tecnologia, promover a igualdade e desmistificar que a mulher não pode, ou não vai se sentir à vontade em um ambiente ainda muito masculino.
Apresentação: Érika Alves
      </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <img src="https://trello-attachments.s3.amazonaws.com/5de0fb5e5137420a333d2827/5fb3fcbf32df464329f7193f/8962cd61d64652e90deba8990f494052/inova%C3%A7%C3%A3o_barueri_podcast.jpg" />
            
            <IonCardTitle>Inovação Barueri</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          Esclarecer e explicar sobre o novo ambiente de inovação, sendo um programa exclusivo para difundir as ações do Centro Tecnológico de Desenvolvimento, Pesquisas e Incubadora de Empresas.
Apresentação: Érika Alves

      </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <img src="https://trello-attachments.s3.amazonaws.com/5de0fb5e5137420a333d2827/6023b83c2b0fc863db554e43/754f78adad4b01c5f5b99a775a13afcf/Podcast_Novos_Neg%C3%B3cios.png" />
            <IonCardTitle>Novos Negócios</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          Incentivo ao empreendedorismo, através da exibição de histórias de superação e dicas práticas para os empreendedores.
Apresentação: Valdir Baptista
      </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <img src="https://trello-attachments.s3.amazonaws.com/5de0fb5e5137420a333d2827/5fb3fcbf32df464329f7193f/b61ebff05403acefc52bb3bf391396d2/capa_barueri_sustentavel.png" />
            <IonCardTitle>Barueri + Sustentável in Smart City</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          Difundir as ações de cidades inteligentes e sutentáveis realizadas no munícipio de Barueri.
Apresentação: M. Adélia Stos
      </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <img src="https://trello-attachments.s3.amazonaws.com/5de0fb5e5137420a333d2827/5fb3fcbf32df464329f7193f/7f848233f0a4b1c71c35c9556669ac4d/Podcast-Inova%2BAcao-LucasMarques.jpg" />
            <IonCardTitle>Inovação + Jovem</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          O objetivo central é trazer informações e pessoas de relevância para despertar uma nova forma de pensamento e desta forma inspirar o público jovem para ação de uma forma inteligente e inovadora. Traz a participação mais efetiva dos estagiários do programa de desenvolvimento de talentos.
Apresentação: Érika Alves
      </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <img src="https://trello-attachments.s3.amazonaws.com/5de0fb5e5137420a333d2827/5fb3fcbf32df464329f7193f/3bd6248ecd1c7499fd74b0dc42b2c5ee/Inova_capa.png" />
            <IonCardTitle>Inova SDPD</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          Programa em parceria com a Secretaria dos Direitos da Pessoa com Deficiência para trazer informações sobre inclusão e acessibilidade no município de Barueri 
      </IonCardContent>
        </IonCard>
      
      </IonContent>
      
    </IonPage>
  );
};

export default Tab1;
