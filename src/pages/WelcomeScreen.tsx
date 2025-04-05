import React, { useState } from 'react';
import { IonPage, IonContent, IonText, IonCard, IonCardContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import { useIonRouter } from '@ionic/react';
import SliderButton from '../components/SliderButton'; // Importamos el componente reutilizable
import './WelcomeScreen.css'; // Archivo de estilos separado
import BackgroundWelcome from '../components/background/BackgroundWelcome';
import RitualSVG from '../components/icons/RitualSVG';
import RitualTitleSVG from '../components/icons/RitualTitleSVG';
import RitualTitle2SVG from '../components/icons/RitualTitleSVG2';

const WelcomeScreen: React.FC = () => {
  const router = useIonRouter();

  return (
    <IonPage>
      <IonContent className="custom-container">
        <IonCard className="survey-card">
          <BackgroundWelcome/>
          <IonGrid fixed={true} className='full-height-grid'>
            <IonRow class='grid-row-1'>
              <IonCol size="12" class='col-bottom'>
                <RitualSVG/>
              </IonCol>
            </IonRow>
            <IonRow class='grid-row-2'>
              <IonCol size='12' class='col-top'>
                <RitualTitleSVG/>
              </IonCol>
            </IonRow>
            <IonRow className="grid-row-3">
              <IonCol size='12' class='col-center'>
                <IonText className="description">
                  Unveil your Commander deck’s true essence, revealing its hidden potential.
                </IonText>
              </IonCol>
            </IonRow>
            <IonRow className="grid-row-4">
              <IonCol size='12' class='col-center'>
                <div className="custom-indicators">
                  <SliderButton onUnlock={() => router.push('/survey')} />
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>

    </IonPage>
  );
};

export default WelcomeScreen;