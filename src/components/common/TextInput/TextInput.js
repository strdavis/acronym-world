import './TextInput.css';

// A text box accepting single-line input.
function TextInput({label, placeholder, value, onChange}) {
  return (
    <form>
      <div className='text_label'>
        <label>{label}</label>
      </div>
      <input
        className='text_input'
        type='text'
        name='labelname'
        autoComplete='new-random-value'
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)} 
      />
    </form>
  );
}

export default TextInput;