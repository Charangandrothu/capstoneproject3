function Events1(){
    function fun(msg){
        alert("clicked."+msg)
    }
    let name='charan';
    function getname(e,arg2){
        console.log(e.target.name + "value is :"+e.target.value);
    }
    return(
        <div>
            <h1>Input Events</h1>
            <button onClick={()=>fun(name)}>Click Here</button>
            <br/>
            <input type="text" name="firstname" 
            // onChange={getdata}
            onChange={(e)=>getname(e,"charan")}
            
            />
             
        </div>
    );
}   
export default Events1;