import './AcronymTable.css';
import KeyValuePairTable from '../../../common/KeyValuePairTable/KeyValuePairTable.js'
import { VerticalContainer, WideContainer } from '../../../common/containers';

// A dynamic table component listing acronyms and their definitions.
function AcronymTable({keyValuePairs}) {
  function renderTable()
  {
    let kvps = Object.entries(keyValuePairs)
    if (kvps.length === 0) {
      return (<div><br/>Not Found</div>)
    } else {
      return <KeyValuePairTable col1Name='Acronym' col2Name='Definition' data={kvps}/>
    }
  };

  return (
    <WideContainer style={{margin: '20px 0px 20px 0px'}}>
      <VerticalContainer>
        <h2 style={{fontWeight: 'normal', textAlign: 'left', width: '100%', marginBottom: '30px', borderBottom: '1px solid #ccc'}}>Acronyms</h2>
        {renderTable()}
      </VerticalContainer>
    </WideContainer>
  )
}

export default AcronymTable;