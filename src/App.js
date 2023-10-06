// import Transferdata from './components/Transferdata';
import Login from './components/Login/Login';
// import Course from './components/Course/Course';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logindata from './components/Login/Logindata';
import Course from './components/Course/Course';
//import Course from './components/Course/Course';
//import Save from './components/Course/Save';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path={'/'} element={<Login/>}></Route>
      <Route path={'/Ldata'} element={<Logindata/>}></Route>
      <Route path={'/course'} element={<Course/>}></Route>
      </Routes>
      </BrowserRouter>
     
      {/* <Transferdata username="ABC"  */}
      {/* password="abc" usertype="admin"/> */}
      {/* <Course/> */}
      
    </div>
  );
}

export default App;
