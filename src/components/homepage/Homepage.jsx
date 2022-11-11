import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUser } from "../../actions/users";

const Homepage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, user]);

  //   console.log("User", user);
  return (
    <div>
      Welcome To App Buddy
      <div>Homepage</div>
      {user ? <div>Welcome {user.displayName}</div> : <div>Please Login</div>}
    </div>
  );
};

export default Homepage;
