import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState(""); // Here setText is a function that will update the value of text
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  let n,m;
  if(text === ''){
            n=0;
  }
    else{
         n=text.trim().split(" ").length;
        }
  return (
    <>
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            <h3 className="my-2">Responsive Paragraph Word Counter</h3>
          </label>
          <textarea
            type="text"
            className="form-control my-0"
            value={text}
            onChange={handleonchange}
            placeholder="Enter you text here..."
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            rows="15"
            columns="3"
            
          />
        </div>
      </form>
      <h2 className="my-0 mb-2 ">
        <b>Words Count :&nbsp;{n}</b>
      </h2>
    </div>
     
    </>
  );
}
