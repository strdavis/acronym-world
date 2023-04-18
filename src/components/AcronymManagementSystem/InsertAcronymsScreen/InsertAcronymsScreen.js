import './InsertAcronymsScreen.css';
import TextInput from '../../common/TextInput/TextInput.js'
import TextArea from '../../common/TextArea/TextArea.js'
import PrimaryButton from '../../common/PrimaryButton/PrimaryButton.js';
import SecondaryButton from '../../common/SecondaryButton/SecondaryButton.js';
import { VerticalContainer, HorizontalContainer, GreyContainer } from '../../common/containers';
import { useState } from 'react';

// Acronym insertion screen.
// User can insert new acronyms.
// User can navigate to landing screen.
function InsertAcronymsScreen({setScreen, setFakeDb}) {
  const [acronym, setAcronym] = useState('');
  const [definition, setDefinition] = useState('');

  function goToSearchAcronyms() {
    setScreen('searchAcronyms')
  
  }

  function insertRecord(acronym, definition) {
    setFakeDb((prevState) => {
      return {...prevState, [acronym]: definition}
    });
  }

  function handleInsert() {
    if (acronym !== '' && definition !== '') {
      insertRecord(acronym, definition);
    }
    goToSearchAcronyms();
  }

  return (
    <GreyContainer>
      <VerticalContainer>
      <br/><h1>New Acronym</h1><br/>
        <TextInput placeholder='Enter acronym. . .' onChange={(value) => setAcronym(value)}/>
        <TextArea placeholder='Enter definition. . .' onChange={(value) => setDefinition(value)}/>
        <HorizontalContainer>
          <PrimaryButton text='New Acronym' onClick={handleInsert}/>
          <SecondaryButton text='Cancel' onClick={goToSearchAcronyms}/>
        </HorizontalContainer>
      </VerticalContainer>
    </GreyContainer>
  )
}
  
export default InsertAcronymsScreen;