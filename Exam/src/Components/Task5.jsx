import React, { useState, useEffect } from "react";
import "../App.css"

const useCharacterCounter = (text, limit) => {
    const [remaining, setRemaining] = useState(limit);
    const [warning, setWarning] = useState(false);

    useEffect(() => {
        const charsLeft = limit - text.length;
        setRemaining(charsLeft);

        if (charsLeft <= 10) {
            setWarning(true);
        } else {
            setWarning(false);
        }
    }, [text, limit]);

    return { remaining, warning };
};


const CounterDisplay = ({ text, remaining, warning }) => {
    return (
        <div className="counter-info">
            <p>Characters: {text.length}</p>
            <p>Remaining: {remaining}</p>

            {warning && remaining >= 0 && (
                <p className="warning">⚠ Only {remaining} characters left!</p>
            )}
        </div>
    );
};


const Task5 = () => {
    const limit = 50;
    const [text, setText] = useState("");

    const { remaining, warning } = useCharacterCounter(text, limit);

    const handleChange = (e) => {
        if (e.target.value.length <= limit) {
            setText(e.target.value);
        }
    };

    return (
        <div className="container">
            <h2>Live Character Counter</h2>

            <textarea
                value={text}
                onChange={handleChange}
                placeholder="Type your message..."
            />

            <CounterDisplay
                text={text}
                remaining={remaining}
                warning={warning}
            />
        </div>
    );
};

export default Task5;
