import React from "react";
import { PeopleListItem } from "./PeopleListItem";

export const PeopleList = ({chikis}) => {
    return (
        <>
        {chikis.map(chikis => <PeopleListItem chikis={chikis} key={chikis.name} />)}
        </>
    );
}