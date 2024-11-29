import React, { useEffect, useState } from "react";

export default function CallData() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [filterValue, setFilterval] = useState("");
  const [filrVal, setFiltVal] = useState("");

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  };
  const searchItem = (filterValue) => {
    //
  };
  return (
    <div>
      {/* https://fakestoreapi.com/products */}
      {isLoading ? <>Loading data ...</> : <>our data</>}

      {console.log(data)}
      <input
        type="text"
        onChange={(e) => {
          e.preventDefault();
          setFiltVal(e.target.value);
        }}
      />
      <table>
        {data &&
          data
            .filter((d) => {
              return d.title.includes(filrVal);
            })
            .map((field) => {
              return (
                <>
                  <tr>
                    <th> {field.title}</th>
                    <th> {field.description}</th>
                  </tr> 
                  <tr></tr>
                </>
              );
            })}
      </table>
      {/* header : title , descrp,count  */}
    </div>
  );
}
