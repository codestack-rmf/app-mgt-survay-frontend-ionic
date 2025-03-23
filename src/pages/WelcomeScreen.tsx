import React, { useState } from 'react';
import { IonPage, IonContent, IonText, IonCard, IonCardContent } from '@ionic/react';
import { useIonRouter } from '@ionic/react';
import SliderButton from '../components/SliderButton'; // Importamos el componente reutilizable
import './WelcomeScreen.css'; // Archivo de estilos separado

const WelcomeScreen: React.FC = () => {
  const router = useIonRouter();

  return (
    <IonPage>
      <IonContent className="welcome-container" fullscreen>
        <IonCard className="welcome-card">
          <IonCardContent>
            <IonText className="title">Deck Ritual</IonText>
            <IonText className="description">
              <b>An EDH Deck Building test to lead Rule-0 conversations.</b>
            </IonText>
            <IonText className="description">
              Slide to start the process
            </IonText>
            {/* Implementamos el componente reutilizable */}
            <SliderButton onUnlock={() => router.push('/survey')} />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default WelcomeScreen;