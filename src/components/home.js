import '../styles/most-popular.css';

const Home = () => {
  return (
    <>
    <div className="category-main-container">
      <div className="content-sizing category-main-content">
        <ul>
          <h2>Most popular category</h2>
          <a>Explore all</a>
        </ul>
        <ul className="category-list-holder">
          <li>
            <div className="object1">
              <i className="fas fa-briefcase"></i>
            </div>
            <h3>Business Development</h3>
            <p>234 Vacancy</p>
          </li>
          <li>
            <div className="object2">
              <i className="fas fa-headset"></i>
            </div>
            <h3>Customer Service</h3>
            <p>234 Vacancy</p>
          </li>
          <li>
            <div className="object3">
              <i className="fas fa-layer-group"></i>
            </div>
            <h3>Development</h3>
            <p>234 Vacancy</p>
          </li>
          <li>
            <div className="object4">
              <i className="fas fa-pen-nib"></i>
            </div>
            <h3>Design</h3>
            <p>234 Vacancy</p>
          </li>
          <li>
            <div className="object5">
              <i className="fas fa-rocket"></i>
            </div>
            <h3>Marketing & Management</h3>
            <p>234 Vacancy</p>
          </li>
          <li>
            <div className="object6">
              <i className="fas fa-location-arrow"></i>
            </div>
            <h3>Sale & Communication</h3>
            <p>234 Vacancy</p>
          </li>
          <li>
            <div className="object7"><i className="fas fa-tasks"></i></div>
            <h3>Project Management</h3>
            <p>234 Vacancy</p>
          </li>
          <li>
            <div className="object8"><i className="fas fa-user"></i></div>
            <h3>Human Resource</h3>
            <p>234 Vacancy</p>
          </li>
        </ul>
      </div>
    </div>
    <div className="about-text-home">
      <div className="content-sizing about-text-home-content">
        <ul className="image-about-holded">
          <img src="/about-home.jpg" width="500"></img>
        </ul>
        <ul className="about-content-right">
          <p className="top-tagline-about">Looking to find business for yourself/company?</p>
          <h1 className="top-title-about">Post your service on Mogogo and find clients.</h1>
          <p className="text-about-home">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
          <a className="sign-up-button-header button-hover">POST A JOB</a>
        </ul>
      </div>
    </div>
    <div className="footer-top">
      <div className="content-sizing footer-top-content">
        <ul className="footer-top-content-text">
          <h1>One of the Most Sucessful Job Portal</h1>
          <p>We must explain to you how all this mistaken idea of denouncing</p>
        </ul>
        <ul className="buttons-footer-top">
          <a>LOG IN</a>
          <a className="button-hover">SIGN UP</a>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Home