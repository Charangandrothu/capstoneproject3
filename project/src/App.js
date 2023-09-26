import Home from './home';
import About from './about';
// import {trainee,a} from './person';
import './App.css';
import './product.css';
import Contact from './contact';
import Services from './services';
import Menu from './menu';
import Trainees from './trainees';
import List from './list';
import Events from './events';
import Events1 from './events1';
import Bgcolor from './bgcolor';
import Operations from './incdec';
import Slidder from './slidder';
import Hooks from './hooks';
import Task from './task';
import Form from './form';
import Form1 from './form1';
import Product1 from './product1';
import Newproduct from './newproduct';
import Calculator from './Calculator';
import AgeCalculator from './AgeCalculator';
import RootCalculator from './RootCalculator';
import PercentageCalculator from './PercentageCalculator';
import RandomNumberGenerator from './RandomNumberGenerator';
import SquareCalculator from './SquareCalculator';



import './App.css';








// import Student from './student'
import {BrowserRouter,Routes,Route}from'react-router-dom';



function App(){
  // console.log(trainee)
  // console.log(a)
  return(
    <div className="App">
     
       <BrowserRouter>
       <Menu/>
       
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services name="Charan"/>}/>
          <Route path="/trainees" element={<Trainees/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/events1" element={<Events1/>}/>
          <Route path="/bgcolor" element={<Bgcolor/>}/>
          <Route path="/operations" element={<Operations/>}/>
          <Route path="/slidder" element={<Slidder/>}/>
          <Route path="/hooks" element={<Hooks/>}/>
          <Route path="/task" element={<Task/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/form1" element={<Form1/>}/>
          <Route path="/product1" element={<Product1/>}/>
          <Route path="/newproduct" element={<Newproduct/>}/>
          <Route path="/Calculator" element={<Calculator/>}/>
          <Route path="/AgeCalculator" element={<AgeCalculator/>}/>
          <Route path="/RootCalculator" element={<RootCalculator/>}/>
          <Route path="/PercentageCalculator" element={<PercentageCalculator/>}/>
          <Route path="/RandomNumberGenerator" element={<RandomNumberGenerator/>}/>
          <Route path="/SquareCalculator" element={<SquareCalculator/>}/>
          {/* <Route path="/student" element={<Student name="charan"/>}/> */}
         
    
        </Routes>
       </BrowserRouter>
    </div>
  )
}
export default App;
