import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { IonPage, IonContent, IonCard, IonCardContent, IonInput, IonItem, IonLabel, IonButton, IonToggle, IonRange, IonRadio, IonRadioGroup, IonText, IonCardHeader, IonCardTitle, IonCardSubtitle, IonGrid, IonRow, IonCol } from '@ionic/react';
import './SurveyScreen.css';

import HeaderList from '../components/icons/HeaderList';
import BackgroundSvg from '../components/background/BackgroundSvg';
import HeaderManabase from '../components/icons/HeaderManabase';
import HeaderStrategy from '../components/icons/HeaderStrategy';
import HeaderPhilosophy from '../components/icons/HeaderPhilosophy';
import HeaderArchetype from '../components/icons/HeaderArchetype';
import HeaderStaples from '../components/icons/HeaderStaples';
import HeaderGoals from '../components/icons/HeaderGoals';
import HeaderConsistency from '../components/icons/HeaderConsistency';
import HeaderSpeed from '../components/icons/HeaderSpeed';
import HeaderWinning from '../components/icons/HeaderWinning';
import NumberQuestion from '../components/NumberQuestion';
import SearchInput from '../components/SearchInput';


const questions = [
  { id: 'theList',
    title: 'List',
    icon: HeaderList,
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
    icon: HeaderManabase,
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
    icon: HeaderStrategy,
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
    icon: HeaderWinning,
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
    icon: HeaderSpeed,
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
    icon: HeaderConsistency,
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
    icon: HeaderGoals,
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
    icon: HeaderStaples,
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
    icon: HeaderArchetype,
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
    icon: HeaderPhilosophy,
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
  //const location = useLocation();

  



  
  const [step, setStep] = useState(0);

  const [deckImport, setDeckImport] = useState(false);
  const [deckUrl, setDeckUrl] = useState('');
  //const [playerName, setPlayerName] = useState('');
  const [deckName, setDeckName] = useState('');
  const [selectedCommander, setSelectedCommander] = useState('');
  const [partnerCommander, setPartnerCommander] = useState('');
  const [usePartnerCommander, setUsePartnerCommander] = useState(false);
  const [playerExperience, setPlayerExperience] = useState(1);
  const [validateDeck, setValidateDeck] = useState(undefined);

  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [errorMessage, setErrorMessage] = useState('');

  /*useEffect(() => {
    // Cuando el componente se monta y es navegación directa a /survey, reinicia el estado
    setStep(0);
    setDeckImport(false);
    setDeckUrl('');
    setDeckName('');
    setSelectedCommander('');
    setPartnerCommander('');
    setUsePartnerCommander(false);
    setPlayerExperience(1);
    setValidateDeck(undefined);
    setAnswers({});
    setErrorMessage('');
  }, [location.pathname]);*/
  


  const currentQuestion = questions[step ? step - 1 : 0];
  const IconComponent = currentQuestion.icon;

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

  const calculateOverallScore = (answers: { [key: string]: number }, playerExperience: number) => {
    const totalQuestions = Object.keys(answers).length;
    const totalScore = Object.values(answers).reduce((acc, score) => acc + score, 0) + playerExperience;
  
    const normalizedScore = (totalScore / ((totalQuestions + 1) * 4)) * 4;
  
    return normalizedScore.toFixed(2);
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
      const response = await fetch('https://deckritual.com/api/users', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(surveyData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Survey submitted successfully:', data);
        history.push('/results', { 
          answers,
          overallScore: surveyData.overallScore,
          playerExperience,
          validateDeck
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

  const handleBlur = async (url: string) => {

    setDeckUrl(url);

    if (!url) return;

    try {
      const response = await fetch(`https://deckritual.com/api/users/validate-deck?url=${encodeURIComponent(url)}`, {
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Survey get validate deck:', data);
        setValidateDeck(data);
        setDeckName(data.bracketName);
        setSelectedCommander(data.details.split("\n")[0].split(":")[1].trim());
        //setPartnerCommander(data.details.split("\n")[0].split(":")[1].trim());
      } else {
        console.error('Error submitting survey:', response.statusText);
        alert('Error submitting survey. Please try again.');
      }
    } catch (error) {
      console.error('Error al consultar la URL:', error);
      alert('Error al cargar el deck');
    }
  };


  return (
    <IonPage>
      
      <IonContent fullscreen scrollY={true} className="custom-container keyboard-fix">
        <BackgroundSvg/>
            {step === 0 ? (
              <>
                <IonCard className="survey-card">
                  
                    <IonGrid fixed={true} className='full-height-grid'>
                      <IonRow>
                        <IonCol size='12'>
                          <IonCardHeader>
                            <IonCardTitle className='header-title'>Lets begin with some details.</IonCardTitle>
                          </IonCardHeader>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                      <IonCol size="5" className="col-left">
                        <IonLabel className='custom-label'>Import Decktlist</IonLabel>
                      </IonCol>
                        <IonCol size="7" className="col-left">
                          <IonToggle 
                            className='custom-toggle'
                            aria-label="Primary toggle"
                            checked={deckImport}
                            onIonChange={(e) => setDeckImport(e.detail.checked)}
                          />
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
                            placeholder="https://example.com/deck/deckId"
                            value={deckUrl} onIonChange={(e) => handleBlur(e.detail.value!)} />
                        </IonCol>
                      </IonRow>
                      )
                      }

                      <IonRow>
                        <IonCol size="12"  className="col-left">
                          <IonLabel className='custom-label'>Deck Name</IonLabel>
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
                        <IonCol size="6"  className="col-left">
                          <IonLabel className='custom-label' >Commander</IonLabel>
                        </IonCol>
                        <IonCol size="3"  className="col-left">
                          <IonLabel className='custom-label'>Partner</IonLabel>
                        </IonCol>
                        <IonCol size="3"  className="col-left">
                          <IonToggle
                            className='custom-toggle'
                            checked={usePartnerCommander}
                            onIonChange={(e) => setUsePartnerCommander(e.detail.checked)
                              
                            } />
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol size="12"  className="col-left">
                        {/*<IonInput 
                          fill="outline" shape="round" 
                          className='input-bordered'
                          placeholder="Select commander"
                          value={selectedCommander} onIonChange={(e) => setSelectedCommander(e.detail.value!)} />*/}
                          <SearchInput value={selectedCommander} onSelect={setSelectedCommander} placeHolder='Search commander' />
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
                          {/*<IonInput 
                            fill="outline" shape="round" 
                            className='input-bordered'
                            placeholder="Select Partner Commander"
                            value={partnerCommander} onIonChange={(e) => setPartnerCommander(e.detail.value!)} />*/}
                            <SearchInput value={partnerCommander} onSelect={setPartnerCommander} placeHolder='Select Partner Commander' />
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

                      <IonRow className='expand-row' style={{paddingBottom: '10%'}}>
                        <IonCol size="12"  className="col-bottom-center" >
                          <IonButton shape="round" className="btn-next" onClick={handleNext}>
                            Next
                          </IonButton>
                        </IonCol>
                      </IonRow>
                      
                    </IonGrid>

                    {errorMessage && <IonText color="danger">{errorMessage}</IonText>}

                    
                  
                  
                </IonCard>
              </>
            ) : step <= questions.length ? (
              <>
                <IonCard className="survey-card">
                  <NumberQuestion numberText={step}/>
                    <IonGrid fixed={true} className='full-height-grid'>
                      <IonRow className='row-puntation'>
                        <IonCol size='7' style={
                          {display: 'flex',
                          paddingRight: '16px',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          alignSelf: 'stretch'}}>

                            {[...Array(10)].map((_, i) => (
                              <div
                                key={i}
                                style={{
                                  width: '9px',
                                  height: '9px',
                                  transform: 'rotate(45deg)',
                                  background: i < step ? '#8C99F8' : 'transparent', // solo el primero relleno
                                  border: '1px solid #8C99F8',
                                  margin: '0 4px',
                                }}
                              />
                            ))}

                        </IonCol>
                        <IonCol size='5' className='col-right'>
                          <div style={{
                            width: '47px',
                            height: '47px',
                            flexShrink: '0',
                            borderRadius: '50px',
                            borderStyle: 'solid',
                            borderWidth: '2px',
                            background: 'rgba(0, 0, 0)',
                            borderColor: '#FFFFFF'}}>
                          </div>
                        </IonCol>
                      </IonRow>
                      <IonRow className='row-title'>
                        <IonCol size='2'>
                          {IconComponent && <IconComponent/>}
                        </IonCol>
                        <IonCol className='header-title-question' size='10'>
                          <h1 className='custom-title-question'>{questions[step - 1].title}</h1>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <h2 className="survey-question">{questions[step - 1].question}</h2>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonRadioGroup
                            value={answers[questions[step - 1].id] || ''}
                            onIonChange={(e) => setAnswers({ ...answers, [questions[step - 1].id]: Number(e.detail.value) })}
                          >
                            {questions[step - 1].options.map((option, index) => (
                              <IonItem key={index} className="custom-item">
                                <IonLabel className='custom-text-item'>{option}</IonLabel>
                                <IonRadio className="custom-radio" slot="start" value={index + 1} />
                              </IonItem>
                            ))}
                          </IonRadioGroup>
                          {errorMessage && <IonText color="danger">{errorMessage}</IonText>}
                        </IonCol>
                      </IonRow>
                      <IonRow className='expand-row' style={{paddingBottom: '10%'}}>
                        <IonCol size="6"  className="col-bottom-center" style={{paddingRight: '10%',paddingLeft: '0%'}}>
                            <IonButton className="btn-back" shape="round" onClick={handleBack}>
                              Back
                            </IonButton>
                        </IonCol>
                        <IonCol size="6"  className="col-bottom-center" style={{paddingRight: '0%',paddingLeft: '10%'}}>
                            <IonButton className="btn-next" shape="round" onClick={handleNext}>
                              {step < questions.length ? 'Next' : 'Submit'}
                            </IonButton>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                    
                  
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