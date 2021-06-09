import { useEffect, useState } from "react";
import AccountSetting from "./settings/account";

const Setting = (props) => {
  const [settingSelection, setSettingSelection] = useState({account: true});
  return (
    <div className="setting-container">
      <ul className="setting-option-holder">
        <div className="setting-header-name-fix">
          <span className="name-user-logo font-size-25">A</span>
          <h2>{props.user && props.user.Email}</h2>
        </div>
        <ul className="setting-lists">
          <li onClick={(e) => setSettingSelection({account: true})} className={settingSelection.account ? 'setting-list-active' : ''}>
            <div className="setting-single-col-icon">
            <i class="fas fa-sliders-h"></i>
            </div>
            <div className="info-setting-single-col">
              <h3>General Setting</h3>
            </div>
          </li>
          <li onClick={(e) => setSettingSelection({address: true})} className={settingSelection.address ? 'setting-list-active' : ''}>
            <div className="setting-single-col-icon">
            <i class="fas fa-location-arrow"></i>
            </div>
            <div className="info-setting-single-col">
              <h3>Address & Location</h3>
            </div>
          </li>
          <li onClick={(e) => setSettingSelection({security: true})} className={settingSelection.security ? 'setting-list-active' : ''}>
            <div className="setting-single-col-icon">
            <i class="fas fa-user-shield"></i>
            </div>
            <div className="info-setting-single-col">
              <h3>Security & Login</h3>
            </div>
          </li>
          <li onClick={(e) => setSettingSelection({report: true})} className={settingSelection.report ? 'setting-list-active' : ''}>
            <div className="setting-single-col-icon">
            <i class="fas fa-bug"></i>
            </div>
            <div className="info-setting-single-col">
              <h3>Error Report</h3>
            </div>
          </li>
        </ul>
        <div className="urgent-remove">
          <ul>
            <li><i class="fas fa-sign-out-alt"></i>&nbsp;Logout</li>
            <li><i class="fas fa-trash-alt"></i>&nbsp;Remove Account</li>
          </ul>
        </div>
      </ul>
      <ul className="setting-content-selected-form">
        {settingSelection.account ? <AccountSetting user={props.user}/> : false}
        {settingSelection.address ? <h1>address</h1> : false}
        {settingSelection.security ? <h1>security</h1> : false}
        {settingSelection.report ? <h1>report</h1> : false}
      </ul>
    </div>
  );
}

export default Setting;