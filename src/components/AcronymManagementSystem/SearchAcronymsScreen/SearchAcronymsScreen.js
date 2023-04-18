import './SearchAcronymsScreen.css';
import TextInput from '../../common/TextInput/TextInput.js'
import PrimaryButton from '../../common/PrimaryButton/PrimaryButton.js';
import SecondaryButton from '../../common/SecondaryButton/SecondaryButton.js';
import AcronymTable from './AcronymTable/AcronymTable.js'
import { VerticalContainer, HorizontalContainer, GreyContainer } from '../../common/containers';
import { useEffect, useState } from 'react';

// Landing screen.
// User can search for acronyms.
// User can navigate to the acronym search screen.
function SearchAcronymsScreen({setScreen, fakeDb}) {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState({});

  function goToInsertAcronyms() {
    setScreen('insertAcronyms') 
  }

  function resetInput() {
    setQuery('')
  }

  function searchRecords(acronym) {
    if (acronym === '') {
      return fakeDb
    } else if (fakeDb.hasOwnProperty(acronym)) {
      return { [acronym]: fakeDb[acronym]}
    } else {
      return {}
    }
  }

  function handleSearch () {
    setResponse(searchRecords(query))
    resetInput()
  };

  // Perform a fresh search whenever user returns to this screen.
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <VerticalContainer>
      <GreyContainer>
        <VerticalContainer>
          <br/><h1>Welcome!</h1><br/>
          <TextInput placeholder='Enter acronyms. . .' value={query} onChange={(value) => setQuery(value)}/>
          <HorizontalContainer>
            <PrimaryButton text='Search' onClick={handleSearch}/>
            <SecondaryButton text='New Acronym' onClick={goToInsertAcronyms}/>
          </HorizontalContainer>
        </VerticalContainer>
      </GreyContainer>
      <AcronymTable textWhenEmpty='Not Found' keyValuePairs={response}/>
    </VerticalContainer>
  )
}
  
export default SearchAcronymsScreen;