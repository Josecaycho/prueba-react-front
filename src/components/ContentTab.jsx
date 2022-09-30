import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux"

import {
  dataUserCoberturas
} from "../slices/userSlice"

const ContentValueTab = ({ contentTab }) => {
  const dispatch = useDispatch()
  const [stateTab, setStateTab] = useState(contentTab);
  const defaultTab = 0;

  const changeValueCobertura = (value) => {
    let valueArr = stateTab
    for (let i = 0; i < valueArr.length; i++) {
      if(valueArr[i].id === value.id){
        valueArr[i].state = !value.state
      }
    }
    
    setStateTab(valueArr)

    let json = {
      content: valueArr,
      id: value.id
    }

    dispatch(dataUserCoberturas(json));
  }

  return (
    <Accordion defaultActiveKey={[defaultTab]} alwaysOpen>
      {stateTab.map((item, i) => (
        <Accordion.Item key={i} eventKey={i}>
          <Accordion.Header>
            <div className="accordion-button__content">
              <p>{item.title}</p>
              <div className="accordion-button__content__btn"  onClick={() => changeValueCobertura(item)}>
                <div className="accordion-button__content__btn__icon"> { item.state ? '-' : '+' } </div>
                <span> { item.state ? 'QUITAR' : 'AGREGAR' } </span>
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>{item.text}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default ContentValueTab;
