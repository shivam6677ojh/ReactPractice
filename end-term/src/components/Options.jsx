import React, { useState } from "react";

const Options = () => {
    const [selectedOption, setSelectedOption] = useState("");

    return (
        <div>
            <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
            >
                <option value="">-- Select an option --</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
                <option value="Four">Four</option>
            </select>

            {selectedOption && (
                <p style={{ marginTop: "10px", fontWeight: "bold" }}>
                    Selected Option: {selectedOption}
                </p>
            )}
        </div>
    );
};

export default Options;
