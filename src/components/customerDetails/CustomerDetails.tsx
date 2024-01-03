import Description from "./description/Description"
import Form from "./form/Form"
import SocialMediaHandle from "./socialMediaHandle/SocialMediaHandle"
import TitleBar from "./titleBar/TitleBar"
import "../customerDetails/CustomerDetails.css"

const CustomerDetails = () => {
  return (
    <>
    <div className="customer-card">
        <TitleBar/>
        <Form/>
        <Description/>
        <SocialMediaHandle/>
        </div>
    </>
  )
}

export default CustomerDetails
