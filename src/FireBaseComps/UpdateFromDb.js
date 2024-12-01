import React, { useEffect, useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, get, set } from "firebase/database";
import { TextField, Tooltip } from "@mui/material";
import MyButton from "../MaterialUi/Buttons";
export default function UpdateFromDb() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "/users");
    const snapShotOfData = await get(dbRef);
    //here we will try to extract uniquie id of each record and add it to new object for identification
    if (snapShotOfData.exists()) {
      const actualData = snapShotOfData.val();
      const allKeys = Object.keys(snapShotOfData.val());
      const temporaryStructuredDataArray = allKeys.map((key) => {
        const userId = key;
        return { ...actualData[key], userId };
      });
      console.log(temporaryStructuredDataArray);
      setUsers(temporaryStructuredDataArray);
      setLoading(false);
    } else {
      alert("error on updating users data");
    }
  };

  const ListComp = ({ item }) => {
    const [firstName, setFirstName] = useState(item.firstName);
    const [lastName, setLastName] = useState(item.lastName);
    const changeValue = () => {
      const userId = item.userId;
      const db = getDatabase(app);
      //creating subfolder in firebase database
      const newDocReference = ref(db, "/users/" + userId);
      set(newDocReference, {
        firstName: firstName,
        lastName: lastName,
      })
        .then(() => alert("data updated sucessfully"))
        .catch((error) => alert("error", error.message));
    };
    const Comp = () => {
      return <i class="fa fa-check" title="Save Changes"></i>;
    };
    return (
      <>
        {" "}
        {/* <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        /> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "14px",
          }}
        >
          <TextField
            id="standard-helperText"
            variant="standard"
            label="First Name"
            defaultValue={firstName}
            // helperText="Enter New Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <TextField
            id="standard-helperText"
            variant="standard"
            label="Last Name"
            defaultValue={lastName}
            // helperText="Enter New Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Tooltip title="Save changes">
            <MyButton
              action={changeValue}
              text={""}
              color="secondary"
              size="large"
              Comp={Comp}
            ></MyButton>
          </Tooltip>
        </div>
      </>
    );
  };
  return (
    <div>
      <b>Update User Data</b>
      {loading ? (
        <>Loading user data</>
      ) : (
        <div>
          {users.map((item) => (
            <ListComp item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
