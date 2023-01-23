import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import PeopleDetails from "../components/PeopleDetails/PeopleDetails";
import PeopleList from "../components/PeopleList/PeopleList";
import Sidebar from "../components/Sidebar/Sidebar";
import "./Home.css";

const Home = () => {
    const [person, setPerson] = useState({});

    const handleClick = (e, person) => {
        setPerson(person);
    };
    return (
        <section>
            <Navbar />
            <div className="home">
                <Sidebar />
                <PeopleDetails person={person} />
                <PeopleList handleClick={handleClick} />
            </div>
        </section>
    );
};

export default Home;
