import './AcronymManagementSystem.css';
import SearchAcronymsScreen from './SearchAcronymsScreen/SearchAcronymsScreen.js'
import InsertAcronymsScreen from './InsertAcronymsScreen/InsertAcronymsScreen.js'
import { DatabaseProvider } from '../../contexts/DatabaseContext.js';
import { useState } from 'react';

function AcronymManagementSystem() {
  // App starts on acronym search screen.
  const [screen, setScreen] = useState('searchAcronyms');

  function renderScreen() {
    switch (screen) {
      case 'searchAcronyms':
        return <SearchAcronymsScreen goToInsertAcronyms={() => setScreen('insertAcronyms')}/>
      case 'insertAcronyms':
        return <InsertAcronymsScreen goToSearchAcronyms={() => setScreen('searchAcronyms')}/>
      default:
        return <div>Invalid screen</div>
    }
  }

  return (
    <DatabaseProvider>
      <div className='acronym-management-system'>
        {renderScreen()}
      </div>
    </DatabaseProvider>
  );
}

export default AcronymManagementSystem;
