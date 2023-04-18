import './TextArea.css';

// A text box accepting multi-line input.
function TextArea({label, placeholder, value, onChange}) {
  return (
    <form>
      <div className='text_label'>
        <label>{label}</label>
      </div>
      <textarea
        className='text_area'
        name='name'
        rows='8'
        cols='60'
        autoComplete='new-random-value'
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)} 
      />
    </form>
  );
}

export default TextArea;