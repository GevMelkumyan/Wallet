import React, { useState } from "react";
import Switch from "react-switch";
import style from "./IOSStyledSwitch .module.scss";

const IOSStyledSwitch = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (checked) => {
    setChecked(checked);
  };
  return (
    <div className={style.ios_switch}>
      <Switch
        onChange={handleChange}
        checked={checked}
        onColor="#48B14A"
        offColor="#C8C7CB"
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={33}
      />
    </div>
  );
};

export default IOSStyledSwitch;
