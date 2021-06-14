import '../styles/job-details.css';
import { useState, useEffect} from 'react';
import ReactStars from "react-rating-stars-component";
import {auth, firebase} from '../util/firebase';
import { useParams } from 'react-router-dom';
import moment from 'moment';


const JobDetails = () => {
  const {listingId} = useParams();
  const [listing, setListing] = useState([]);
  const [commentStatus, setCommentStatus] = useState(false);
  const [ratingMaster, setRatingMaster] = useState();
  const [commentValueReadonly, setCommentValueReadonly] = useState(false);
  const [commentInfo, setCommentInfo] = useState({
    name: '',
    email: '',
    desc: '',
    rating: 0,
    timeStamp: moment().format('MM-DD-YYY T')
  });

  const fetchData = async() => {
    firebase.firestore().collection('listings').doc(listingId).get()
    .then((docRef) =>  {
      setListing(docRef.data());
    });

    if(auth.currentUser !== null) {
      setCommentInfo({name: auth.currentUser.displayName, email: auth.currentUser.email, timeStamp: moment().format("MM-DD-YYYY")});
      setCommentValueReadonly(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  const updateUserInput = (e) => {
    setCommentInfo(prevInput => ({
      ...prevInput, [e.target.name]: e.target.value
    }));
  }

  const ratingChanged = (newRating) => {
    setCommentInfo(prevInput => ({
      ...prevInput, rating: newRating
    }));
  };
  
  const addComment = async(e) => {
    if(commentInfo.name !== "" && commentInfo.email !== "" && commentInfo.desc !== "" && commentInfo.rating > 0) {
      e.preventDefault();
      listing.review.push(commentInfo);
      await firebase.firestore().collection('listings').doc(listingId).set(listing);
      fetchData();
      setCommentInfo(prevInput => ({
        ...prevInput, desc: "", rating: 0
      }));
    }
  }

  const ratingStar = () => {
    if(listing.review) {
      let divingNumber = listing.review.length;
      let totalStar = 0;
      let number = 0;
      listing.review && listing.review.forEach(star => {
        totalStar += star.rating;
      });
      number = (totalStar / divingNumber).toFixed(1);
      const string = [<li><i class="bi bi-star"></i></li>,<li><i class="bi bi-star"></i></li>,<li><i class="bi bi-star"></i></li>,<li><i class="bi bi-star"></i></li>,<li><i class="bi bi-star"></i></li>];
      for (let x = 0; x < Math.floor(number); x++) {
        string[x] = <li><i class="bi bi-star-fill"></i></li>;
      }
      let minNum = number.toString().split('.')[1];
      if(minNum > 7){
        string[number.toString().split('.')[0]] = <li><i class="bi bi-star-fill"></i></li>;
      } else if(minNum <= 7 && minNum > 3){
        string[number.toString().split('.')[0]] = <li><i class="bi bi-star-half"></i></li>;
      }

      return string
    }
  }

  const documentFormat = () => {
    let text = listing && listing.description
    text = text && text.toString().split("\n")
    return text
  }

  return (
    <div className="job-details-details-container">
      {listing && <>
      <div className="job-details-header">
        <div className="content-sizing job-details-flex-fix">
          <ul>
            <p>Home <i class="bi bi-chevron-right green-color"></i> Job <i class="bi bi-chevron-right green-color"></i> <span className="green-color">{listing.category}</span></p>
          </ul>
          <ul>
            <h2>{listing.category}</h2>
          </ul>
        </div>
      </div>
      <div className="job-details-info">
        <div className="content-sizing job-details-info-content">
          <div className="job-left-column">
            <ul>
              <li>
                <div className="top-info-job">
                  <img src="/12.jpeg" width="100"/>
                  <h2>{listing.title}</h2>
                  <p><i class="bi bi-geo-alt"></i>&nbsp;{listing.address}</p>
                  <div className="review-box">
                    <ul>
                      {ratingStar()}
                    </ul>
                    <p>{listing.review && listing.review.length} Reviews</p>
                  </div>
                </div>
                <div className="bottom-info-job">
                  <ul>
                    <li><i class="bi bi-telephone"></i>&nbsp;{listing.number}</li>
                    <li><i class="bi bi-geo-alt"></i>&nbsp;Winnipeg</li>
                    <li><i class="bi bi-envelope"></i>&nbsp;{listing.email}</li>
                    <li><i class="bi bi-signpost"></i>&nbsp;{moment(listing.posted_date).format("MMM D YYYY")}</li>
                    <li><i class="bi bi-building"></i>&nbsp;{listing.type}</li>
                    <li></li>
                  </ul>
                </div>
              </li>
              <li className="overview-text">
                <div className="overview-text-holder">
                  <h2>Overview</h2>
                </div>
                <div className="overview-description">
                  {documentFormat() && documentFormat().map(text => (
                    <p>{text}</p>
                  ))}
                </div>
              </li>
              <li className="overview-text">
                <div className="overview-text-holder">
                  <h2>Write a review</h2>
                </div>
                <form onSubmit={addComment}> 
                  <div className="flex-input-2 review-form">
                    <div className="input-fields half-width">
                      <label>Name</label>
                      <div className="icon-row">
                        <i class="bi bi-person"></i>
                        <input placeholder="Your Name" type="url" name="name" value={commentInfo.name} onChange={updateUserInput} readOnly={commentValueReadonly}/>
                      </div>   
                    </div>
                    <div className="input-fields half-width">
                      <label>Email</label>
                      <div className="icon-row">
                        <i class="bi bi-envelope"></i>
                        <input placeholder="Your Email" type="url" name="email" value={commentInfo.email} onChange={updateUserInput} readOnly={commentValueReadonly}/>
                      </div>   
                    </div>
                  </div>
                  <div className="personal-top-one review-form-text-area-fix">
                    <label>Description</label>
                    <div className="icon-row text-area-desgine">
                      <textarea placeholder="Website Developer & Desginer" name="desc" wrap="off" wrap="hard" rows="10" value={commentInfo.desc} onChange={updateUserInput}></textarea>
                    </div>
                    <div className="word-count">
                      <p>0/500 Words</p>
                    </div>
                  </div>
                  <div className="rating-holder">
                    <p>Rating:</p>
                    <ul>
                      <ReactStars onChange={ratingChanged} count={5} size={20} isHalf={true} emptyIcon={<i class="bi bi-star"></i>} halfIcon={<i class="bi bi-star-half"></i>} filledIcon={<i class="bi bi-star-fill"></i>} activeColor="#00b074" color="#00b074" value={commentInfo.rating}/>
                    </ul>
                  </div>
                  <button className="button-hover" type="submit">Post Review</button>
                  <div className="show-comment-button">
                    {!commentStatus ? <p onClick={(e) => setCommentStatus(true)}>Show Comment&nbsp; <i class="bi bi-chevron-down"></i></p> : <p onClick={(e) => setCommentStatus(false)}>Hide Comment&nbsp; <i class="bi bi-chevron-up"></i></p>}
                  </div>
                </form>
                {commentStatus ? 
                <div className="review-holder-content">
                  <ul>
                    {listing.review && listing.review.map(review => (
                      <li>
                        <div className="profile-name">
                          <i class="bi bi-person-fill"></i>
                        </div>
                        <div className="info-review-text">
                          <h2>{review.name}&nbsp;</h2>
                          <p className="stars-date-combine"><ReactStars onChange={ratingChanged} count={5} size={14} isHalf={true} emptyIcon={<i class="bi bi-star"></i>} halfIcon={<i class="bi bi-star-half"></i>} filledIcon={<i class="bi bi-star-fill"></i>} activeColor="#00b074" color="#00b074" value={review.rating} edit={false}/>&nbsp;{moment(review.timeStamp).format("MMM DD YYYY")}</p>
                          <div className="comment">
                            <p>{review.desc}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>: ""
                }
              </li>
            </ul>
          </div>
          <div className="job-right-column">
            <ul>
              <li className="overview-text-holder padding-fix">
                <div className="overview-text-holder padding-fix">
                  <h2>Send Direct Inquiry</h2>
                </div>
                <form className="direct-message-form">
                  <div className="input-fields">
                    <div className="icon-row">
                      <i class="bi bi-envelope"></i>
                      <input placeholder="Your Name" type="Text" name="email" value={commentInfo.email} onChange={updateUserInput} readOnly={commentValueReadonly}/>
                    </div>   
                  </div>
                  <textarea placeholder="Your Message"></textarea>
                  <button className="button-hover">Send&nbsp;&nbsp;&nbsp;<i class="fas fa-arrow-right"></i></button>
                </form>
              </li>
              <li>
                <div className="overview-text-holder padding-fix">
                  <h2>Information</h2>
                </div>
                <div className="information-job-poster">
                  <ul>
                    <li>
                      <i class="fas fa-graduation-cap"></i>
                      <div className='information-text'>
                        <h3>Experince</h3>
                        <p>2 Years</p>
                      </div>
                    </li>
                    <li>
                      <i class="fas fa-university"></i>
                      <div className="information-text">
                        <h3>Qualification</h3>
                        <p>Bachelor Degree, Master’s Degree, Doctorate Degree</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="overview-text-holder padding-fix">
                  <h2>Social Share</h2>
                </div>
                <div className="social-media">
                  <p>Share Link:</p>
                  <ul>
                    <li><i class="fab fa-facebook-f"></i></li>
                    <li><i class="fab fa-instagram"></i></li>
                    <li><i class="fab fa-twitter"></i></li>
                    <li><i class="fab fa-linkedin-in"></i></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>}
    </div>
  )
}

export default JobDetails;