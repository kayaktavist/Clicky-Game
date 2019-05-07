import React from "react"



function Tile(props) {
    return (
      <div role="img" aria-label="click item" className="click-item">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          
        </div>
        {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
          𝘅
        </span> */}
      </div>
    );
  }
  

  

export default Tile