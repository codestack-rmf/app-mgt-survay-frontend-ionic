import React, { useState } from 'react';
import { IonPage, IonContent, IonCard, IonCardContent, IonInput, IonItem, IonLabel, IonButton, IonToggle, IonRange, IonRadio, IonRadioGroup, IonText, IonCardHeader, IonCardTitle, IonCardSubtitle, IonGrid, IonRow, IonCol } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './SurveyScreen.css';

import SvgIcon from '../components/SvgIcon';
import HeaderList from '../components/icons/HeaderList';
import BackgroundSvg from '../components/background/BackgroundSvg';


const questions = [
  { id: 'theList',
    title: 'List',
    question: 'Which of the following best describes the list of cards in your deck?',
    options: [
      'Random cards I’ve collected. I found this card on the bus!',
        'Some good cards, but missing obvious upgrades/purposely de-optimized.',
        'Optimized and synergistic, some strong cards, but theme and flavor over any meta.',
        'Strongest cards, no budget, no restrictions, flavor is derived from the tears of my opponents when I win.',
    ]
  },
  { id: 'manabase',
    title: 'Manabase',
    question: 'Which of the following best describes the list of cards in your deck?',
    options: [
      '28 lands is fine, right? I don’t know what color fixing is.',
        'Lands that enter tapped; there’s a chance I say “If I only had one more mana.”', 
        'Optimized manabase; tap lands better do something good, very fetchable.',
        'Perfect manabase., “I got these cards when they were sub $100 USD.',
    ]
  },
  { id: 'strategy',
    title: 'Strategy',
    question: 'How clear and reinforced is your deck’s strategy?',
    options: [
      'Chaos is the strategy, or my deck doesn’t have a defined plan.',
        'Strategy is unclear or not reinforced, it’s battlecruiser; I’m just trying to have fun, maybe my deck will do its thing.',
        'Clear strategy, there’s a good chance my deck is going to do its thing.',
        'Winning is the strategy; if my deck doesn’t win, it’s because I was unlucky, or the table heavily interacted with me.',
    ]
  },
  {
    id: 'winCondition',
    title: 'Winning',
    question:'What is your deck’s win condition like?',
    options: [
      'What’s a win condition?',
        'Singular win condition, or weak, or weak/easy to interact with and disrupt.',
        'Defensible strategy and win condition, but can be interacted with.',
        'Redundantt, defensible, tutor-able win conditions, hard to interact with, can combo and win on the spot.',
    ],
  },
  {
    id: 'speed',
    title: 'Speed',
    question:'How fast can your deck win a game?',
    options: [
      'Win? What’s that?',
        'Can’t even think about winning any sooner than turn 8-10.',
        'Can win turn 6+ if things are going well.',
        'Can win turn 6 or earlier.',
    ],
  },
  {
    id: 'consistency',
    title: 'Consistency',
    question: 'How often does your deck win or perform well?',
    options: [
      'Winning is an accident.',
        '25% of the time.',
        '25%-50% of games.',
        '50% + I’m threatening a win.',
    ],
  },
  {
    id: 'playerGoal',
    title: 'Goals',
    question: 'What do you want out of commander games with this deck?',
    options: [
      'I want to chill and have fun.',
        "I want my deck to do its thing, I want your deck to do its thing, I want everyone's deck to do its thing.",
        "I don’t care what your deck does, fun is when my deck does it’s thing.",
        'I just want a win.',
    ],
  },
  {
    id: 'commanderStaples',
    title: 'Staples',
    question:'How sweaty is your card selection?',
    options: [
      'I’ve made my deck bad... on purpose.',
        'My deck is mostly a pre-con, you tell me',
        'My deck runs some format staples, but favors synergy and style over a goodstuff pile.',
        'My deck runs several free spells.',
    ],
  },
  {
    id: 'winArchetype',
    title: 'Archetype',
    question: 'How does your deck win usually?',
    options: [
      'Everyone forgets I exist.',
        'Turn creatures sideways.',
        'I win through out-valuing the table, and acquiring more resources to eventually dig and find my win condition.',
        'I tutor for a combo to win or lock the table out.',
    ],
  },
  {
    id: 'buildPhilosophy',
    title: 'Philosophy',
    question:'What best describes your deck building goals?',
    options: [
      'Every card needs to share a theme, either art, typal, artist etc, regardless of power-level.',
        'My deck is held to tight, arbitrary restrictions based on a singular theme or guideline, but is supported by cards WOTC has printed.',
        'My deck has an arbitrary theme, but is balanced with off/theme cards to make it function effectively.',
        "My deck’s theme is, “best in slot”.",
    ],
  }
];

const SurveyScreen: React.FC = () => {
  const history = useHistory();
  const [step, setStep] = useState(0);

  // Step 1 - Player Information
  const [deckImport, setDeckImport] = useState(false);
  const [deckUrl, setDeckUrl] = useState('');
  //const [playerName, setPlayerName] = useState('');
  const [deckName, setDeckName] = useState('');
  const [selectedCommander, setSelectedCommander] = useState('');
  const [partnerCommander, setPartnerCommander] = useState('');
  const [usePartnerCommander, setUsePartnerCommander] = useState(false);
  const [playerExperience, setPlayerExperience] = useState(1);

  // Step 2 - Questionnaire Answers
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [errorMessage, setErrorMessage] = useState('');

  const getColorExperience = (experience: number) => {
    if (experience == 4) return 'linear-gradient(90deg, rgba(151, 225, 212, 0.72) 4.29%, rgba(249, 229, 232, 0.72) 33.21%, rgba(98, 132, 255, 0.72) 62.15%, rgba(255, 114, 182, 0.72) 97.45%)';
    if (experience == 3 ) return 'linear-gradient(90deg, rgba(151, 225, 212, 0.72) 4.29%, rgba(249, 229, 232, 0.72) 46.86%, rgba(98, 132, 255, 0.72) 89.44%, rgba(255, 114, 182, 0.72) 141.4%)';
    if (experience == 2 ) return 'linear-gradient(90deg, rgba(151, 225, 212, 0.72) 4.29%, rgba(249, 229, 232, 0.72) 69.27%, rgba(98, 132, 255, 0.72) 134.29%, rgba(255, 114, 182, 0.72) 213.61%)';
    if (experience == 1 ) return 'linear-gradient(90deg, rgba(151, 225, 212, 0.72) 4.3%, rgba(249, 229, 232, 0.72) 125.1%, rgba(98, 132, 255, 0.72) 245.96%, rgba(255, 114, 182, 0.72) 393.41%)';
    return 'none';
  };

  const validateFields = () => {
    if (step === 0) {
      if (!deckName.trim() || !selectedCommander.trim()) {
        setErrorMessage('Please fill in all required fields.');
        return false;
      }
      if (usePartnerCommander && !partnerCommander.trim()) {
        setErrorMessage('Please enter the Partner Commander or disable the toggle.');
        return false;
      }
    } else if (step <= questions.length) {
      if (!answers[questions[step - 1].id]) {
        setErrorMessage('Please select an answer before proceeding.');
        return false;
      }
    }
    setErrorMessage('');
    return true;
  };

  const handleNext = () => {
    if (!validateFields()) return;

    if (step === 0) {
      setStep(1);
    } else if (step < questions.length) {
      setStep(step + 1);
    } else {
      //history.push('/results', { answers, playerExperience });
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step === 1) {
      setStep(0); // Regresar al formulario inicial
    } else if (step > 1) {
      setStep(step - 1);
    }
  };

  /*const calculateOverallScore = (answers, playerExperience) => {
    const totalQuestions = Object.keys(answers).length;
    const totalScore = Object.values(answers).reduce((acc, score) => acc + score, playerExperience);

    const normalizedScore = (totalScore / (totalQuestions * 4)) * 4;

    return Math.min(4, normalizedScore).toFixed(2);  // Cap the score at 4
  };*/

  const calculateOverallScore = (answers: { [key: string]: number }, playerExperience: number) => {
    const totalQuestions = Object.keys(answers).length;
    const totalScore = Object.values(answers).reduce((acc, score) => acc + score, 0) + playerExperience;
  
    const normalizedScore = (totalScore / ((totalQuestions + 1) * 4)) * 4; // +1 porque agregamos el experience
  
    return normalizedScore.toFixed(2); // Retorna un número con dos decimales
  };

  const handleSubmit = async () => {
    if (!validateFields()) return;
  
    const surveyData = {
      name: deckName,
      overallScore: calculateOverallScore(answers, playerExperience),
      playerExperience,
      deck: {
        deckImport,
        deckUrl,
        deckName,
        commander: selectedCommander,
        partnerCommander: usePartnerCommander ? partnerCommander : ''
      },
      answers
    };
  
    try {
      const response = await fetch('http://localhost:3001/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(surveyData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Survey submitted successfully:', data);
        history.push('/results', { 
          answers,
          overallScore: surveyData.overallScore,
          playerExperience
        });
      } else {
        console.error('Error submitting survey:', response.statusText);
        alert('Error submitting survey. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please check your API and try again.');
    }
  };


  return (
    <IonPage>
      
      <IonContent className="survey-container">
        
            {step === 0 ? (
              <>
                <IonCard className="survey-card">
                  <BackgroundSvg/>
                
                  <IonCardContent>
                    <IonGrid fixed={true} className='full-height-grid'>
                      <IonRow>
                        <IonCol size='12'>
                        <IonCardHeader>
                          <IonCardTitle className='title-header'>Lets begin with some details.</IonCardTitle>
                        </IonCardHeader>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                      <IonCol size="5" className="col-left">
                        <IonLabel className='custom-label-toogle'>Import Decktlist</IonLabel>
                      </IonCol>
                        <IonCol size="7" className="col-left">
                          <IonToggle checked={deckImport} onIonChange={(e) => setDeckImport(e.detail.checked)} />
                        </IonCol>
                      </IonRow>
                      
                      {deckImport && (
                      <IonRow>
                        <IonCol size="12"  className="col-left">
                        <IonLabel className='custom-label' >Deck URL</IonLabel>
                        </IonCol>
                      </IonRow>
                      )
                      }

                      {deckImport && (
                      <IonRow>
                        <IonCol size="12"  className="col-left">
                          <IonInput
                            fill="outline" shape="round" 
                            className='input-bordered'
                            placeholder="https://url.com"
                            value={deckUrl} onIonChange={(e) => setDeckUrl(e.detail.value!)} />
                        </IonCol>
                      </IonRow>
                      )
                      }

                      <IonRow>
                        <IonCol size="12"  className="col-left">
                          <IonLabel className='custom-label' >Deck Name</IonLabel>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol size="12"  className="col-left">
                          <IonInput 
                            fill="outline" shape="round" 
                            className='input-bordered'
                            placeholder="Deckname"
                            value={deckName} onIonChange={(e) => setDeckName(e.detail.value!)} />
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol size="12"  className="col-left">
                          <IonLabel className='custom-label' >Commander</IonLabel>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol size="12"  className="col-left">
                        <IonInput 
                          fill="outline" shape="round" 
                          className='input-bordered'
                          placeholder="Select commander"
                          value={selectedCommander} onIonChange={(e) => setSelectedCommander(e.detail.value!)} />
                        </IonCol>
                      </IonRow>


                      <IonRow>
                        <IonCol size="12"  className="col-left">
                          <IonLabel className='custom-label-toogle'>Partner</IonLabel>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol size="12"  className="col-left">
                          <IonToggle checked={usePartnerCommander} onIonChange={(e) => setUsePartnerCommander(e.detail.checked)} />
                        </IonCol>
                      </IonRow>
                      
                      {usePartnerCommander && (
                      <IonRow>
                        <IonCol size="12"  className="col-left">
                          <IonLabel className='custom-label' >Partner Commander</IonLabel>
                        </IonCol>
                      </IonRow>
                      )}

                      {usePartnerCommander && (
                      <IonRow>
                        <IonCol size="12"  className="col-left">
                          <IonInput 
                            fill="outline" shape="round" 
                            className='input-bordered'
                            placeholder="Select Partner Commander"
                            value={partnerCommander} onIonChange={(e) => setPartnerCommander(e.detail.value!)} />
                        </IonCol>
                      </IonRow>
                      )}

                      <IonRow>
                        <IonCol size="12"  className="col-left">
                          <IonLabel className='custom-label'>Player Experience</IonLabel>
                        </IonCol>
                        <IonCol size="12"  className="col-left">
                          <IonText className='sub-label'>
                            How would you describe your experience level building decks and playing Commander?
                          </IonText>
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12"  className="col-left">
                          <IonRange 
                            className='custom-range'
                            ticks={true}
                            snaps={true}
                            min={0}
                            max={4}
                            step={1}
                            value={playerExperience}
                            onIonInput={(e) => setPlayerExperience(Number(e.detail.value))}
                            style={{
                              '--bar-background-active': getColorExperience(playerExperience),
                            }}
                            />
                        </IonCol>
                      </IonRow>

                      <IonRow className='expand-row'>
                        <IonCol size="12"  className="col-bottom-center">
                          <IonButton shape="round" className="btn-next" onClick={handleNext}>
                            Next
                          </IonButton>
                        </IonCol>
                      </IonRow>
                      
                    </IonGrid>

                    {errorMessage && <IonText color="danger">{errorMessage}</IonText>}

                    
                  </IonCardContent>
                  
                </IonCard>
              </>
            ) : step <= questions.length ? (
              <>
                <IonCard className="survey-card">
                <BackgroundSvg/>
                <IonCardHeader>
                  <IonCardSubtitle>Puntos</IonCardSubtitle>
                  <IonCardTitle>
                  <div style={{ padding: '2rem' }}>
                    <HeaderList/>
                  </div>
                      <h2>{questions[step - 1].title}</h2>
                    
                  </IonCardTitle>
                </IonCardHeader>

                  <IonCardContent>
                    {/* Step 2: Questionnaire */}
                    <h2 className="survey-question">{questions[step - 1].question}</h2>
                    <IonRadioGroup
                      value={answers[questions[step - 1].id] || ''}
                      onIonChange={(e) => setAnswers({ ...answers, [questions[step - 1].id]: Number(e.detail.value) })}
                    >
                      {questions[step - 1].options.map((option, index) => (
                        <IonItem key={index} className="rounded-input">
                          <IonLabel className='custom-label'>{option}</IonLabel>
                          <IonRadio slot="start" value={index + 1} />
                        </IonItem>
                      ))}
                    </IonRadioGroup>

                    {errorMessage && <IonText color="danger">{errorMessage}</IonText>}

                    <div className="survey-buttons">
                      <IonButton className="rounded-button" shape="round" onClick={handleBack}>
                        Back
                      </IonButton>
                      <IonButton className="rounded-button" shape="round" onClick={handleNext}>
                        {step < questions.length ? 'Next' : 'Submit'}
                      </IonButton>
                    </div>
                  </IonCardContent>
                </IonCard>
              </>
            ) : (
              <p>Processing results...</p>
            )}
      </IonContent>
    </IonPage>
  );
};

export default SurveyScreen;