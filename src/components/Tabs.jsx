import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import ContentTab from "./ContentTab";

const TabsInterface = ({ allTabs }) => {
  const [stateTabs] = useState(allTabs)

  return (
    <Tabs
      defaultActiveKey="protegeauto"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      {stateTabs.map((item, i) => (
        <Tab key={i} eventKey={item.key} title={item.title}>
          <ContentTab contentTab={item.content} />
        </Tab>
      ))}
    </Tabs>
  );
};

export default TabsInterface;
