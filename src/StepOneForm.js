const FormOne = () => {
  return (
    <>
    <form className="form-holder-one">
      <h1>Service Provider Information</h1>
      <div className="personal-top-one">
        <label>Project Name / Service Name</label>
        <input placeholder="Example: Website Developer & Desginer"></input>
      </div>
      <div className="personal-top-one">
        <label>Contact Person</label>
        <input placeholder="Example: Website Developer & Desginer"></input>
      </div>
      <div className="two-inputs-in-one">
        <div className="personal-top-one">
          <label>Contact Email</label>
          <input placeholder="Example: Website Developer & Desginer"></input>
        </div>
        <div className="personal-top-one">
          <label>Contact Phone Number</label>
          <input placeholder="Example: Website Developer & Desginer"></input>
        </div>
      </div>
    </form>

    <form className="form-holder-one">
    <h1>Where are you located?</h1>
    <div className="personal-top-one">
      <label>Your Address</label>
      <input placeholder="Example: Website Developer & Desginer"></input>
    </div>
    <div className="two-inputs-in-one">
      <div className="personal-top-one">
        <label>Country</label>
        <input placeholder="Example: Website Developer & Desginer"></input>
      </div>
      <div className="personal-top-one">
        <label>City</label>
        <input placeholder="Example: Website Developer & Desginer"></input>
      </div>
    </div>
  </form>
  </>
  )
}

export default FormOne;

