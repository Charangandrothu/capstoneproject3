function Events(){
    //let arr=[10,20,30];
    let trainees=[{
        name:"charan",
        rollno:300
    },{
        name:"Nag",
        rollno:400
    }
]
    function getdata(res){
        // alert("My name is : "+name);
        // console.log(res);
        res.map((ele,i,arr)=>{
        document.write(i+1 + ele.name +"    "+ ele.rollno+"<br/> ")       })
        
    }
    return(
        <div>
            <h1>Events</h1>
            {/* <button onClick={() => getdata("charan Gandrothu")}>Click Here</button> */}
            <button onClick={()=> getdata(trainees)}>Click here</button>
        </div>
    );
}
 export default Events;