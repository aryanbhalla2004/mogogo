const FormOne = (props) => {
  return (
    <>
    <form className="form-holder-one">
      <h1>Service Provider Information</h1>
      <div className="personal-top-one">
        <label>Post Title</label>
        <div className="icon-row">
        <i class="far fa-lightbulb"></i>
          <input placeholder="Website Developer & Desginer" name="title" value={props.listingType.title} onChange={props.setInputField}></input>
        </div>
      </div>
      <div className="personal-top-one">
        <label>Contact Person</label>
        <div className="icon-row">
          <i class="far fa-user"></i>
          <input placeholder="John Smith" name='contact_person' value={props.listingType.contact_person} onChange={props.setInputField}></input>
        </div>
      </div>
      <div className="two-inputs-in-one">
        <div className="personal-top-one">
          <label>Contact Email</label>
          <div className="icon-row">
            <i class="far fa-envelope"></i>
            <input placeholder="example@example.com" name='email' value={props.listingType.email} onChange={props.setInputField}></input>
          </div>
        </div>
        <div className="personal-top-one">
          <label>Contact Phone Number</label>
          <div className="icon-row">
            <i class="bi bi-telephone"></i>
            <input placeholder="+1 (234)-567-8901" name='phone' value={props.listingType.phone} onChange={props.setInputField}></input>
          </div>
        </div>
      </div>
    </form>

    <form className="form-holder-one">
    <h1>Where are you located?</h1>
    <div className="personal-top-one">
      <label>Your Address</label>
      <div className="icon-row">
        <i class="bi bi-house-door"></i>
        <input placeholder="123 Smith Road Ave" name='address' value={props.listingType.address} onChange={props.setInputField}></input>
      </div>
    </div>
    <div className="two-inputs-in-one">
      <div className="personal-top-one">
        <label>Country</label>
        <div className="icon-row">
          <i class="fas fa-globe-americas"></i>
          <input placeholder="Canada" name='country' value={props.listingType.country} onChange={props.setInputField}></input>
        </div>
      </div>
      <div className="personal-top-one">
        <label>City</label>
        <div className="icon-row">
          <i class="far fa-building"></i>
          <input placeholder="Toronto" name='city'  value={props.listingType.city} onChange={props.setInputField}></input>
        </div>
      </div>
    </div>
  </form>
  <div className="">
      <button className="button-hover" onClick={(e) => props.setProcessStage({two: true})}><i class="fas fa-arrow-right"></i>&nbsp;Continue</button>
  </div>
  </>
  )
}

export default FormOne;

