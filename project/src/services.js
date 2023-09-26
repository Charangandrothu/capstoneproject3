// function Services(){
//     let sd={
//         background:'darkcyan',
//         color:'white',
//         fontSize:'20px'//font-size is not work
//     }
//     return(
//         <div style={sd}>
//         <h1>This is Services page</h1>
//         </div>
//     )
// }
// export default Services

import React,{Component} from 'react'
class Services extends Component{
    render(){
        return(
            <div>
                <h1>This is a Service page with Class {this.props.name}</h1>
            </div>
        )
    }
}
export default Services