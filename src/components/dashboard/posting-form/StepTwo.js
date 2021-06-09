const FormTwo = (props) => {
  return (
    <>
    <form className="form-holder-one">
      <h1>Listing Information</h1>
      <div className="personal-top-one">
        <label>Information About Listing</label>
        <div className="icon-row text-area-desgine">
          <textarea placeholder="Website Developer & Desginer" name="title" wrap="off" cols="30" rows="5" onChange={props.setInputField}></textarea>
        </div>
      </div>
      <div className="personal-top-one">
        <label>Extra Notes</label>
        <div className="icon-row text-area-desgine">
          <textarea placeholder="Website Developer & Desginer" name="title" wrap="off" cols="30" rows="5" onChange={props.setInputField}></textarea>
        </div>
      </div>
    </form>

  <div className="">
      <button className="button-hover" onClick={(e) => props.setProcessStage({two: true})}><i class="fas fa-arrow-right"></i>&nbsp;Continue</button>
  </div>
  </>
  )
}

export default FormTwo;