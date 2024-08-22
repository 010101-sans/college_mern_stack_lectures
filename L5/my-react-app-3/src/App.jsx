// Version 1

import React from "react";

const App = () => {
    const studentName = "Sanskar Suryawanshi";
    const collegeName = "DIEMS";

    return (
        <>
            <h1>
                <span style={{ color: "green" }}>{studentName}</span>
                {" is studying in "}
                <span style={{ color: "red" }}>{collegeName}</span>
            </h1>
        </>
    );
};

export default App;

/* 

version 2

import React, { useState } from "react";

const App = () => {
    
    const [studentName, setStudentName] = useState("");
    const [collegeName, setCollegeName] = useState("");

    return (
        <>
            <input
                type="text"
                placeholder="Enter student name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
            />
            <br />

            <input
                type="text"
                placeholder="Enter college name"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
            />
            <br />

            <button
                onClick={() => {
                    setStudentName("");
                    setCollegeName("");
                }}
            >
                Clear
            </button>
            <br />
            <br />

            {studentName && collegeName && (
                <h1>
                    <span style={{ color: "green" }}>{studentName}</span>
                    {" is studying in "}
                    <span style={{ color: "red" }}>{collegeName}</span>
                </h1>
            )}

        </>
    );
};

export default App;
 */
