import './AcronymTable.css';
import SecondaryButton from '../../../common/SecondaryButton/SecondaryButton.js';
import { VerticalContainer, WideContainer } from '../../../common/containers';

// A dynamic table component listing acronyms and their definitions.
// User can delete acronyms by clicking the "delete" button on the row.
function AcronymTable({tableData, deleter}) {
  function renderTable() {
    let kvps = Object.entries(tableData)
    if (kvps.length === 0) {
      return (<div><br/>Not Found</div>)
    } else {
      return (
        <table>
          <thead>
            <tr>
              <th scope='col'>Acronym</th>
              <th scope='col'>Definition</th>
              <th scope='col' className='delete-button-column'></th>
            </tr>
          </thead>
          <tbody>
            {kvps.map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
                <td>
                  <SecondaryButton text='Delete' onClick={() => deleter(key)}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
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