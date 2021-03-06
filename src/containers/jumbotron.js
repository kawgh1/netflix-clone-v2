import React from "react";
import jumboData from "../fixtures/jumbo.json";
import { Jumbotron } from "../components";

export function JumbotronContainer() {
    return (
        <Jumbotron.Container>
            {jumboData.map((item) => (
                <Jumbotron key={item.id} direction={item.direction}>
                    {/* <p>{item.title}</p>
                    <p>{item.subTitle}</p>
                    <p>{item.image}</p>
                    <p>{item.alt}</p> */}
                    {/* Left */}
                    <Jumbotron.Pane>
                        <Jumbotron.Title>{item.title}</Jumbotron.Title>
                        <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                    </Jumbotron.Pane>
                    {/* Right */}
                    <Jumbotron.Pane>
                        <Jumbotron.Image src={item.image} alt={item.alt} />
                    </Jumbotron.Pane>
                </Jumbotron>
            ))}
        </Jumbotron.Container>
    );
}
