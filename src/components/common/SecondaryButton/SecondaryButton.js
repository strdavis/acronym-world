import './SecondaryButton.css';

function SecondaryButton({text, onClick}) {
  return (
    <button className='BC-Gov-SecondaryButton' type='button' name='button' onClick={onClick}>{text}</button>
  );
}

export default SecondaryButton;