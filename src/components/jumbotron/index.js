import React from "react";
import { Inner, Container } from "./styles/jumbotron";

// set default flex-direction to row
export default function Jumbotron({
    children,
    direction = "row",
    ...restProps
}) {
    return (
        <Inner direction={direction}>
            <p>Hello again</p>
        </Inner>
    );
}

// 'Container' here is pulled in from jumbrotron/styles/jumbotron.js
Jumbotron.Container = function JumbrotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};
