import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUser } from "../../actions/users";
import { createSheet } from "../../actions/sheets";

const Homepage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const sheet_state = useSelector((state) => state.sheet.sheetId);
  console.log("sheet_state", sheet_state);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const createNewSheet = () => {
    dispatch(createSheet());
  };

  //   console.log("User", user);
  return (
    <div>
      Welcome To App Buddy
      <div>Homepage</div>
      {user ? (
        <div>
          <div>Welcome {user.displayName}</div>
        </div>
      ) : (
        <div>Please Login</div>
      )}
      {sheet_state ? (
        <div>Sheet Id: {sheet_state}</div>
      ) : (
        <button onClick={createNewSheet}>Create Google Sheet</button>
      )}
    </div>
  );
};

export default Homepage;
