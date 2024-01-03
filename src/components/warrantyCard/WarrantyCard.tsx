import "../warrantyCard/WarrantyCard.css"
import { GrCertificate } from "react-icons/gr";
import Watch from "../../assets/clock-pic.png"
import Logo from "../../assets/clock-logo.webp"


const WarrantyCard = () => {
  return (
    <>
      <div className="card">
        <div className="text-area">
            <div className="wrapper"><div className="logo-warranty"><GrCertificate/></div><div className="title-warranty">Warranty Card</div></div>
            <div className="description">
                <div className="logo-name">
                    <div><img src={Logo} alt="" height={130} width={130}/></div>
                    <div className="name-slogan">
                        <div className="name">Watches <span style={{color:"#FFBD33"}}>Nepal</span></div>
                        <div>Leading watch shop in Nepal</div>
                    </div>
                </div>
                <div>
                    <div className="location">Baneshwor, Kathmandu<br/>+977 9849937143</div>
                </div>
            </div>
        </div>
        <div className="picture-area">
            <img src={Watch} alt="" height="100%"/>
        </div>
      </div>
    </>
  )
}

export default WarrantyCard


