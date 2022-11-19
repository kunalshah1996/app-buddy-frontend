import React, { useEffect, useState } from "react";
import axios from "axios";

const Mail = () => {
  const [mail, setMails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // get the data from the api
      const data = await axios.get(
        "https://appbuddy.onrender.com/mail/getMail",
        {
          withCredentials: true,
        }
      );

      // convert the data to json

      // set state with the result
      setMails(data.data);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [mail]);
  console.log(mail);
  return (
    <div>
      <div>Mail</div>
      <div>
        <p>{mail[0]}</p>
      </div>
    </div>
  );
};

export default Mail;
