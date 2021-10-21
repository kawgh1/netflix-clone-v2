import React from "react";
import {
    Inner,
    Item,
    Container,
    Pane,
    Title,
    SubTitle,
    Image,
} from "./styles/jumbotron";

// set default flex-direction to row
export default function Jumbotron({
    children,
    direction = "row",
    ...restProps
}) {
    return (
        <Item>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    );
}

// 'Container' here is pulled in from jumbrotron/styles/jumbotron.js
Jumbotron.Container = function JumbrotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbrotronPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbrotronTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbrotronSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

// Image has no children, just props
Jumbotron.Image = function JumbrotronImage({ ...restProps }) {
    return <Image {...restProps} />;
};
