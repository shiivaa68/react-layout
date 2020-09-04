import React, { useState } from 'react';
import {
  StyledDivParent,
  StyledDivChild,
  Details,
  Img,
  StyledButton,
  H,
  M
} from './styles';

function Item({ item, icon, openedPanel, toggle }) {
  return <>
    <StyledButton open={openedPanel === item.id} onClick={() => toggle(item.id)}>
      {item.header}
      <Img src={require(`../../../images/${icon}`)} />
    </StyledButton>
    <Details open={openedPanel === item.id}>
      {item.body}
    </Details>
  </>
}

function Header({h}) {
  return <>
    <H>{h}</H>
    <hr></hr>
  </>
}

function Message({m}) {
  return <>
    <M>{m}</M>
  </>
}

function ExpandablePanel({header ,data, message}) {
  const [openedPanel, setOpenedPanel] = useState(-1);
  function toggle(number) {
    if (openedPanel !== number) return setOpenedPanel(number);
    setOpenedPanel(-1);
  }

  function getIconName(id) {
    if (id === openedPanel) return 'arrow-down.svg';
    return 'arrow-left.svg';
  }

  return <StyledDivParent>
           <StyledDivChild>
             {
               header && <Header h={header}/>
             }
             {
               message && <Message m={message}/>
             }
           {
          data && data.map((item, i) => <Item key={i}
            item={item} openedPanel={openedPanel} toggle={toggle}
                        icon={getIconName(item.id)}>
                      </Item>)
        }
      </StyledDivChild>
    </StyledDivParent>
}

ExpandablePanel.propTypes = {};

export default ExpandablePanel;
