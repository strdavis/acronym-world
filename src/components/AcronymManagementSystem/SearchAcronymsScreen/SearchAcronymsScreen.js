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
function SearchAcronymsScreen({setScreen, fakeDb, setFakeDb}) {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState({});

  function goToInsertAcronyms() {
    setScreen('insertAcronyms') 
  }

  function resetInput() {
    setQuery('')
  }

  function searchRecords(acronym, db) {
    if (acronym === '') {
      return db
    } else if (db.hasOwnProperty(acronym)) {
      return { [acronym]: db[acronym]}
    } else {
      return {}
    }
  }

  function handleSearch () {
    setResponse(searchRecords(query, fakeDb))
    resetInput()
  };

  function deleteRecord(acronym) {
    const updated = Object.fromEntries(
      Object.entries(fakeDb).filter(([key]) => key != acronym)
    );
    setFakeDb(updated);
    return updated;
  };

  function handleDelete(acronym) {
    const updated = deleteRecord(acronym);
    setResponse(searchRecords(query, updated));
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
      <AcronymTable textWhenEmpty='Not Found' tableData={response} deleter={handleDelete}/>
    </VerticalContainer>
  )
}
  
export default SearchAcronymsScreen;