import { useState } from "react";

const FormOne = (props) => {
  const [postDetailsLength, setPostDetailLength] = useState('0');
  const [tag, setTag] = useState('');
  const [error, setError] = useState({
    title: '',
    description: '',
    tags: ''
  });

  const wordCount = (e) => {
    if(e.target.name === 'description' && e.target.value.split(' ').length <= 500) {
      props.setInputField(e);
      let words = props.listingType.description.split(' ').length;
      if(words === 1 && e.target.value.split(' ')[0] === "") {
        setPostDetailLength("0");
      } else {
        setPostDetailLength(words);
      }  
    }
  }

  const addTags = () => {
    let existingTags = props.listingType.tags;
    let findIfExisting = existingTags.find(exitingTag => exitingTag === tag);
    if(findIfExisting === undefined) {
      if(props.listingType.tags.length < 5) {
        if(tag !== "") {
          props.setListingType(prevInput => ({
            ...prevInput, tags: [...existingTags, tag]
          }));
          setTag('');
        } else {
          setError({tags: "Tag field is empty"});
        }
      } else {
        setError({tags: "Maximum of 5 tags are allowed"});
      }
    } else {
      setError({tags: "Tag already exits"});
    }
  }

  const removeTag = (name) => {
    let existingTags = props.listingType.tags;
    console.log(existingTags);
    let removeTag = existingTags.filter(exitingTag => exitingTag !== name);
    props.setListingType(prevInput => ({
      ...prevInput, tags: [...removeTag]
    }));
    setError('');
  }

  const setTagOnState = (e) => {
    setError('')
    setTag((e.target.value).toLowerCase());
  }

  return (
    <>
    <form className="form-holder-one loading-In-Animation" autocomplete="off">
      <h1>Ad Details/Information</h1>
      <div className="personal-top-one">
        <label>Ad Title</label>
        <div className="icon-row">
        <i class="far fa-lightbulb"></i>
          <input placeholder="Website Developer & Desginer" name="title" value={props.listingType.title} onChange={props.setInputField}></input>
        </div>
      </div>
      <div className="flex-input-2 mt-10">
        <div className="input-fields">
          <label>Select a category</label>
          <div className="icon-row">
            <i class="fas fa-list"></i>
            <select onChange={props.setInputField} name="category">
              <option disabled selected>Select Category</option>
              <option value="Accounting">Accounting</option>
              <option value="Administrative/Clerical">Administrative/Clerical</option>
              <option value="Arts/Entertainment/Media">Arts/Entertainment/Media</option>
              <option value="Automotive">Automotive</option>
              <option value="Biotechnology">Biotechnology</option>
              <option value="Business">Business</option>
              <option value="Construction">Construction</option>
              <option value="Customer Service">Customer Service</option>
              <option value="Education">Education</option>
              <option value="Engineering">Engineering</option>
              <option value="Executive">Executive</option>
              <option value="Facilities">Facilities</option>
              <option value="Financial Services">Financial Services</option>
              <option value="Government">Government</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Insurance">Insurance</option>
              <option value="Law Enforcement">Law Enforcement</option>
              <option value="Legal">Legal</option>
              <option value="Manufacturing/Production">Manufacturing/Production</option>
              <option value="Marketing">Marketing</option>
              <option value="Other">Other</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Retail/Wholesale">Retail/Wholesale</option>
              <option value="Sales">Sales</option>
              <option value="Science">Science</option>
              <option value="Telecommunications">Telecommunications</option>
              <option value="Transportation/Warehouse">Transportation/Warehouse</option>
            </select>
          </div>   
        </div>
      </div>
      <div className="personal-top-one">
        <label>Description</label>
        <div className="icon-row text-area-desgine">
          <textarea placeholder="Website Developer & Desginer" wrap="off" wrap="hard" rows="10" name="description" onChange={wordCount} value={props.listingType.description}></textarea>
        </div>
        <div className="word-count">
          <p>{postDetailsLength}/500 Words</p>
        </div>
      </div>
      <div className="personal-top-one tags">
        <label>Tags (Optional)</label>
        <p>Increase your ad exposure. Enter up to 5 keywords someone could search to find your ad.</p>
        <div className="icon-row tags-input-holder">
          <input placeholder="Tags" name='tags' value={tag} onChange={setTagOnState} autoComplete="false"></input>
          <button className="button-hover" onClick={addTags} type="button"><i class="fas fa-plus"></i></button>
        </div>
        {error.tags && <div className="error mt-10">{error.tags}</div>}
        <div className="tag-list">
          <ul>
            {
              props.listingType.tags && props.listingType.tags.map(tag => (
              <li>{tag}&nbsp;<i class="fas fa-times" onClick={(e) => removeTag(tag)}></i></li>
              ))
            }
          </ul>
        </div>
      </div>
    </form>
    <div className="button-continue-post">
      {props.listingType.title && props.listingType.description.length && props.listingType.category.length > 0 ? <button className="button-hover" onClick={(e) => props.continueButton('two')}><i class="fas fa-arrow-right"></i>&nbsp;Continue</button> : <button className="disabled-selected-button" onClick=''><i class="fas fa-arrow-right"></i>&nbsp;Continue</button>}
    </div>
  </>
  )
}

export default FormOne;

