import React, { useState } from "react";
import PastConvo from "./conversation-list";
import "../App.css";

function Conversation() {
  // Users questions
  const [convoList, setConvoList] = useState([]);
  // Omni's answers
  const [answer, setAnswer] = useState([]); 

  function fetchData(input) {
    var question = {question: input}
    console.log("In fetchData")
    fetch('http://localhost:5000/chatbot', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({question})
    })
    .then(response => response.json())
    .then(data => setAnswer([...answer, data.answer]))
    .catch(error => console.error(error))
  }
  
  function handleInput(e) {
    e.preventDefault();
    const input = document.getElementById("convo-input").value;
    document.getElementById("convo-input").value = "";
    const id = convoList.length;
    const tempJSON = { text: input, id: id };
    setConvoList([...convoList, tempJSON]);
    fetchData(input);
  }

  return (
    <>
      <div id="previous-convo-container">
        {convoList.map((element, index) => (
          <div id="previous-convo" key={element.id}>
            <p id="question">{element.text}</p>
            {answer[index] && <p style={{color:"green"}} id="answer">{answer[index]}</p>}
          </div>
        ))}
      </div>
      <h2>Omni</h2>
      <form id="convo-form" onSubmit={handleInput}>
        <div>
          <input autoFocus id="convo-input" type="text"></input>
          <button id="send" type="submit" accessKey="Enter" style={{ width: "0rem", height: "0rem", visibility: "hidden" }}></button>
        </div>
      </form>
    </>
  );
}

export default Conversation;
