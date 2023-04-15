import './App.css';
import { useEffect, useState } from 'react';

// A text box accepting input.
function TextInput({placeholder, value, onChange}) {
  return (
    <input
      type='text'
      autoComplete='new-random-value'
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)} 
    />
  );
}

// A dynamic component listing key-value pairs.
function KeyValueList({textWhenEmpty, keyValuePairs}) {
  let kvps = Object.entries(keyValuePairs)
  if (kvps.length === 0) {
    return (<div>{textWhenEmpty}</div>)
  } else {
    return (
      <div>
        {kvps.map(([key, value]) => (
          <div key={key}>
            {key}&emsp;{value}
          </div>
        ))}
      </div>
    )
  }
}

// Landing screen.
// User can search for acronyms.
// User can navigate to the acronym search screen.
function SearchAcronyms({setScreen, searchRecords}) {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState({});

  function goToInsertAcronyms() {
    setScreen('insertAcronyms') 
  }

  function resetInput() {
    setQuery('')
  }

  function handleSearch() {
    setResponse(searchRecords(query))
    resetInput()
  }

  // Perform a fresh search whenever user returns to this screen.
  useEffect(() => {
    handleSearch()
  }, []);

  return (
    <div className='vertical-container'>
      <h1>Welcome!</h1>
      <TextInput
        placeholder='Enter acronyms. . .'
        value={query}
        onChange={(value) => setQuery(value)} 
      />
      <div className='horizontal-container'>
        <button onClick={handleSearch}>Search</button>
        <button onClick={goToInsertAcronyms}>New Acronym</button>
      </div>
      <h4>Acronyms:</h4>
      <KeyValueList
        textWhenEmpty='Not Found'
        keyValuePairs={response}
      />
    </div>
  )
}

// Acronym insertion screen.
// User can insert new acronyms.
// User can navigate to landing screen.
function InsertAcronyms({setScreen, insertRecord}) {
  const [acronym, setAcronym] = useState('');
  const [definition, setDefinition] = useState('');

  function goToSearchAcronyms() {
    setScreen('searchAcronyms')
  
  }

  function handleInsert() {
    if (acronym != '' && definition != '') {
      insertRecord(acronym, definition);
    }
    goToSearchAcronyms();
  }

  return (
    <div className='vertical-container'>
      <h1>New Acronym</h1>
      <TextInput
        placeholder='Enter acronym. . .'
        onChange={(value) => setAcronym(value)} 
      />
      <TextInput
        placeholder='Enter definition. . .'
        onChange={(value) => setDefinition(value)} 
      />
      <div className='horizontal-container'>
        <button onClick={handleInsert}>New Acronym</button>
        <button onClick={goToSearchAcronyms}>Cancel</button>
      </div>
    </div>
  )
}

function App() {
  const [screen, setScreen] = useState('searchAcronyms');
  const [records, setRecords] = useState({});

  function searchRecords(acronym) {
    if (acronym === '') {
      return records
    } else if (records.hasOwnProperty(acronym)) {
      return { [acronym]: records[acronym]}
    } else {
      return {}
    }
  }

  function insertRecord(acronym, definition) {
    setRecords((prevState) => {
      return {...prevState, [acronym]: definition}
    });
  }

  function renderScreen() {
    switch (screen) {
      case 'searchAcronyms':
        return <SearchAcronyms
          setScreen={setScreen}
          searchRecords={searchRecords}
        />
      case 'insertAcronyms':
        return <InsertAcronyms
          setScreen={setScreen}
          insertRecord={insertRecord}  
        />
      default:
        return <div>Invalid screen</div>
    }
  }

  return (
    <div className='App'>
      {renderScreen()}
    </div>
  );
}

export default App;
