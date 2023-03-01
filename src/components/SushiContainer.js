import React, { useState } from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({sushiList}) {

  function handleClick(){
    console.log('clicked!')
  }
  const renderSushiList = sushiList.map((sushi)=>{
    return <Sushi key={sushi.id} name={sushi.name} img={sushi.img_url} price={sushi.price} handleClick={handleClick}/>
  })
  //only display 4, i want a variable that is initialized as (0,4) and everytime button is clicked, we add 4 to the variable

  const [index, setIndex] = useState(0)
  let sushiDisplay = renderSushiList.slice(index, index+4)
  function handleMoreSushi(){
    setIndex((prev)=> prev + 4)
  }

  return (
    <div className="belt">
      {sushiDisplay}
      <MoreButton handleMoreSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
