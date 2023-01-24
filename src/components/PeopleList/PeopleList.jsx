import React from "react";
import "./PeopleList.css";
import PersonInfo from "./PersonInfo/PersonInfo";

const PeopleList = ({ handleClick }) => {
    return (
        <section>
            <PersonInfo handleClick={handleClick} />
        </section>
    );
};

export default PeopleList;
