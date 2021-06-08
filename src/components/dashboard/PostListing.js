import { useEffect, useState } from "react";
import FormOne from './posting-form/StepOne';

const Post = (props) => {
  const [processStage, setProcessStage] = useState({one: true});
  const [addTypeSelected, setAddTypeSelected] = useState(false);
  const [listingType, setListingType] = useState({
    type: ''
  });
  const processButton = (process) => {
    setProcessStage({[process]: true});
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
          </div>
          <div className="form-right-side">
            {processStage.one ? <FormOne/> : false}
            {processStage.two ? <h1>Two</h1> : false}
            {processStage.three ? <h1>Three</h1> : false}
            {processStage.four ? <h1>Four</h1> : false}
          </div>
        </> : 
        <div className="option-select-3">
          <h1>Tell us about yourself</h1>
          <p>Pick one of the option below for posting you listing on Mogogo</p>
          <ul>
            <li className={listingType.type === 'Business' ? "option-select-3-selected" : ''} onClick={(e) => setListingType({type: 'Business'})}>
              <i class="far fa-building"></i>
              <h2>Business Class</h2>
              <p>For Business Listing Only</p>
              <p></p>
              <ul>
                <li>
                  <span className="check-mark-post-listing">
                    <i className="fas fa-check"></i>
                  </span>
                  Lorem Ipsum Test asds
                </li>
                <li>
                  <span className="check-mark-post-listing">
                    <i className="fas fa-check"></i>
                  </span>
                  Lorem Ipsum Test asds
                </li>
                <li>
                  <span className="check-mark-post-listing">
                    <i className="fas fa-check"></i>
                  </span>
                  Lorem Ipsum Test asds
                </li>
                <li>
                  <span className="check-mark-post-listing">
                    <i className="fas fa-check"></i>
                  </span>
                  Lorem Ipsum Test asds
                </li>
              </ul>
            </li>
            <li className={listingType.type === 'Individual' ? "option-select-3-selected" : ''} onClick={(e) => setListingType({type: 'Individual'})}>
              <i className="fas fa-child"></i>
              <h2>Individual Class</h2>
              <p>For Individual Listing Only</p>
              <p></p>
              <ul>
                <li>
                  <span className="check-mark-post-listing">
                    <i className="fas fa-check"></i>
                  </span>
                  Lorem Ipsum Test asds
                </li>
                <li>
                  <span className="check-mark-post-listing">
                    <i className="fas fa-check"></i>
                  </span>
                  Lorem Ipsum Test asds
                </li>
                <li>
                  <span className="check-mark-post-listing">
                    <i className="fas fa-check"></i>
                  </span>
                  Lorem Ipsum Test asds
                </li>
                <li>
                  <span className="check-mark-post-listing">
                    <i className="fas fa-check"></i>
                  </span>
                  Lorem Ipsum Test asds
                </li>
              </ul>
            </li>
          </ul>
          <button className={listingType.type.length > 0 ? "select-button-post-ad button-hover" : "select-button-post-ad disabled-selected-button"} onClick={(e) => setAddTypeSelected(true)}>Continue&nbsp;<i class="fas fa-arrow-right"></i></button>
          <div >
            <a></a>
          </div>
        </div>
      }
    </div>
  )
}

export default Post;