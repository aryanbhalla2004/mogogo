import { useEffect, useState } from "react";
import AccountSetting from "./settings/account";

const Setting = (props) => {
  const [settingSelection, setSettingSelection] = useState({account: true});
  return (
    <h1>Settings</h1>
  );
}

export default Setting;