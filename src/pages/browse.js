import React from "react";
import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks";
import { selectionFilter } from "../utils";

// useContent is a custom hook under /hooks
// it queries firebase for either 'series' or 'films' collections
// and returns all the data for each document (item) in the collection
export default function Browse() {
    // we need the series and the films

    // we need slides

    // pass it to the browse container
    const { series } = useContent("series");
    const { films } = useContent("films");
    console.log("series from firebase = ", series);
    console.log("films from firebase= ", films);
    const slides = selectionFilter({ series, films });

    return <BrowseContainer slides={slides} />;
}
