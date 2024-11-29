import React, { useState, useEffect } from "react";
import CardComp from "./MaterialUi/CardComp";


function ShowData(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => {
        setData(data); // Update state with fetched data
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <>Loading</>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px 3px",
            justifyContent: "center",
            float:'left'
          }}
        >
          {data.map((item) => (
            <CardComp user={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default ShowData;
