import { React, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const InputCode = (props) => {
    const [inputText, setInputText] = useState({
        title: "",
    });

    const codes = new Map();
    codes.set("swag", 1);
    codes.set("money", 69);

    const onChange = (e) => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const input = inputText.title.trim();
        if (validateCode(input)) {
            props.rewardUser(codes.get(input));
            setInputText({
                title: "",
            });
        }
    };

    const validateCode = (s) => {
        return codes.has(s);
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                type="text"
                className="input-text"
                placeholder="Enter code..."
                value={inputText.title}
                name="title"
                onChange={onChange}
            />
            <button className="input-submit">
                <FaPlusCircle
                    style={{
                        color: "EB4511",
                        fontSize: "20px",
                        marginTop: "2px",
                    }}
                />
            </button>
        </form>
    );
};

export default InputCode;
