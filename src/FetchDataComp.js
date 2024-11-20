import React, { useState, useEffect } from "react";

function FetchData(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetch data from an API
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json()) // Convert response to JSON
    //   .then((data) => {
    //     setData(data); // Update state with fetched data
    //     setLoading(false); // Set loading to false
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //     setLoading(false);
    //   });
  }, []);
  // Empty dependency array ensures it runs only once when the component mounts

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json()) // Convert response to JSON
      .then((data) => {
        setData(data); // Update state with fetched data
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };
  

  return (
    <>
      
      <div>
        <h1>Fetched Data</h1>
        {/* <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul> */}
      </div>

     

      {loading ?<>
        <button onClick={() => getData()}>
        {" "}
        Fetch On Condition Button Click
      </button>
      <div>Loading...</div>
      </> :data && (
        <div>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </div>
      )}
    </>
  );
}

export default FetchData;
