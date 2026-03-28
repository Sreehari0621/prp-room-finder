
function Map({ selectedBlock, hasSearched }) {

  if (!hasSearched) {
    return (
      <div className="map-container">
        <img src="/Building.jpeg" className="map-image" />
      </div>
    );
  }

  return (
    <div className="map-container">

      <div className="map">

        {/*Middle Row*/}
        <div className="row middle">
          
          <div className={`block ${selectedBlock === "B" ? "active" : ""}`}>
            B
          </div>

          {/* C BLOCK (special) */}
          <div className={`block c-block ${selectedBlock === "C" ? "active" : ""}`}>
            <div className="wing">Left</div>
            <div className="center">C</div>
            <div className="wing">Right</div>
          </div>

          <div className={`block ${selectedBlock === "D" ? "active" : ""}`}>
            D
          </div>

        </div>

        {/* Top Row */}
        <div className="row top">
          <div className={`block long ${selectedBlock === "A" ? "active" : ""}`}>
            A
          </div>

          <div className={`block long ${selectedBlock === "E" ? "active" : ""}`}>
            E
          </div>
        </div>

        

      </div>

    </div>
  );
}

export default Map;