import './AcronymTable.css';
import DatabaseContext from '../../../../contexts/DatabaseContext.js';
import SecondaryButton from '../../../common/SecondaryButton/SecondaryButton.js';
import { VerticalContainer, WideContainer } from '../../../common/containers';
import { useContext } from 'react';

// A dynamic table listing acronyms and their definitions.
// User can delete acronyms by clicking the "delete" button on the row.
function AcronymTable({tableData, setTableData}) {
  const {deleteRecord} = useContext(DatabaseContext);

  function handleDelete(acronym) {
    const remainingRecords = deleteRecord(acronym);
    setTableData(remainingRecords);
  };

  function renderTable() {
    let kvps = Object.entries(tableData)
    if (kvps.length === 0) {
      return (<div><br/>Not Found</div>)
    } else {
      return (
        <table>
          <thead>
            <tr>
              <th scope='col' className='acronym-column'>Acronym</th>
              <th scope='col' className='definition-column'>Definition</th>
              <th scope='col' className='delete-button-column'></th>
            </tr>
          </thead>
          <tbody>
            {kvps.map(([key, value]) => (
              <tr key={key}>
                <td className='acronym-column'>{key}</td>
                <td className='definition-column'>{value}</td>
                <td className='delete-button-column'>
                  <SecondaryButton text='Delete' onClick={() => handleDelete(key)}/>
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
      <VerticalContainer style={{maxWidth: '90%'}}>
        <h2 className='table-header'>Acronyms</h2>
        {renderTable()}
      </VerticalContainer>
    </WideContainer>
  )
}

export default AcronymTable;