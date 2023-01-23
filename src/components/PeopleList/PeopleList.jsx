import React from "react";
import "./PeopleList.css";
import PersonInfo from "./PersonInfo/PersonInfo";

const PeopleList = ({ handleClick }) => {
    return (
        <section>
            <h1>Event</h1>
            <PersonInfo handleClick={handleClick} />
        </section>
    );
};

export default PeopleList;
