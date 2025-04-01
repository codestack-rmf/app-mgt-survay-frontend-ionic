import React, { useState } from 'react';
import { IonRange, IonIcon, IonText } from '@ionic/react';
import { chevronForwardCircleOutline, chevronForwardOutline, arrowForward } from 'ionicons/icons';
import './SliderButton.css'; // Archivo de estilos separado
import Deck from './icons/Deck';

interface SliderButtonProps {
  onUnlock: () => void;
  text?: string;
  icon?: string;
}

const SliderButton: React.FC<SliderButtonProps> = ({ onUnlock, text = "Summon your score", icon = chevronForwardCircleOutline }) => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event: CustomEvent) => {
    let value = event.detail.value;
    if (value < 0) value = 0;
    if (value > 51) value = 51; // Limita el slider al 51%
    setSliderValue(value);
  };

  const handleSliderEnd = () => {
    if (sliderValue >= 25) {
      onUnlock();
    } else {
      setSliderValue(0);
    }
  };

  return (
    <div className="slider-container">
      <IonRange
        min={0}
        max={25}
        step={1}
        value={sliderValue}
        onIonInput={handleSliderChange}
        onIonKnobMoveEnd={handleSliderEnd}
        className="start-slider"
      />
      <div className="slider-overlay" style={{ left: `${sliderValue}%` }}>
        <IonText className="slider-text">{text}</IonText>
        <Deck/>
      </div>
      

        
        <IonIcon icon={chevronForwardOutline} className="slider-arrow right" />
      
    </div>
  );
};

export default SliderButton;