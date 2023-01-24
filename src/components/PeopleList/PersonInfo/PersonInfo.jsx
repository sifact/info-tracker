import React, { useContext, useEffect, useRef, useState } from "react";
import { dataContext } from "../../../Contexts/DataProvider";
import "./PersonInfo.css";

import Select from "react-select";
import { DateConverter } from "../../DateConverter/DateConverter";

const PersonInfo = ({ handleClick }) => {
    const { persons } = useContext(dataContext);
    const [currentId, setCurrentId] = useState("");
    const [selectedOption, setSelectedOption] = useState("All");
    const [date, setDate] = useState(null);

    const countMale = useRef(0);
    const countFemale = useRef(0);

    useEffect(() => {
        countMale.current = 0;
        countFemale.current = 0;
    }, [persons]);

    const handleChange = (selectedOption) => {
        if (selectedOption?.value === "All") {
            setDate(null);
        }
        setSelectedOption(selectedOption);
    };

    const handleDate = (e) => {
        setDate(e.target.value);
    };
    const options = [
        {
            label: "All",
            options: [{ value: "All", label: "All" }],
        },
        {
            label: "Gender",
            options: [
                { value: "Male", label: "Male" },
                { value: "Female", label: "Female" },
            ],
        },

        {
            label: "Location",
            options: [
                { value: "Chennai", label: "Chennai" },
                { value: "Bangalore", label: "Bangalore" },
                { value: "Hyderabad", label: "Hyderabad" },
            ],
        },
    ];

    return (
        <section className="box__container">
            <div className="select__container">
                <h1 className="bottom__margin">Events</h1>

                <Select
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                    styles={{ width: "4rem" }}
                />
                <input
                    className="date__picker"
                    placeholder="dd-mm-yyyy"
                    type="date"
                    name="date"
                    onChange={handleDate}
                />
                {console.log(countMale.current)}
            </div>
            {persons.map((person, index) => {
                if (
                    date
                        ? person.Date === DateConverter(date) &&
                          (person.Gender === selectedOption?.value) |
                              (selectedOption?.value === "All") |
                              (selectedOption === "All") |
                              (person.Location === selectedOption?.value)
                        : (person.Gender === selectedOption?.value) |
                          (selectedOption?.value === "All") |
                          (selectedOption === "All") |
                          (person.Location === selectedOption?.value)
                ) {
                    const { id, Name, Time, Date, Location, Gender } = person;

                    if (person.Gender === "Male") {
                        countMale.current += 1;
                    }
                    if (person.Gender === "Female") {
                        countFemale.current += 1;
                    }
                    return (
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
                    );
                }
            })}
        </section>
    );
};

export default PersonInfo;
