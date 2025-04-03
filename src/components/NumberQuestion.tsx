import { IonText } from "@ionic/react";
import background from '../assets/images/black-carts.png';
import React from "react";
import './NumberQuestion.css';

interface TextDetailsProps {
  numberText: any;
}

const NumberQuestion: React.FC<TextDetailsProps> = ({ numberText }) => {
  return (
    <div className="number-question">
      <IonText
      style={{
        width: '100%',
        height: '100%'
      }}
      >{numberText}</IonText>
      
    </div>
  );
};

export default NumberQuestion;
