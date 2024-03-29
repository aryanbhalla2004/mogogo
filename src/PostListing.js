import { useEffect, useState } from "react";
import FormOne from './StepOneForm';

const Post = (props) => {
  const [processStage, setProcessStage] = useState({one: true});

  const processButton = (process) => {
    setProcessStage({[process]: true});
  }

  return (
    <div className="jobPosting-form">
      <div className="checklist-holder">
        <ul>
          <li className={processStage.one ? "active-post-list-steps" : ""} onClick={(e) => processButton("one")}>01 <span>Get Started</span></li>
          <li className={processStage.two ? "active-post-list-steps" : ""} onClick={(e) => processButton("two")}>02 <span>Information</span></li>
          <li className={processStage.three ? "active-post-list-steps" : ""} onClick={(e) => processButton("three")} >03<span>Tech Components</span></li>
          <li className={processStage.four ? "active-post-list-steps" : ""} onClick={(e) => processButton("four")}>04<span>Finish</span></li>
        </ul>
      </div>
      <div className="form-right-side">
        {processStage.one ? <FormOne></FormOne> : false}
        {processStage.two ? <h1>Two</h1> : false}
        {processStage.three ? <h1>Three</h1> : false}
        {processStage.four ? <h1>Four</h1> : false}
      </div>
    </div>
  )
}

export default Post;