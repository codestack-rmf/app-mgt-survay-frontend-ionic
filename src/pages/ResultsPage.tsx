import {
  IonContent,
  IonPage,
  IonText,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  useIonRouter
} from "@ionic/react";
import React, { useState } from "react";
import "./results.css";
import { useLocation } from "react-router";
import BackgroundSvg from "../components/background/BackgroundSvg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import RadarChart from "../components/RadarChart";
import SliderButton from "../components/SliderButton";

interface ResultState {
  answers: Record<string, number>;
  overallScore: string;
  playerExperience: number;
  validateDeck: any
}


const ResultsPage: React.FC<any> = () => {
  const router = useIonRouter();
  const location = useLocation();
  const { answers, overallScore, playerExperience, validateDeck } = location.state as ResultState;

  const sanitizedAnswers = {
    theList: answers.theList || 0,
    manabase: answers.manabase || 0,
    strategy: answers.strategy || 0,
    winCondition: answers.winCondition || 0,
    speed: answers.speed || 0,
    consistency: answers.consistency || 0,
    playerExperience: playerExperience || 0,
    commanderStaples: answers.commanderStaples || 0,
    buildPhilosophy: answers.buildPhilosophy || 0,
  };

  const getDeckPowerLevel = (score: number) => {
    if (score >= 3.75) return "Competitive / cEDH";
    if (score >= 3.25) return "High-Power Casual";
    if (score >= 2.5) return "Mid-Power Casual";
    if (score >= 1.5) return "Low-Power Casual";
    return "Jank!";
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [promedialLevel, setPromedialLevel] = useState(validateDeck ? parseFloat(((parseFloat(overallScore)+validateDeck.bracketLevel)/2).toFixed(2)) : parseFloat(overallScore));
  const deckPowerLevel = getDeckPowerLevel(promedialLevel);

  return (
    <IonPage>
      <IonContent className="custom-container">
        <IonCard className="survey-card">
          <BackgroundSvg/>
          <IonGrid fixed={true} className='full-height-grid'>
            <IonRow>
              <IonCol size='12'>
                <IonCardHeader>
                  <IonCardTitle className='title-header-result'>Your Deck Power Level</IonCardTitle>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <IonRow className='expand-row'>
              <IonCol size="12">
                <IonCard className="card-result">
                  <IonCardHeader>
                    <IonCardTitle>
                      <IonText className="title-header-result">
                        Your Deck Power Level
                      </IonText>
                    </IonCardTitle>
                    <IonCardSubtitle className="subtitle-header-result">
                      <IonText className="subtitle-header-result">
                        {promedialLevel}
                      </IonText>
                    </IonCardSubtitle>
                    <IonCardSubtitle className="subtitle-header-result-2">
                      <IonText className="subtitle-header-result-2">
                        {deckPowerLevel}
                      </IonText>
                    </IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                   
                    <Swiper 
                      slidesPerView={1}
                      spaceBetween={20}
                      onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
                      pagination={{ clickable: true }}>
                      
                      <SwiperSlide>
                        <IonText className="text-result">
                            <p style={{textAlign: 'justify'}}>
                            Your deck’s got just enough gas to keep things fun without turning heads. Solid manabase, decent consistency, and a strategy that says “I could win... eventually.” You won’t combo off too early, but you’ll have plenty of moments to shine. It’s casual, not cutthroat
                            </p>
                            <br></br>
                            <p style={{textAlign: 'justify'}}>
                            —just how you like it!
                            </p>
                          </IonText>
                      </SwiperSlide>

                      <SwiperSlide>
                        <RadarChart answers={sanitizedAnswers} />
                      </SwiperSlide>

                      <SwiperSlide>
                        <IonText className="text-result">
                          <p style={{textAlign: 'justify'}}>
                            {validateDeck? validateDeck.details : "NO DECK"}
                          </p>
                        </IonText>
                      </SwiperSlide>
                      
                      
                    </Swiper>
                    <div className="custom-indicators">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          style={{
                            width: '9px',
                            height: '9px',
                            transform: 'rotate(45deg)',
                            background: i === currentSlide ? '#8C99F8' : 'transparent', // solo el primero relleno
                            border: '1px solid #8C99F8',
                            margin: '0 4px',
                          }}
                        />
                      ))}
                    </div>

                    <div className="custom-indicators">
                      <SliderButton text="Test another deck" onUnlock={() => router.push('/survey')} />
                    </div>
                        
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ResultsPage;
