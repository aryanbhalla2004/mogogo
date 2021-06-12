const FormThree = (props) => {
  return (
    <>
    <form className="form-holder-one loading-In-Animation">
      <h1>Listing Image</h1>
      <div class="image-drop-box">
        <div className="data-text-file">
          <i class="fas fa-file-upload"></i>
          <p>Drag or click on the button to upload, any additional photos.</p>
          <input type="file"/>
        </div>
      </div>
    </form>

    <form className="form-holder-one loading-In-Animation">
      <h1>Contact Information</h1>
      <div className="flex-input-2 mt-10">
        <div className="input-fields half-width">
          <label>Website Link (Optional)</label>
          <div className="icon-row">
            <i class="fas fa-phone-alt"></i>
            <input placeholder="http://example.com" type="url" name="website" value={props.listingType.website} onChange={props.setInputField}></input>
          </div>   
        </div>
        <div className="input-fields half-width">
          <label>YouTube Link (Optional)</label>
          <div className="icon-row">
            <i class="fas fa-envelope"></i>
            <input placeholder="YouTube Channel/Video link" type="url" name="youTube" value={props.listingType.youTube} onChange={props.setInputField}></input>
          </div>   
        </div>
      </div>
    </form>
    <div className="button-continue-post">
      {<button className="button-hover" onClick={(e) => props.continueButton('four')}><i class="fas fa-arrow-right"></i>&nbsp;Finish</button>}
    </div>
    </>
  );
}

export default FormThree

