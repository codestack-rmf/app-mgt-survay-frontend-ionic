import { IonText } from "@ionic/react";
import React from "react";

interface TextDetailsProps {
  text: any;
}

const TextDetails: React.FC<TextDetailsProps> = ({ text }) => {
  return (
    <div style={{ padding: "1rem" }}>
      <h3>Deck Breakdown</h3>
      <IonText>{text}</IonText>
    </div>
  );
};

export default TextDetails;
