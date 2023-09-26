import Student from './student'
function List(){
        let students=[{
            name:'Charan-',
            rollno:'034'
        },{
            name:'Nag-',
            rollno:'108'
        },
        {
            name:'mahaveer-',
            rollno:'056'
        }
    ]
  
    return(
        <table align='center'>
        <div >
            <ul>{
                students.map((ele,i,arr)=>{
                    return(<li><Student name={ele.name} rollno={ele.rollno}/></li>)
                })
            }
            </ul>
        </div>
        </table>
    )
}
export default List