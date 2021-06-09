import { useState } from "react";

const FormTwo = (props) => {
  const [postDetailsLength, setPostDetailLength] = useState('0');
  const [extraDetailsLength, setExtraDetailsLength] = useState('0');

  const wordCount = (e) => {
    
    if(e.target.name === 'post_detail' && e.target.value.split('').length <= 250) {
      props.setInputField(e);
      let words = props.listingType.post_detail.split('').length;
      if(words === 1 && e.target.value.split(' ')[0] === "") {
        setPostDetailLength("0");
      } else {
        setPostDetailLength(words);
      }  
    }

    if (e.target.name === 'extra_info' && e.target.value.split(' ').length < 251) {
      props.setInputField(e);
      let words = e.target.value.split(' ').length;
      if(words === 1 && e.target.value.split(' ')[0] === "") {
        setExtraDetailsLength("0");
      } else {
        setExtraDetailsLength(words);
      }    
    }
    
  }

  return (
    <>
    <form className="form-holder-one">
      <h1>Listing Information</h1>
      <div className="personal-top-one">
        <label>Select </label>
        <div className="icon-row text-area-desgine">
          <select>
            <option></option>
          </select>
        </div>
        <div className="word-count">
          <p>{postDetailsLength}/500 Words</p>
        </div>
      </div>
      <div className="personal-top-one">
        <label>Information About Listing</label>
        <div className="icon-row text-area-desgine">
          <textarea placeholder="Website Developer & Desginer" wrap="off" wrap="hard" rows="10" name="post_detail" onChange={wordCount} value={props.listingType.post_detail}></textarea>
        </div>
        <div className="word-count">
          <p>{postDetailsLength}/500 Words</p>
        </div>
      </div>
      <div className="personal-top-one">
        <label>Extra Notes</label>
        <div className="icon-row text-area-desgine">
          <textarea placeholder="Website Developer & Desginer" name="title" wrap="off" rows="10" wrap="hard" name="extra_info" value={props.listingType.extra_info} onChange={wordCount}></textarea>
        </div>
        <div className="word-count">
          <p>{extraDetailsLength}/500 Words</p>
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