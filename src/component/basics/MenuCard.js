import React from 'react';

const MenuCard = ({ menuData }) => {
  // console.log(menuData.id);
const myStyle= {color:"red"} //created object
  return (
    <>
    <section className='main-card--cointainer'>
      { menuData.map((currentEle) => {
        const { id, category, name, description, image} = currentEle;
        return(
          <>
      <div className="card-container" key={id}>
      <div className="card">
      <div className='card-body '>
      <span className='card-number card-circle subtle'>{id}</span>
      <span className='card-author subtle' style={myStyle}>{category}</span>
      <h2 className='card-title'>{name}</h2>
      <span className='card-description subtle'>{description}</span>
      <div className='card-read '>Read</div>
      </div>
    <img src ={image} alt="image" className='card-media'/>
    <span className='card-tag subtle'>Order Now</span>
    </div>
    </div> 
    </>

        )

      })}
      </section>

    </>
  )
}

export default MenuCard
