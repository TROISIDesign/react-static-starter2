import React from "react";


export default () => (
    <div>
        <h1>
            Contact Us 
        </h1>
        <span>
        <form>
            <label>
                <p>Enter Your Email: </p> 
                <input name="email" defaultValue="your@email.com" />
            </label>
            <br></br>
            <label>
            Type your message:
      <textarea name="postContent" rows={4} cols={40} />
        </label>
            <button className="button1" type="submit">Submit</button>
        </form>
        </span>
    </div>
)