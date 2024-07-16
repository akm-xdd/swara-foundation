import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <div style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center"
        }}>
            <div style={{
                maxWidth: "480px",
                padding: "1rem",
                margin: "auto",
            }}>
                <h1 className="text-lg md:text-xl font-medium font-ibm">
                    {" "}
                    <b className="text-3xl">Oops</b> page is not found !
                </h1>
                <p className="text-sm font-medium font-ibm">
                    You just hit a route that doesn't exist...
                </p>
                <Link
                    className="text-sm font-medium font-ibm text-main_primary"
                    to="/"
                >
                    Go back
                </Link>
            </div>
        </div>
    );
};