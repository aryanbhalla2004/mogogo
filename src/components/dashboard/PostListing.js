import { useEffect, useState } from "react";
import FormOne from './posting-form/StepOne';
import FormTwo from "./posting-form/StepTwo";
import LastStep from "./posting-form/StepFour";
import FormThree from "./posting-form/StepThree";
import {auth, firebase} from '../../util/firebase';
import { mockComponent } from "react-dom/cjs/react-dom-test-utils.production.min";
import moment from "moment";
const Post = (props) => {
  const [editable, setEditable] = useState({
    one: true,
    two: false,
    three: false,
  });
  const [processStage, setProcessStage] = useState({one: true});
  const [backButtonShow, setBackButtonShow] = useState(true);
  const [addTypeSelected, setAddTypeSelected] = useState(false);
  const userId = auth.currentUser.uid;
  const [listingType, setListingType] = useState({
    type: '',
    title: '',
    description: '',
    category: '',
    tags: [],
    number: '',
    email: [props.user && props.user.Email],
    extra_note: '',
    address: '',
    website: '',
    youTube: '',
    Image: '',
    ownerId: userId,
    posted_date: moment().format('MM-DD-YYYY'),
    review: []
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

  const continueButton = async (location) => {
    if(location === "four") {
      setEditable({one: false, two: false, three: false});
      setProcessStage({[location]: true});
      setBackButtonShow(false);
      firebase.firestore().collection("listings").doc().set(listingType)
    } else {
      setProcessStage({[location]: true});
      setEditable(prevInput => ({
        ...prevInput, [location]: true
      }));
    }
  }

  return (
    <div className="jobPosting-form loading-In-Animation">
      {addTypeSelected ?
        <>
          <div className="checklist-holder">
            <ul>
              <li className={processStage.one ? "active-post-list-steps" : ""} onClick={(e) => editable.one && processButton("one")}>01<span>Get Started</span></li>
              <li className={processStage.two ? "active-post-list-steps" : ""} onClick={(e) => editable.two && processButton("two")}>02 <span>Information</span></li>
              <li className={processStage.three ? "active-post-list-steps" : ""} onClick={(e) => editable.three && processButton("three")} >03<span>Tech Components</span></li>
              <li className={processStage.four ? "active-post-list-steps" : ""}>04<span>Finish</span></li>
            </ul>
            <div className="go-back-select-post-type">
            {backButtonShow && <button className="button-hover" onClick={goBack}><i class="fas fa-arrow-left"></i></button>}
            </div>
          </div>
          <div className="form-right-side loading-In-Animation">
            {processStage.one ? <FormOne setListingType={setListingType} setInputField={setInputField} listingType={listingType} continueButton={continueButton}/> : false}
            {processStage.two ? <FormTwo setInputField={setInputField} listingType={listingType} user={props.user} continueButton={continueButton}/> : false}
            {processStage.three ? <FormThree continueButton={continueButton} setInputField={setInputField} listingType={listingType} /> : false}
            {processStage.four ? <LastStep/> : false}
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