import './KeyValuePairTable.css';

function KeyValuePairTable({col1Name, col2Name, data}) {
  return (
    <table>
      <thead>
        <tr>
          <th scope='col'>{col1Name}</th>
          <th scope='col'>{col2Name}</th>
        </tr>
      </thead>
      <tbody>
        {data.map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default KeyValuePairTable;