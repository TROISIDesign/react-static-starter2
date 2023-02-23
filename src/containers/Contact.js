import React from "react";
import './style.css'

export default () => (
    <div>
        <h1>
            Contact Us 
        </h1>
        <form>
            <label>
                <input type="text" name="email@address.com" />
            </label>
            <input type="submit" name="Send" />
        </form>
    </div>
)