import { GalleryData } from "./GalleryData";
import { useEffect, useRef, useState } from "react";
import './AdoteStyles.css';
import LinearProgress from '@mui/material/LinearProgress';
import { BrowserRouter as Router, Link, Navigate } from 'react-router-dom';


function Adote() {

  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(GalleryData);
    setCollection([... new Set(GalleryData.map((item) => item.titile))])
  }, [])

  const gallery_filter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.titile == itemData);
    setData(filterData);
  }


  return (
    <div className="App">
      <div className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li><button onClick={() => setData(GalleryData)}>Todos</button></li>
            {
              collection.map((item) => <li><button onClick={() => { gallery_filter(item) }}>{item}</button></li>)
            }
          </ul>
        </div>
        <div className="galleryContainer">
          {
            data.map((item) => <div key={item.id} className="galleryItem">
               <Link to='/adoteform'>
              <img src={item.image} /></Link>
            </div>)
          }
        </div>
        <LinearProgress color="success" />
      </div>
    </div>

  );
}

export default Adote;