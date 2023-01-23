import { set } from "firebase/database";
import React, { useContext, useState } from "react";
import { dataContext } from "../../../Contexts/DataProvider";
import "./PersonInfo.css";

const PersonInfo = ({ handleClick }) => {
    const { persons } = useContext(dataContext);
    const [currentId, setCurrentId] = useState("");

    // const handleClick = () => {};
    return (
        <section className="box__container">
            {persons.map((person) => {
                const { id, Name, Time, Date, Location } = person;
                return (
                    <>
                        <div
                            className={`${
                                id === currentId ? "active" : ""
                            } box`}
                            key={id}
                            onClick={(e) => {
                                setCurrentId(id);
                                handleClick(e, person);
                            }}
                        >
                            <div className="info__wrapper">
                                <div>
                                    <span>{id}:</span> <span>{Location}</span>
                                </div>
                                <div>
                                    <span>{Date}</span> <span>{Time}</span>
                                </div>
                            </div>
                            <p className="p__bottom">Person Detected</p>
                        </div>

                        <div className="content"></div>
                    </>
                );
            })}
        </section>
    );
};

export default PersonInfo;
