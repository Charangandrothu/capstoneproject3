import React,{ useState } from "react";

function Form1(){
    const [data,setData] = useState({
        email :"",
        password : "",
        rollno : ""
    })
    function handleInputChange(event){
        // const name = event.target.name;
        // const value = event.target.value;
        const {name,value} = event.target;
        setData((previousProps) => ({
            ...previousProps,
            [name]:value
        }))
    }
    function handlesubmit(event){
        event.preventDefault();
        console.log(data);
    }
    return(
        <>
        <h2>This is Form1 Page</h2>
        <form onSubmit={handlesubmit}>
        <label>Email : </label>
        <input type="email" name="email" value={data.email} onChange={handleInputChange} />
        <label>Password : </label>
        <input type="password" name="password" value={data.password} onChange={handleInputChange} />
        <label>Rollno : </label>
        <input type="text" name="rollno" value={data.rollno} onChange={handleInputChange} /><br />
        <input type="submit" value="Submit" />


        </form>
        </>
    )
}
export default Form1;