import React from "react";

export const PeopleListItem = ({chikis}) => {
    return (
        <div>
            <h3>{chikis.name}</h3>
            <p>Age: {chikis.age}</p>
            <p>Hair Color: {chikis.hairColor}</p>
        </div>
    );
}