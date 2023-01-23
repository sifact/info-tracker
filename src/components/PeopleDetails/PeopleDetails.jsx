import React from "react";
import "./PeopleDetails.css";
import { listAll, getDownloadURL, getMetadata } from "firebase/storage";
import { storage } from "../../firebase/firebase.config";
import { ref } from "firebase/storage";
import { useState } from "react";
import { useEffect } from "react";

const PeopleDetails = ({ person }) => {
    const { Name, Location, Gender, Time, Date, id } = person;

    const [imageData, setImageData] = useState(
        localStorage.getItem("url") | ""
    );
    // console.log(imageData);
    const storageRef = ref(storage);

    useEffect(() => {
        // const imgObject = {}
        listAll(storageRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    const pathName = item._location.path_;
                    const imageName = pathName.slice(0, -4);

                    if (Name === imageName) {
                        setImageData(url);
                        localStorage.setItem("url", url);
                    }
                });
            });
        });
    }, [Name]);
    return (
        <section className="person__details">
            <div className="img">
                <h1 className="bottom__space">{Gender}</h1>
                <img src={imageData} alt="" />
            </div>

            <div className="content">
                <h1>{id}</h1>
                <h3 className="bottom__space">Person Detected</h3>

                <p>Name: {Name}</p>
                <p>Location: {Location}</p>
                <p>Date: {Date}</p>
                <p className="bottom__space">Time: {Time}</p>

                <p>Description</p>
                <p>
                    {Name} detected at <br /> {Location} on {Date}
                </p>
            </div>
        </section>
    );
};

export default PeopleDetails;
