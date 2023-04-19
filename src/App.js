import './App.css';
import './bcFonts.css';
import './bcGlobalStyles.css';
import Page from './components/common/Page/Page';
import Header from './components/common/Header/Header.js'
import Footer from './components/common/Footer/Footer.js'
import AcronymManagementSystem from './components/AcronymManagementSystem/AcronymManagementSystem.js'

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
