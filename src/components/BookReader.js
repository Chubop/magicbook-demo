import Carousel from "react-material-ui-carousel"
import Item from "./Item"
import items from '../json/items.json'

export default function BookReader(props){
    console.log(items);
    return(
        <Carousel autoPlay="false" swipe sx={{height: '100%'}}>
            {
                items.map((item) => <Item key={item.id} item={item} />)
            }
        </Carousel>
    )
}