import React from "react";


export default () => (
    <div>
        <h1>
            Contact Us 
        </h1>
        <span>
        <form>
            <label>
                Enter Your Email:
                <input name="email" defaultValue="your@email.com" />
            </label>
            <br></br>
            <button type="submit">Submit email</button>
        </form>
        </span>
    </div>
)