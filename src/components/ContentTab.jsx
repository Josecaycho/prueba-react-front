import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch , useSelector} from "react-redux"

import {
  dataUserCoberturas
} from "../slices/userSlice"

const ContentValueTab = ({ contentTab }) => {
  const dispatch = useDispatch()
  // const [stateTab, setStateTab] = useState(contentTab);
  const defaultTab = 0;
  const coberturas = useSelector((state) => state.user);

  const changeValueCobertura = (value) => {
    let json = {
      id: value
    }

    dispatch(dataUserCoberturas(json));
  }

  return (
    <Accordion defaultActiveKey={[defaultTab]} alwaysOpen>
      {coberturas.coberturas.map((item, i) => (
        <Accordion.Item key={i} eventKey={i}>
          <Accordion.Header>
            <div className="accordion-button__content">
              <p>{item.title}</p>
              <div className="accordion-button__content__btn"  onClick={() => changeValueCobertura(item.id)}>
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
