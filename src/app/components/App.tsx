import * as React from "react";
import "../styles/ui.css";
import * as data from "../testDataAmsterdam.json";

declare function require(path: string): any;

const App = ({}) => {
    const items = data.response.docs;

    const handleSubmit = () => {
        parent.postMessage(
            {
                pluginMessage: {
                    type: "data",
                    items: JSON.stringify(items),
                },
            },
            "*"
        );
    };

    return (
        <div>
            <h2>Funda</h2>
            <button id="create" onClick={handleSubmit}>
                Create
            </button>
        </div>
    );
};

export default App;
