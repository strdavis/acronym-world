import './InsertAcronymsScreen.css';
import DatabaseContext from '../../../contexts/DatabaseContext.js';
import TextInput from '../../common/TextInput/TextInput.js'
import TextArea from '../../common/TextArea/TextArea.js'
import PrimaryButton from '../../common/PrimaryButton/PrimaryButton.js';
import SecondaryButton from '../../common/SecondaryButton/SecondaryButton.js';
import { VerticalContainer, HorizontalContainer, GreyContainer } from '../../common/containers';
import { useState, useContext } from 'react';

// Acronym insertion screen.
// User can insert new acronyms/definitions.
// User can navigate to landing screen.
function InsertAcronymsScreen({goToSearchAcronyms}) {
  const {upsertRecord} = useContext(DatabaseContext);
  const [acronym, setAcronym] = useState('');
  const [definition, setDefinition] = useState('');

  function handleUpsert() {
    if (acronym !== '' && definition !== '') {
      upsertRecord(acronym.trim(), definition.trim());
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
          <PrimaryButton text='New Acronym' onClick={handleUpsert}/>
          <SecondaryButton text='Cancel' onClick={goToSearchAcronyms}/>
        </HorizontalContainer>
      </VerticalContainer>
    </GreyContainer>
  )
}
  
export default InsertAcronymsScreen;