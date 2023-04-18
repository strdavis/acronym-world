import './App.css';
import AcronymManagementSystem from './components/AcronymManagementSystem/AcronymManagementSystem.js'
import Header from './components/common/Header/Header.js'
import Footer from './components/common/Footer/Footer.js'
import Page from './components/common/Page/Page';

function App() {
  return (
    <Page
      header={<Header/>}
      content={<AcronymManagementSystem/>}
      footer={<Footer/>}
    />
  );
}

export default App;
