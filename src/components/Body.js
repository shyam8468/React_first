
import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useState, useEffect } from "react";

import Shimmer from "./Shimmer";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";


// this is normal javascript variable if we modify this modification not reflect in UI



const Body = ()=>{

  console.log("Body Rerender");

    // State Variable (this is used in fast DOM manipulation)
    const [listOfRestraunt,setListOfRestraunt] = useState([]);
    const [filteredRestra,setFilteredOfRestraunt] = useState([]);

    const [searchText,setsearchText] = useState([""]);


    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        try {
          const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

          //const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.50330&lng=80.64650&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          const json = await response.json();
          //console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
          
          setListOfRestraunt(
            //optinal chaining
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );

          setFilteredOfRestraunt(
            //optinal chaining
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
          console.log(listOfRestraunt);
          //setListOfRestraunt(restaurant);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };


      // shimmer UI
      // Conditional Rendering
      if(listOfRestraunt.length === 0){
        return (
            <Shimmer />
        )
      }
    

    return (
        <div className="body">
            <div className="filter">
              <div className="search">
                <input type="text" placeholder="Search..." className="search-box" 
                  value={searchText}
                  onChange={(e) => setsearchText(e.target.value)}
                  ></input>
                <button onClick={() =>{
                  // filter the restra card and update the UI
                  //console.log(listOfRestraunt);
                  
                  const filteredRestra = listOfRestraunt.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  console.log(filteredRestra);
                  if(filteredRestra.length >0)setFilteredOfRestraunt(filteredRestra);
                  //console.log(searchText);
                }}>Search</button>
              </div>
                <button className="filter-btn" onClick={() =>
                    {
                       const filtered = listOfRestraunt.filter((res) => res.info.avgRating > 4.4)
                        setFilteredOfRestraunt(filtered);
                    }
                    }>To Rated Restaurant</button>
            </div>
            <div className="res-container">
               {
                filteredRestra && filteredRestra.map((restaurant) => (
                    
                    <Link className="res-link"
                    key={restaurant.info.id} 
                    to={"/restaurants/"+restaurant.info.id}>
                      <RestaurantCard resData={restaurant}/>
                    </Link>
                )
               )};
                
            </div>
        </div>
    )
};

export default Body;