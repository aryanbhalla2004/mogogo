const Home = () => {
  return (
    <>
      <div class="information-dashboard-four-tabs loading-In-Animation">
        <ul>
          <li>
            <div className="dashboard-listing-box-icon object1">
              <i class="fas fa-briefcase"></i>
            </div>
            <div className="information-listing-box">
              <h1>0</h1>
              <p>Posted Job</p>
            </div>
          </li>
          <li>
            <div className="dashboard-listing-box-icon object8">
              <i class="far fa-envelope"></i>
            </div>
            <div className="information-listing-box">
              <h1>0</h1>
              <p>Top Inquires</p>
            </div>
          </li>
          <li>
            <div className="dashboard-listing-box-icon object4">
              <i class="far fa-eye"></i>
            </div>
            <div className="information-listing-box">
              <h1>0</h1>
              <p>Job View</p>
            </div>
          </li>
          <li>
            <div className="dashboard-listing-box-icon object3" >
              <i class="fas fa-chart-line"></i>
            </div>
            <div className="information-listing-box">
              <h1>0</h1>
              <p>Rating</p>
            </div>
          </li>
        </ul>
      </div>
      <div></div>
    </>
  );
}

export default Home;
