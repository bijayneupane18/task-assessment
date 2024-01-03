import "../form/Form.css"

const Form = () => {
  return (
    <>
    <div className="form">
    <div className="form-text">
        <div className="text-field"><label>Name: </label><input/></div>
        <div className="text-field"><label>Address: </label><input/></div>
        <div className="text-field"><label>Number: </label><input/></div>
        <div className="text-field"><label>Watch Model: </label><input/></div>
        <div className="text-field"><label>Date: </label><input/></div>
    </div> 
    <div className="form-remarks">
    <div className="remarks-text">Verified By</div>
    <div className="remarks-box"></div>
    </div>
    </div>
    </>
  )
}

export default Form
