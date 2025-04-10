import React, { useState, useEffect } from 'react';
import { IonInput, IonList, IonItem, IonLabel } from '@ionic/react';
import './SearchInput.css';
import BackgroundSvg from './background/BackgroundSvg';

// Tipado de props
interface SearchInputProps {
  value: string;
  onSelect: (value: string) => void;
  placeHolder: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onSelect, placeHolder }) => {
  const [search, setSearch] = useState(value || '');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (search.trim().length > 2) {
      fetch(`https://api.scryfall.com/cards/autocomplete?q=${encodeURIComponent(search)}`)
        .then(res => res.json())
        .then(data => setSuggestions(data.data || []))
        .catch(err => console.error(err));
    } else {
      setSuggestions([]);
    }
  }, [search]);

  useEffect(() => {
    setSearch(value);
  }, [value]);

  const handleSelect = (name: string) => {
    setSearch(name);
    setShowSuggestions(false);
    onSelect(name);
  };

  return (
    <div style={{ position: 'relative' }}>
      
      <IonInput
        fill="outline"
        shape="round"
        className="input-bordered"
        placeholder={placeHolder}
        value={search}
        onIonInput={(e) => {
          const inputValue = e.detail.value as string;
          setSearch(inputValue);
          setShowSuggestions(true);
        }}
      />
      {showSuggestions && suggestions.length > 0 && (
        <IonList className='custom-list'>
          {suggestions.map((suggestion, index) => (
            <IonItem className='custom-item-list' button key={index} onClick={() => handleSelect(suggestion)}>
              <IonLabel className='custom-label-list'>{suggestion}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      )}
    </div>
  );
};

export default SearchInput;