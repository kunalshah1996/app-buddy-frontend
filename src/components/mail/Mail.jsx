import React, { useEffect, useState } from "react";
import axios from "axios";

const Mail = () => {
  const [mail, setMails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // get the data from the api
      const data = await axios.get("http://localhost:8000/mail/getMail", {
        withCredentials: true,
      });
      console.log(data);
      // convert the data to json
      //   const json = await data.json();

      // set state with the result
      //   setMails(json);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <div>
      <div>Mail</div>
    </div>
  );
};

export default Mail;
