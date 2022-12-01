import React, { useEffect, useState } from "react";
import axios from "axios";

import { API } from "../../api/index";

const Mail = () => {
  const [mail, setMails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // get the data from the api
      const data = await API.get("mail/getMail");

      // convert the data to json

      // set state with the result
      setMails(data.data);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <div>
      <div>Mail</div>
      <div>
        <p>{mail.mail}</p>
      </div>
    </div>
  );
};

export default Mail;
