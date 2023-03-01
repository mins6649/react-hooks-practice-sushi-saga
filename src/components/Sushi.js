import React, {useState} from "react";

function Sushi({name, img, price, handleClick}) {
  const [isEaten, setIsEaten] = useState(false)
  function whenClicked(){
    setIsEaten(true)
    handleClick()
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={whenClicked}>
        {isEaten ? null : (
          <img
            src={img}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
