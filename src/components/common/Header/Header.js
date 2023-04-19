import './Header.css';

function Header() {
  return (
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
  );
}
  
export default Header;