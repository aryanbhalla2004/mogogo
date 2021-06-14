import '../styles/job-details.css';
import macaddress from 'macaddress';
import { useState } from 'react';

const JobDetails = () => {
  const [commentStatus, setCommentStatus] = useState(false);
  return (
    <div className="job-details-details-container">
      <div className="job-details-header">
        <div className="content-sizing job-details-flex-fix">
          <ul>
            <p>Home > Job > Software Developer</p>
          </ul>
          <ul>
            <h2>Software Developer</h2>
          </ul>
        </div>
      </div>
      <div className="job-details-info">
        <div className="content-sizing job-details-info-content">
          <div className="job-left-column">
            <ul>
              <li>
                <div className="top-info-job">
                  <img src="12.jpeg" width="100"/>
                  <h2>Software Developer</h2>
                  <p><i class="bi bi-geo-alt"></i>&nbsp;91 Rue Taitbout 75009 Paris</p>
                  <div className="review-box">
                    <ul>
                      <li><i class="bi bi-star"></i></li>
                      <li><i class="bi bi-star"></i></li>
                      <li><i class="bi bi-star"></i></li>
                      <li><i class="bi bi-star"></i></li>
                      <li><i class="bi bi-star"></i></li>
                    </ul>
                    <p>0 out of 5</p>
                  </div>
                </div>
                <div className="bottom-info-job">
                  <ul>
                    <li><i class="bi bi-telephone"></i>&nbsp;+610 123 789</li>
                    <li><i class="bi bi-geo-alt"></i>&nbsp;Winnipeg</li>
                    <li><i class="bi bi-envelope"></i>&nbsp;example@example.com</li>
                    <li><i class="bi bi-signpost"></i>&nbsp;June 29, 2021</li>
                    <li><i class="bi bi-building"></i>&nbsp;Business</li>
                    <li></li>
                  </ul>
                </div>
              </li>
              <li className="overview-text">
                <div className="overview-text-holder">
                  <h2>Overview</h2>
                </div>
                <div className="overview-description">
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                </div>
              </li>
              <li className="overview-text">
                <div className="overview-text-holder">
                  <h2>Write a review</h2>
                </div>
                <form>
                  <div className="flex-input-2 review-form">
                    <div className="input-fields half-width">
                      <label>Name</label>
                      <div className="icon-row">
                        <i class="bi bi-person"></i>
                        <input placeholder="Your Name" type="url" name="website"  ></input>
                      </div>   
                    </div>
                    <div className="input-fields half-width">
                      <label>Email</label>
                      <div className="icon-row">
                        <i class="bi bi-envelope"></i>
                        <input placeholder="Your Email" type="url" name="youTube"></input>
                      </div>   
                    </div>
                  </div>
                  <div className="personal-top-one review-form-text-area-fix">
                    <label>Description</label>
                    <div className="icon-row text-area-desgine">
                      <textarea placeholder="Website Developer & Desginer" wrap="off" wrap="hard" rows="10" name="description" ></textarea>
                    </div>
                    <div className="word-count">
                      <p>0/500 Words</p>
                    </div>
                  </div>
                  <div className="rating-holder">
                    <p>Rating:</p>
                    <ul>
                      <li><i class="bi bi-star"></i></li>
                      <li><i class="bi bi-star"></i></li>
                      <li><i class="bi bi-star"></i></li>
                      <li><i class="bi bi-star"></i></li>
                      <li><i class="bi bi-star"></i></li>
                    </ul>
                  </div>
                  <button className="button-hover">Post Review</button>
                  <div className="show-comment-button">
                    {!commentStatus ? <p onClick={(e) => setCommentStatus(true)}>Show Comment&nbsp; <i class="bi bi-chevron-down"></i></p> : <p onClick={(e) => setCommentStatus(false)}>Hide Comment&nbsp; <i class="bi bi-chevron-up"></i></p>}
                  </div>
                </form>
                {commentStatus ? 
                <div className="review-holder-content">
                  <ul>
                    <li>
                      <div className="profile-name">
                        <i class="bi bi-person-fill"></i>
                      </div>
                      <div className="info-review-text">
                        <h2>Aryan Bhalla</h2>
                        <p>June 20, 2021</p>
                        <div className="comment">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo perspiciatis illum! Quo adipisci voluptate optio. Sint, dicta? Ducimus ullam dolorum aliquid. Laborum consequatur nisi magnam aspernatur illo libero quis?</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="profile-name">
                        <i class="bi bi-person-fill"></i>
                      </div>
                      <div className="info-review-text">
                        <h2>Aryan Bhalla</h2>
                        <p>June 20, 2021</p>
                        <div className="comment">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo perspiciatis illum! Quo adipisci voluptate optio. Sint, dicta? Ducimus ullam dolorum aliquid. Laborum consequatur nisi magnam aspernatur illo libero quis?</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="profile-name">
                      <i class="bi bi-person-fill"></i>
                      </div>
                      <div className="info-review-text">
                        <h2>Aryan Bhalla</h2>
                        <p>June 20, 2021</p>
                        <div className="comment">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo perspiciatis illum! Quo adipisci voluptate optio. Sint, dicta? Ducimus ullam dolorum aliquid. Laborum consequatur nisi magnam aspernatur illo libero quis?</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="profile-name">
                      <i class="bi bi-person-fill"></i>
                      </div>
                      <div className="info-review-text">
                        <h2>Aryan Bhalla</h2>
                        <p>June 20, 2021</p>
                        <div className="comment">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo perspiciatis illum! Quo adipisci voluptate optio. Sint, dicta? Ducimus ullam dolorum aliquid. Laborum consequatur nisi magnam aspernatur illo libero quis?</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>: ""
                }
              </li>
            </ul>
          </div>
          <div className="job-right-column">
            <ul>
              <li></li>
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
    </div>
  )
}

export default JobDetails;