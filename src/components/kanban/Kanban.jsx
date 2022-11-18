import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";
import { extend } from "@syncfusion/ej2-base";

const Kanban = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //     axios
  //       .get("http://localhost:8000/sheet/getAllData", {
  //         withCredentials: true,
  //       })
  //       .then((response) => response.json())
  //       .then((usefulData) => {
  //         setData(usefulData);
  //       })
  //       .catch((e) => {
  //         // console.error(`An error occurred: ${e}`);
  //       });
  // }, []);

  let data = new DataManager({
    url: "http://localhost:8000/sheet/getAllData",
    adaptor: new UrlAdaptor({ withCredentaials: true }),
    crossDomain: true,
    httpRequestSettings: [],
  });
  console.log(data);
  return (
    <KanbanComponent
      id="kanban"
      keyField="Status"
      dataSource={data}
      cardSettings={{ contentField: "Summary", headerField: "Id" }}
    >
      <ColumnsDirective>
        <ColumnDirective headerText="Applied" keyField="Open" />
        <ColumnDirective headerText="OA Received" keyField="InProgress" />
      </ColumnsDirective>
    </KanbanComponent>
  );
};

export default Kanban;
