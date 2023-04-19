import './SearchAcronymsScreen.css';
import DatabaseContext from '../../../contexts/DatabaseContext.js';
import TextInput from '../../common/TextInput/TextInput.js'
import PrimaryButton from '../../common/PrimaryButton/PrimaryButton.js';
import SecondaryButton from '../../common/SecondaryButton/SecondaryButton.js';
import AcronymTable from './AcronymTable/AcronymTable.js'
import { VerticalContainer, HorizontalContainer, GreyContainer } from '../../common/containers';
import { useState, useContext, useEffect } from 'react';

// Landing screen.
// User can search for acronyms.
// User can delete acronyms.
// User can navigate to the acronym search screen.
function SearchAcronymsScreen({goToInsertAcronyms}) {
  const {searchRecord} = useContext(DatabaseContext);
  const [query, setQuery] = useState('');
  const [tableData, setTableData] = useState({});

  function handleSearch () {
    const searchResult = searchRecord(query.trim());
    setTableData(searchResult);
    setQuery('');
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
          <TextInput placeholder='Enter acronym. . .' value={query} onChange={(value) => setQuery(value)}/>
          <HorizontalContainer>
            <PrimaryButton text='Search' onClick={handleSearch}/>
            <SecondaryButton text='New Acronym' onClick={goToInsertAcronyms}/>
          </HorizontalContainer>
        </VerticalContainer>
      </GreyContainer>
      <AcronymTable textWhenEmpty='Not Found' tableData={tableData} setTableData={setTableData}/>
    </VerticalContainer>
  )
}
  
export default SearchAcronymsScreen;