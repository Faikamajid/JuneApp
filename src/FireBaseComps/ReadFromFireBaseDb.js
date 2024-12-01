import React, { useEffect, useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, get, ref } from "firebase/database";
import TableComp from "../MaterialUi/TableComponet";

export default function ReadFromFireBaseDb() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    //calss it when components Mounts (initial load)
    fetchData()
  },[])
  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "/users");
    const snapShotOfData = await get(dbRef);
    if (snapShotOfData.exists()) {
      setLoading(false);
      setUsers(Object.values(snapShotOfData.val()));
    } else {
      alert("error");
    }
  };
  return (
    <div>
      {/* dispalying data on button  */}
      {/* <button onClick={fetchData}>Read User Data</button> */}
      {loading ? (
        <>Loading user data</>
      ) : (
        <div>
          {/* show data here */}
          {/* {users.map((item)=>   
            <li> First Name:{item.firstName} 
            Last Name:{item.lastName}</li>    
            )} */}
          <TableComp rows={users} />
        </div>
      )}
    </div>
  );
}
