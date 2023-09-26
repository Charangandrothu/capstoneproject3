import Student from './student'
//parent Component
function Trainees(){
    let students=[{
        name:'Charan',
        rollno:'034'
    },{
        name:'Nag',
        rollno:'108'
    },
    {
        name:'mahaveer',
        rollno:'056'
    }
];
    return(
        <div>
            <h1>Trainees List</h1>
            <table></table>
            {/* <Student name="charan"rollno="034"/> */}
            <table border={2} cellSpacing={0} align='center' width={'500px'}>
            <tr>
                    <th>S no:</th>
                    <th>Student Name:</th>
                    <th>Student Roll no:</th>
             </tr>
             

            {
                students.map((ele,i,arr)=>{
                    return(<Student index ={i+1} name={ele.name} rollno={ele.rollno}/>)
                })
            }
            
            </table>
        </div>
    )
}
export default Trainees