import { useEffect,useState } from "react";
import axios from "axios"; // npm i axios
import './product.css';
import Productcard from './productcard.js';

function Newproduct(){
    const [data,setData] = useState([]) // const data=[]
    //const [cnt,setCnt] = useState(0) // const cnt=0
    const api = 'https://fakestoreapi.com/products';
    useEffect(()=>{
        getProductlist()
    },[])
    //way1 .without [] means multiple times
    //way2. [] means one time
    //way3. [cnt] means inside the function call based on "cnt" value 
    const getProductlist = () =>{
        axios.get(api).then((response) => {
            // console.log(response)
            setData(response.data);            
        });
    }
    return (
        <>
            <div className="products-list">
            {
                data.map((ele,i)=>{
                    return(
                        // <div className="card">
                        //     <img src={ele.image} />
                        //     <p>{ele.title}</p>
                        //     <p>{ele.price}</p>
                        //     <p>{ele.category}</p>
                        // </div> 
                        // <Productcard res={ele} key={ele.id} />                       
                        <Productcard {...ele} key={ele.id} />                       
                        // <Productcard image={ele.image} title={ele.title}  key={ele.id} />                       
                    )
                })
            }
            </div>
        </>
    )
}
export default Newproduct;