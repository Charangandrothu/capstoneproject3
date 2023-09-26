import{useState} from "react"
function Task(){
    // let a=[10,20,30,40];
    const[arr,setArr]=useState(['apple','banana','papaya','grapes'])
    const[fruitname,setFruitname]=useState('')
    const[msg,setMsg]=useState('')
    const filterFruits =() => {
        // console.log(fruitname)
        // console.log(arr)
        let output =arr.filter((ele,i)=>{
            return(ele===fruitname)
        })
        if(output.length==0){
            setMsg('No fruit is there in the list')
            setArr(['apple','banana','papaya','apple'])
        }
       else{
        setMsg('')
        setArr(output);
       }


        //console.log(output)
    }
return(
    <div>
        <h1>React Hooks</h1>
        <input type="text" onChange={(e)=> setFruitname(e.target.value)} />
        <button onClick={filterFruits}>Find</button><br/>
        <p>{msg}</p>
        <ul style={{'display':'inline-block'}}>
            {
                arr.map((ele)=>{
                    return(<li>{ele}</li>)
                })
            }

        </ul>
    </div>
)
}
export default Task;