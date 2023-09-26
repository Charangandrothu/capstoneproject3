import React,{useState} from "react";
function Form(){
    const  [rollno,setRollno]=useState('');
    const [name,setName] =useState('');
    function handleSubmit(event){
        event.preventDefault();
        console.log("My roll no. is", rollno);
        console.log("Name is", name);
    }
    return(
        <>
        <h1>This is Form page</h1>
        <form onSubmit={handleSubmit}>
            <label>Roll no.</label>
            <input type="text" name="rollno" onChange={(e)=> setRollno(e.target.value)}/>
            <label>Name</label>
            <input type="text" name="name" onChange={(e)=> setName(e.target.value)}/>
            <br/>
            <input type="submit" value="submit" />
        </form>
        
        

        </>
    )
}
export default Form;