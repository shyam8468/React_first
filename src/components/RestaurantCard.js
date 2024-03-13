
import {CDN_URL} from "../../utils/constant"

const styleCard = {
    backgroundColor :"#f0f0f0"
}



const RestaurantCard = (props)=>{
    const {resData} = props;

    const { cloudinaryImageId,
            name,
            cuisines,
            avgRating,
            costForTwo,
            sla} 
                = resData.info
   
    return (
        <div className="res-card" style={styleCard}>
            <img
            className="res-logo"
            alt="res-logo"
            src={CDN_URL + 
            cloudinaryImageId}
            />
            <h4>{name}</h4>
            <h6>{cuisines.join(", ")} </h6>
            <h6>{avgRating} ⭐</h6>
            <h6>{costForTwo}</h6>
            <h6>{sla.deliveryTime} minutes</h6>
        </div>
    );
};


export default RestaurantCard;