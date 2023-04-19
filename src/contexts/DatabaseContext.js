import { createContext, useState } from 'react';

const DatabaseContext = createContext();

export function DatabaseProvider({children}) {
  // Store acronyms as application state.
  // By default, include acronym: "AMS".
  // TODO: make API calls here.
  const [database, setDatabase] = useState({AMS: 'Acronym Management System'});

  function upsertRecord(acronym, definition) {
    setDatabase((prevState) => {
      return {...prevState, [acronym]: definition}
    });
  };

  function deleteRecord(acronym) {
    const remainingRecords = Object.fromEntries(
      Object.entries(database).filter(([key]) => key !== acronym)
    );
    setDatabase(remainingRecords);
    return remainingRecords;
  };

  function searchRecord(acronym) {
    if (acronym === '') {
      return database
    } else if (database.hasOwnProperty(acronym)) {
      return { [acronym]: database[acronym]}
    } else {
      return {}
    }
  };

  const contextValue = {
    upsertRecord,
    deleteRecord,
    searchRecord,
  }

  return (
    <DatabaseContext.Provider value={contextValue}>
      {children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseContext;