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
        display:'flex',
        justifyContent:'end',
        width: "100%",
        position: "relative",
        float: "left",
        color: "CaptionText",
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
        variant="scrollable"
        scrollButtons={true}
        allowScrollButtonsMobile
      >
        <Tab value="Cards" label="Cards" sx={{color:'white'}} />
        <Tab value="Counter" label="Counter"  sx={{color:'white'}}  />
        <Tab value="Charts" label="Charts"   sx={{color:'white'}} />
        <Tab value="Users" label="All Users"   sx={{color:'white'}} />
        <Tab value="AddUser" label="Add User"   sx={{color:'white'}} />
        <Tab value="UpdateUsersDetail" label="Update Info"   sx={{color:'white'}} />
      </Tabs>
    </div>
  );
}
