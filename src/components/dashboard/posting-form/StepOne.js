const FormOne = () => {
  return (
    <>
    <form className="form-holder-one">
      <h1>Service Provider Information</h1>
      <div className="personal-top-one">
        <label>Project Name / Service Name</label>
        <input placeholder="Website Developer & Desginer"></input>
      </div>
      <div className="personal-top-one">
        <label>Contact Person</label>
        <input placeholder="John Smith"></input>
      </div>
      <div className="two-inputs-in-one">
        <div className="personal-top-one">
          <label>Contact Email</label>
          <input placeholder="example@example.com"></input>
        </div>
        <div className="personal-top-one">
          <label>Contact Phone Number</label>
          <input placeholder="+1 (234)-567-8901"></input>
        </div>
      </div>
    </form>

    <form className="form-holder-one">
    <h1>Where are you located?</h1>
    <div className="personal-top-one">
      <label>Your Address</label>
      <input placeholder="123 Smith Road Ave"></input>
    </div>
    <div className="two-inputs-in-one">
      <div className="personal-top-one">
        <label>Country</label>
        <input placeholder="Canada"></input>
      </div>
      <div className="personal-top-one">
        <label>City</label>
        <input placeholder="Toronto"></input>
      </div>
    </div>
  </form>
  </>
  )
}

export default FormOne;

