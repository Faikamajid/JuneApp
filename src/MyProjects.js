import React, { useEffect, useState } from "react";
import { logos, Pages } from "./ExportResources";
import { MyResponsiveStream } from "./Charts/streamChart";
import { streamData } from "./Data/StreamChartData";
import MyButton from "./MaterialUi/Buttons";

export default function MyProjects() {
  const [showProjects, setShowProjects] = useState(false);
  useEffect(() => {
    console.log("hi");
  }, [showProjects]);
  function changeProject() {
    console.log("insides");
    setShowProjects(!showProjects);
  }
  return (
    <>
      {showProjects ? (
        <div
          key={showProjects}
          style={{ position: "relative", float: "left", width: "100%" }}
        >
          {/* <img src={logos.logo1}/> */}
          {/* chart section */}
          <div style={{ width: '-webkit-fill-available', height: "500px" }}>
            <MyResponsiveStream data={streamData} />
          </div>
          {/* Demo project section */}
          {/* <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
            <div  style={{ width: "50%", height: "500px" }}>
              <img
              
                src={Pages.pageA}
              />
            </div>
            <div  style={{ width: "50%", height: "500px" }}>
              <img
              
                src={Pages.pageB}
              />
            </div>
            <div  style={{ width: "50%", height: "500px" }}>
              <img
                
                src={Pages.pageC}
              />
            </div>
            <div  style={{ width: "50%", height: "500px" }}>
              {" "}
              <img
               
                src={Pages.pageD}
              />
            </div>
          </div> */}
        </div>
      ) : (
        <></>
      )}

      <MyButton
        action={changeProject}
        text={showProjects ? "Hide Projects" : "Show Projects"}
      />
    </>
  );
}
