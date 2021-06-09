import { useEffect, useState } from "react";
import FormOne from './posting-form/StepOne';
import FormTwo from "./posting-form/StepTwo";

const Post = (props) => {
  const [processStage, setProcessStage] = useState({one: true});
  const [addTypeSelected, setAddTypeSelected] = useState(false);
  const [listingType, setListingType] = useState({
    type: '',
    title: '',
    description: '',
    tags: []
  });

  const processButton = (process) => {
    setProcessStage({[process]: true});
  }

  const goBack = () => {
    if(processStage.one) {
      setAddTypeSelected(false)
    } else if (processStage.two) {
      setProcessStage({one: true});
    } else if (processStage.three) {
      setProcessStage({two: true});
    } else {
      setProcessStage({three: true});
    }
  }

  const setPostType = (data) => {
    setListingType(prevInput => ({
      ...prevInput, type: data
    }));
  }

  const setInputField = (e) => {
    setListingType(prevInput => ({
      ...prevInput, [e.target.name]: e.target.value
    }));
  }

  return (
    <div className="jobPosting-form">
      {addTypeSelected ?
        <>
          <div className="checklist-holder">
            <ul>
              <li className={processStage.one ? "active-post-list-steps" : ""} onClick={(e) => processButton("one")}>01 <span>Get Started</span></li>
              <li className={processStage.two ? "active-post-list-steps" : ""} onClick={(e) => processButton("two")}>02 <span>Information</span></li>
              <li className={processStage.three ? "active-post-list-steps" : ""} onClick={(e) => processButton("three")} >03<span>Tech Components</span></li>
              <li className={processStage.four ? "active-post-list-steps" : ""} onClick={(e) => processButton("four")}>04<span>Finish</span></li>
            </ul>
            <div className="go-back-select-post-type">
              <button className="button-hover" onClick={goBack}><i class="fas fa-arrow-left"></i></button>
            </div>
          </div>
          <div className="form-right-side loading-In-Animation">
            {processStage.one ? <FormOne setListingType={setListingType} setProcessStage={setProcessStage} setInputField={setInputField} listingType={listingType}/> : false}
            {processStage.two ? <FormTwo setInputField={setInputField} listingType={listingType}/> : false}
            {processStage.three ? <h1>Three</h1> : false}
            {processStage.four ? <h1>Four</h1> : false}
          </div>
        </> : 
        <div className="option-select-3 loading-In-Animation">
          <h1>Tell us about yourself</h1>
          <p>Pick one of the option below for posting you listing on Mogogo</p>
          <ul>
            <li className={listingType.type === 'Business' ? "option-select-3-selected" : ''} onClick={(e) => setPostType('Business')}>
              <i class="far fa-building"></i>
              <h2>Business Class</h2>
              <p>For Business Listing Only</p>
              <p></p>
              <ul>
                <li>
                  <span className="check-mark-post-listing">
                    <i className="fas fa-check"></i>
                  </span>
                  Additional Location
                </li>
                <li>
                  <span className="check-mark-post-listing">
                    <i className="fas fa-check"></i>
                  </span>
                  Multiple Team Members
                </li>
                <li>
                  <span className="check-mark-post-listing">
                    <i className="fas fa-check"></i>
                  </span>
                  Support 24/7
                </li>
                <li>
                  <span className="check-mark-post-listing">
                    <i className="fas fa-check"></i>
                  </span>
                  Custom Business Page
                </li>
              </ul>
            </li>
            <li className={listingType.type === 'Individual' ? "option-select-3-selected" : ''} onClick={(e) => setPostType('Individual')}>
              <i className="fas fa-child"></i>
              <h2>Individual Class</h2>
              <p>For Individual Listing Only</p>
              <p></p>
              <ul>
                <li>
                  <span className="check-mark-post-listing">
                    <i className="fas fa-check"></i>
                  </span>
                  Single Location
                </li>
                <li>
                  <span className="check-mark-post-listing">
                    <i className="fas fa-check"></i>
                  </span>
                  Individual Team Member
                </li>
                <li>
                  <span className="check-mark-post-listing">
                    <i className="fas fa-check"></i>
                  </span>
                  Limited Support
                </li>
                <li>
                  <span className="check-mark-post-listing">
                    <i className="fas fa-check"></i>
                  </span>
                  Custom Single Page
                </li>
              </ul>
            </li>
          </ul>
          <button className={listingType.type.length > 0 ? "select-button-post-ad button-hover" : "select-button-post-ad disabled-selected-button"} onClick={(e) => listingType.type.length > 0 ? setAddTypeSelected(true) : false}>Continue&nbsp;<i class="fas fa-arrow-right"></i></button>
          <div >
            <a></a>
          </div>
        </div>
      }
    </div>
  )
}

export default Post;