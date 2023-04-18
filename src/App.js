import './App.css';
import { useEffect, useState } from 'react';

// A text box accepting single-line input.
function TextInput({label, placeholder, value, onChange}) {
  return (
    <form>
      <div className='text_label'>
        <label>{label}</label>
      </div>
      <input
        className='text_input'
        type='text'
        name='labelname'
        autoComplete='new-random-value'
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)} 
      />
    </form>
  );
}

// A text box accepting multi-line input.
function TextArea({label, placeholder, value, onChange}) {
  return (
    <form>
      <div className='text_label'>
        <label>{label}</label>
      </div>
      <textarea
        className='text_area'
        name='name'
        rows='8'
        cols='60'
        autoComplete='new-random-value'
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)} 
      />
    </form>
  );
}

// A dynamic table component listing acronyms and their definitions.
function AcronymTable({keyValuePairs}) {
  let kvps = Object.entries(keyValuePairs)
  if (kvps.length === 0) {
    return (<div><br/>Not Found</div>)
  } else {
    return (
      <div className='wide-container' style={{margin: '20px 0px 20px 0px'}}>
        <div className='vertical-container'>
          <h2 style={{fontWeight: 'normal', textAlign: 'left', width: '100%', marginBottom: '30px', borderBottom: '1px solid #ccc'}}>Acronyms</h2>
          <table>
            <thead>
              <tr>
                <th scope='col'>Acronym</th>
                <th scope='col'>Definition</th>
              </tr>
            </thead>
            <tbody>
              {kvps.map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

  function handleSearch () {
    setResponse(searchRecords(query))
    resetInput()
  };

  // Perform a fresh search whenever user returns to this screen.
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className='vertical-container'>
      <div className='grey-container'>
        <div className='vertical-container'>
          <br/><h1>Welcome!</h1><br/>
          <TextInput
            placeholder='Enter acronyms. . .'
            value={query}
            onChange={(value) => setQuery(value)} 
          />
          <div className='horizontal-container'>
            <button className='BC-Gov-PrimaryButton' type='button' name='button' onClick={handleSearch}>Search</button>
            <button className='BC-Gov-SecondaryButton' type='button' name='button' onClick={goToInsertAcronyms}>New Acronym</button>
          </div>
        </div>
      </div>
      <AcronymTable
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
    if (acronym !== '' && definition !== '') {
      insertRecord(acronym, definition);
    }
    goToSearchAcronyms();
  }

  return (
    <div className='grey-container'>
      <div className='vertical-container'>
      <br/><h1>New Acronym</h1><br/>
        <TextInput
          placeholder='Enter acronym. . .'
          onChange={(value) => setAcronym(value)} 
        />
        <TextArea
          placeholder='Enter definition. . .'
          onChange={(value) => setDefinition(value)} 
        />
        <div className='horizontal-container'>
          <button className='BC-Gov-PrimaryButton' type='button' name='button' onClick={handleInsert}>New Acronym</button>
          <button className='BC-Gov-SecondaryButton' type='button' name='button' onClick={goToSearchAcronyms}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [screen, setScreen] = useState('searchAcronyms');
  const [records, setRecords] = useState({AMS: 'Acronym Management System'});

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
    <div className='page'>
      <header>
        <div className='banner'>
          <img className='logo' src={`${process.env.PUBLIC_URL}/images/aw-icon.png`} alt='AW' />
          <div className='sitename'>
            <h3>Acronym</h3>
            <h3>World</h3>
          </div>
          <div className='other'>
            <h2>Acronym Management System</h2>
          </div>
        </div>
      </header>
      <div className='content'>
        <div className='App'>
          {renderScreen()}
        </div>
      </div>
      <footer className='footer'>
        <div className='container'></div>
      </footer>
    </div>
  );
}

export default App;
