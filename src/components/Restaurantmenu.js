
import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../../utils/constant";
import rest from "../../utils/mockResto";





const Restaurantmenu = ()=>{

    const [resInfo,setresInfo] = useState(null);    

    const {resId} = useParams();
    //console.log(resId)

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        
        const response = await fetch(MENU_API_URL + resId +"&catalog_qa=undefined");
        //const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.50330&lng=80.64650&restaurantId=11110")
        //console.log(response)
        const json = await response.json()
        //console.log(json)
        // console.log(json);
        setresInfo(json.data);
    }
    //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards)
    //console.log(resInfo?.cards[0]?.card?.card?.info?.cuisines)

    // console.log(resInfo?.cards[2].groupedCard.cardGroupMap.RREGULAR.cards[1].card.
    //     card.itemCards);
   
    // if(resInfo.length===0) return <Shimmer/>

    //console.log(resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards);

     //const {name,cuisines} = resInfo?.cards[0]?.card?.card?.info;
    // console.log(name)

   
    //console.log(rest.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)
    const { itemCard } = rest?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards;

    console.log(itemCard);
    //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card.itemCards);
    //console.log(itemCards)
    // const itm = itemCards[1].card.card.itemCsards;


    // const {
    //     name,
    //     cuisines,
    //     costForTwoMessage,
    //   } =
    //   resInfo?.cards[0]?.card?.card?.info ||
    //   resInfo?.cards[1]?.card?.card?.info ||
    //   resInfo?.cards[2]?.card?.card?.info;

    return (
        <div>
            <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
            <h3>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(', ')}</h3>
            <h3>{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
           <h3>Menu</h3>
            {/* <ul>
                {itemCard.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} : {item.card.info.price/100} Rs </li>
                ) )}
            </ul> */}
        </div>
    )


}

export default Restaurantmenu;