import './AcronymManagementSystem.css';
import SearchAcronymsScreen from './SearchAcronymsScreen/SearchAcronymsScreen.js'
import InsertAcronymsScreen from './InsertAcronymsScreen/InsertAcronymsScreen.js'
import { useState } from 'react';

function AcronymManagementSystem() {
  // Store acronyms as application state.
  const [fakeDb, setFakeDb] = useState({AMS: 'Acronym Management System'});

  // Initialize app to search acronyms screen.
  const [screen, setScreen] = useState('searchAcronyms');

  function renderScreen() {
    switch (screen) {
      case 'searchAcronyms':
        return <SearchAcronymsScreen
          setScreen={setScreen}
          fakeDb={fakeDb}
        />
      case 'insertAcronyms':
        return <InsertAcronymsScreen
          setScreen={setScreen}
          setFakeDb={setFakeDb}  
        />
      default:
        return <div>Invalid screen</div>
    }
  }

  return (
    <div className='acronym-management-system'>
      {renderScreen()}
    </div>
  );
}

export default AcronymManagementSystem;
