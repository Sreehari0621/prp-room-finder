import { useState } from "react";
import Header from "./Header";
import Map from "./Map";
import Chatbot from "./Chatbot";

function App() {
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (roomNumber) => {
    if (!roomNumber) return;

    const roomStr = roomNumber.toString();

    const floor = roomStr[0]; // optional for later

    const roomIndex = parseInt(roomStr.slice(1));

    if (roomIndex < 1 || roomIndex > 70) {
      setSelectedBlock(null);
      return null;
    }

    const blocks = ["A", "B", "C", "D", "E"];

    const blockIndex = Math.floor((roomIndex - 1) / 14);

    const block = blocks[blockIndex];

    setSelectedBlock(block);
    setHasSearched(true);
    //setShowMain(true);

    return { block, floor };
  };

  return (
    <div className="app">
      <Header />

      <div className="main">
        <Chatbot onSearch={handleSearch} />
        <Map 
          selectedBlock={selectedBlock} 
          hasSearched={hasSearched} 
        />
      </div>
    </div>
  );
}

export default App;