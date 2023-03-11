import React from "react";
import GalleryItem from './GalleryItem';
import './GalleryList.css';
import arrow from '../../image/creteChallenge/arrow.png';


const GalleryList = ({datas, currItem, onView}) => {
  const {image, title} = currItem;

  return (
    <div className="view">
      <img className="viewImg" src={image} alt={title}/>
      <div class="selectBox">
        <select name="image">
          {
            datas.map(item => 
            <GalleryItem key={item.id} item={item} onView={onView}/>)
          }
        </select>
        <span class="icoArrow"><img src={arrow} alt="icon" /></span>
      </div>
    </div>
  );
};

export default GalleryList;