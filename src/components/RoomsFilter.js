import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context'
import Title from './Title';

//get all unique values
const getAllUniqueValues = (items,value) => {
  return [...new Set(items.map(item => item[value]))];
}

export default function RoomsFilter({rooms}) {
  const context = useContext(RoomContext);
  const{
    handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
  } = context;
  let types = getAllUniqueValues(rooms,"type");
  types = ['all', ...types];
  types = types.map((item,index) => {
    return <option value={item} key={index}>{item}</option>
  })

  let capacities = getAllUniqueValues(rooms,"capacity");
  capacities = capacities.map((item,index) => {
      return <option value={item} key={index}>{item}</option>
  })


  return (
    <section className="filter-container">
      <Title title="Search Rooms"/>  
      <form className="filter-form">
        {/* Select type*/}
        <div className="form-group">  
        <label htmlFor="type">room type</label>
        <select name="type" id="type" value={type} 
        className="form-control" onChange={handleChange}>
          {types}
        </select>
        </div>
        {/* end select type */}        
        {/* Select type*/}
        <div className="form-group">  
        <label htmlFor="capacity">Guests</label>
        <select name="capacity" id="capacity" value={capacity}
        className="form-control" onChange={handleChange}>
          {capacities}
        </select>
        </div>
        {/* end select type */}
        {/* Room price */}
        <div className="form-group">
          <label htmlFor="price">Price: ${price}</label>
          <input type="range" name="price" min={minPrice} 
          max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
        </div>
        {/* End of room price */}
        {/* start of size */}
        <div className="form-group">
          <label htmlFor="size">Room Size</label>
          <div className="size-inputs">
            <input type="number" name="minSize" id="size"
            value={minSize} onChange={handleChange} className="size-input"/>
            <input type="number" name="maxSize" id="size"
            value={maxSize} onChange={handleChange} className="size-input"/>
          </div>
        </div>
        {/* end of size */}
        {/* start of extras */}
        <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  )
}
