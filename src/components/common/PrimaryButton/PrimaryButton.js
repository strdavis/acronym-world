import './PrimaryButton.css';

function PrimaryButton({text, onClick}) {
  return (
    <button className='BC-Gov-PrimaryButton' type='button' name='button' onClick={onClick}>{text}</button>
  );
}

export default PrimaryButton;