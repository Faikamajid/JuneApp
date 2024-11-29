import React, { useState } from "react";
import MyButton from "./MaterialUi/Buttons";
import { Tabs, Tab } from "@mui/material";
import { pink } from '@mui/material/colors';


export default function CustomHeaderComp({ changeTabOption }) {
  const [value, setTabValue] = useState("Charts");
  const handleChange = (event, newValue) => {
    console.log(newValue, "val");
    changeTabOption(newValue);
    setTabValue(newValue);
  };
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        float: "left",
        color: "CaptionText",
        height: "78px",
        backgroundColor: "#c000ff63",
      }}
    >
      {/* ADD DIFFERENT OPTIONS TO CHOOSE */}
      <Tabs
        sx={{ float: "right" }}
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="Cards" label="Cards" sx={{color:'white'}} />
        <Tab value="Counter" label="Counter"  sx={{color:'white'}}  />
        <Tab value="Charts" label="Charts"   sx={{color:'white'}} />
      </Tabs>
    </div>
  );
}
