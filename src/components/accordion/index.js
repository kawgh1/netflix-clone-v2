import React, { useState, useContext, createContext } from "react";
import {
    Container,
    Frame,
    Title,
    Item,
    Inner,
    Header,
    Body,
} from "./styles/accordion";

// how do we pass State between each subcomponent?
const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
};

// Item is where State is passed, giving user ability to toggle
// Wrapping each <Item> in a <ToggleContext.Provider> tells Context
// hey, I want you to share a single state across each of the Item
// that will be passed down to Item.Header and Item.Body
// and this is how the toggle effect is handled
Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false);

    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);

    return (
        <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
            {children}
            {toggleShow ? (
                <img src="/images/icons/close-slim.png" alt="Close" />
            ) : (
                <img src="/images/icons/add.png" alt="Open" />
            )}
        </Header>
    );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext);

    /* return toggleShow ? <Body {...restProps}>{children}</Body> : null; */

    return (
        <Body className={toggleShow ? "open" : "closed"} {...restProps}>
            <span>{children}</span>
        </Body>
    );
};
