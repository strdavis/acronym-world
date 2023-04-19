import './WideContainer.css';

function WideContainer({children, style}) {
  return (
    <div className='wide-container' style={style}>{children}</div>
  );
}

export default WideContainer;