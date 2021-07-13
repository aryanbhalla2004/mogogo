const FormThree = (props) => {
  return (
    <>
    <form className="form-holder-one loading-In-Animation">
      <h1>Qualification Information</h1>
      {/* <div class="image-drop-box">
        <div className="data-text-file">
          <i class="fas fa-file-upload"></i>
          <p>Drag or click on the button to upload, any additional photos.</p>
          <input type="file"/>
        </div>
      </div> */}
      <div className="flex-input-2 mt-10">
        <div className="input-fields">
          <label>Experience</label>
          <div className="icon-row">
            <i class="fas fa-graduation-cap"></i>
            <input placeholder="10 Years" type="Number" name="experience" value={props.listingType.experience} onChange={(e) => props.setInputField(e)}></input>
            <p>Years</p>
          </div>   
        </div>
      </div>
      <div className="qualification">
        <h3>Qualification in your field</h3>
        <p>Select the following boxes that described/relate with your qualifications</p>
        <div className="checkbox-qualification">
          <ul>
            <li>
              <input type="checkbox" id="Doctoral-degree" onChange={(e) => props.setQualification(e, 'Doctoral degree')}/>
              <label for="Doctoral-degree">Doctoral degree</label>
            </li>
            <li>
              <input type="checkbox" id="Masters-degree" onChange={(e) => props.setQualification(e, 'Masters degree')}/>
              <label for="Masters-degree">Masters degree</label>
            </li>
            <li>
              <input type="checkbox" id="Graduate-diploma" onChange={(e) => props.setQualification(e, 'Graduate diploma')}/>
              <label for="Graduate-diploma">Graduate diploma</label>
            </li>
            <li>
              <input type="checkbox" id="Graduate-certificate" onChange={(e) => props.setQualification(e, 'Graduate certificate')}/>
              <label for="Graduate-certificate">Graduate certificate</label>
            </li>
            <li>
              <input type="checkbox" id="Bachelor-degree" onChange={(e) => props.setQualification(e, 'Bachelor degree')}/>
              <label for="Bachelor-degree">Bachelor degree</label>
            </li>
            <li>
              <input type="checkbox" id="Advanced-diploma" onChange={(e) => props.setQualification(e, 'Advanced diploma / Associates degree')}/>
              <label for="Advanced-diploma">Advanced diploma / Associates degree</label>
            </li>
            <li>
              <input type="checkbox" id="Diploma" onChange={(e) => props.setQualification(e, 'Diploma')}/>
              <label for="Diploma">Diploma</label>
            </li>
          </ul>
        </div>
      </div>
    </form>

    <form className="form-holder-one loading-In-Animation">
      <h1>Social Media Information</h1>
      <div className="flex-input-2 mt-10">
        <div className="input-fields half-width">
          <label>Facebook (Optional)</label>
          <div className="icon-row">
            <i class="fas fa-phone-alt"></i>
            <input placeholder="Facebook page URL" type="url" name="facebook" value={props.listingType.facebook} onChange={props.setInputField}></input>
          </div>   
        </div>
        <div className="input-fields half-width">
          <label>Instagram (Optional)</label>
          <div className="icon-row">
            <i class="fas fa-envelope"></i>
            <input placeholder="Instagram page URL" type="url" name="instagram" value={props.listingType.instagram} onChange={props.setInputField}></input>
          </div>   
        </div>
      </div>
      <div className="flex-input-2 mt-10">
        <div className="input-fields half-width">
          <label>Twitter (Optional)</label>
          <div className="icon-row">
            <i class="fas fa-phone-alt"></i>
            <input placeholder="Twitter page URL" type="url" name="twitter" value={props.listingType.twitter} onChange={props.setInputField}></input>
          </div>   
        </div>
        <div className="input-fields half-width">
          <label>Indeed (Optional)</label>
          <div className="icon-row">
            <i class="fas fa-envelope"></i>
            <input placeholder="Indeed page URL" type="url" name="indeed" value={props.listingType.youTube} onChange={props.setInputField}></input>
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

