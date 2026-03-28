import { useState } from "react";

function Chatbot({ onSearch }) {
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
	  const result = onSearch(room);

	  if (result) {
	    setMessages([
	      ...messages,
	      `Room ${room} is in Block ${result.block}, Floor ${result.floor}`
	    ]);
	  }

	  setRoom("");
	};

  return (
    <div className="chatbot">
      	<h3 className="chatbot-header">Chatbot</h3>

      	<div className="chat-area">
			{messages.map((msg, index) => (
				<p key={index}>{msg}</p>
			))}
    	</div>


      	<div className="input-area">
      		<input
		        type="number"
		        value={room}
		        onChange={(e) => setRoom(e.target.value)}
		        placeholder="Enter room"
      		/>

      		<button onClick={handleSend}>Search</button>
    	</div>
    </div>
  );
}

export default Chatbot;