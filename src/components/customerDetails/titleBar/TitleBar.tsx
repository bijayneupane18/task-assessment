import QRimage from '../../../assets/sampleQR.webp'
import './TitleBar.css'

const TitleBar = () => {
  return (
    <>
      <div className='titlebar'>
        <div className='title'>Customer Details:</div>
        <div className='qrcode'><img src={QRimage} alt='' height={120} width={120}/></div>
      </div>
    </>
  );
};

export default TitleBar;
