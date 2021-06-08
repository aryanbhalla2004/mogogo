import { useEffect, useState } from "react";
import AccountSetting from "./settings/account";

const Setting = (props) => {
  const [settingSelection, setSettingSelection] = useState({account: true});
  return (
    <div className="setting-container">
      <ul className="setting-option-holder">
        <h2>aryanbhalla66@gmail.com</h2>
        <ul className="setting-lists">
          <li onClick={(e) => setSettingSelection({account: true})}>
            <div className="setting-single-col-icon">
            <i class="fas fa-sliders-h"></i>
            </div>
            <div className="info-setting-single-col">
              <h3>General Setting</h3>
            </div>
          </li>
          <li onClick={(e) => setSettingSelection({address: true})}>
            <div className="setting-single-col-icon">
            <i class="fas fa-location-arrow"></i>
            </div>
            <div className="info-setting-single-col">
              <h3>Address & Location</h3>
            </div>
          </li>
          <li onClick={(e) => setSettingSelection({security: true})}>
            <div className="setting-single-col-icon">
            <i class="fas fa-user-shield"></i>
            </div>
            <div className="info-setting-single-col">
              <h3>Security & Login</h3>
            </div>
          </li>
          <li onClick={(e) => setSettingSelection({report: true})}>
            <div className="setting-single-col-icon">
            <i class="fas fa-bug"></i>
            </div>
            <div className="info-setting-single-col">
              <h3>Error Report</h3>
            </div>
          </li>
        </ul>
      </ul>
      <ul className="setting-content-selected-form">
        {settingSelection.account ? <AccountSetting/> : false}
        {settingSelection.address ? <h1>address</h1> : false}
        {settingSelection.security ? <h1>security</h1> : false}
        {settingSelection.report ? <h1>report</h1> : false}
      </ul>
    </div>
  );
}

export default Setting;