import './Page.css';

function Page({header, content, footer}) {
  return (
    <div className='page'>
      {header}
      {content}
      {footer}
    </div>
  );
}
  
export default Page;