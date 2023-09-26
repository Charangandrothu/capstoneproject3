import{useState} from "react"
function Hooks(){
    // let cnt=0
    // let cnt=useState(0)
    const[cnt,setCnt]=useState(0) //const cnt=0 click function setcnt(0)
    const[name,setName]=useState('')//const name='',functionname setName
    // const[cnt,setCnt]=useState(10) //const cnt=10 functionname setCnt(10)
    // const getcount =(count) =>{
    //     cnt=++count
    //     console.log(cnt)
    // }
    return(
        <diV>
            <h1>React hooks</h1>
            <p>Count is {cnt}</p>
            {/* <button onClick={()=> getcount(cnt)}>Count</button> */}
            <button onClick={()=>setCnt(cnt+1)}>Count</button>
            <br/>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            <h2>Name is :{name}</h2>
        </diV>
    )
}
export default Hooks;