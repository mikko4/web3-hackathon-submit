import { React } from "react";

const SpendTokens = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.spendTokens(40);
    };

    return (
        <div className="form-center">
            <form onSubmit={handleSubmit} className="form-2">
                <button className="input-submit">Spend 40 $ECO</button>
            </form>
        </div>
    );
};

export default SpendTokens;
