import "../socialMediaHandle/SocialMediaHandle.css"
import { SiWebmoney } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGift } from "react-icons/fa";


const SocialMediaHandle = () => {
  return (
    <>
    <div className="social-media-handle">
      <div className="find-us">Find us at:</div>
      <div className="handles">
      <div className="both-handles">
        <div className="icon-text-wrapper"><div className="handles-icon"><SiWebmoney/></div><div className="handles-text">watchesnepal.com</div></div>
        <div className="icon-text-wrapper"><div className="handles-icon"><FaFacebookF/></div><div className="handles-text">facebook.com/thewatchesnepal</div></div>
        <div className="icon-text-wrapper"><div className="handles-icon"><FaInstagram/></div><div className="handles-text">instagram.com/watch.nepal</div></div>
      </div>
      <div className="both-handles">
      <div className="icon-text-wrapper"><div className="handles-icon"><FaGift/></div><div className="handles-text">Refer us and take 5% cash from us.</div></div>
      <div className="icon-text-wrapper"><div className="handles-icon"><FaGift/></div><div className="handles-text">Get 5% off on next purchase.</div></div>
      </div>
      </div>
      </div>
    </>
  )
}

export default SocialMediaHandle
