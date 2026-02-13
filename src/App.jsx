import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NetflixHome } from './components/NetflixHome.jsx'
import { NetflixMovie } from './components/NetflixMovie.jsx'
import { NetflixShows } from './components/NetflixShows.jsx'
import { Navbar } from './components/Navbar.jsx'  
import { HomeComponent } from './components/HomeComponent.jsx'
import { NetflixAccount } from './components/NetflixAccount.jsx' 
import { NetflixSports } from './components/NetflixSports.jsx'
import { Mapdemo6 } from './components/Mapdemo6.jsx'
import { ErrorNotfound } from './components/ErrorNotfound.jsx'
import { Watch } from './components/Watch.jsx'
import { TeamDetail } from './components/TeamDetail.jsx'
import { Functiondemo } from './components/Functiondemo.jsx'
import { UseStatedemo1 } from './components/UseStatedemo1.jsx'
import { UseStatedemo2 } from './components/UseStatedemo2.jsx'
import { UseStatedemo3 } from './components/UseStatedemo3.jsx'
import { Employees } from './components/Employees.jsx'
import { InputDemo1 } from './components/input/InputDemo1.jsx'
import { InputDemo2 } from './components/input/InputDemo2.jsx'
import { FormDemo1 } from './components/Form/FormDemo1.jsx'
import { FormDemo2 } from './components/Form/FormDemo2.jsx' 
import { FormDemo3 } from './components/Form/FormDemo3.jsx'
import { FormDemo4 } from './components/Form/FormDemo4.jsx'
import { FormDemo5 } from './components/Form/FormDemo5.jsx'
import { Formtask } from './components/Form/Formtask.jsx'
import { FormDemo6 } from './components/Form/FormDemo6.jsx'
import { FormDemo7 } from './components/Form/FormDemo7.jsx'
import { Formpasswordtask } from './components/Form/Formpasswordtask.jsx'


// import './App.css'
// import { Headercomponent } from './components/Headercomponent.jsx'
// import { Footercomponent } from './components/Footercomponent.jsx'
// import Contentcomponent from './components/Contentcomponent.jsx'
// import { Mapdemo1 } from './components/Mapdemo1.jsx'
// import { Mapdemo2 } from './components/Mapdemo2.jsx'
// import { Mapdemo3 } from './components/Mapdemo3.jsx'
// import { Mapdemo4 } from './components/Mapdemo4.jsx'
// import { Mapdemo5 } from './components/Mapdemo5.jsx'
// import { Mapdemo6 } from './components/Mapdemo6.jsx'
// import { Mapdemo7 } from './components/Mapdemo7.jsx'
// import { Mapdemo8 } from './components/Mapdemo8.jsx'
// import { Mapdemo9 } from './components/Mapdemo9.jsx'
// import { Mapdemo10 } from './components/Mapdemo10.jsx'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      {/* <Headercomponent></Headercomponent> */}
      {/* <Mapdemo1></Mapdemo1> */}
      {/* <Mapdemo2></Mapdemo2> */}
      {/* <Mapdemo3></Mapdemo3> */}
      {/* <Mapdemo4></Mapdemo4> */}
      {/* <Mapdemo5></Mapdemo5> */}
      {/* <Mapdemo6></Mapdemo6> */}
      {/* <Mapdemo7></Mapdemo7> */}
      {/* <Mapdemo8></Mapdemo8> */}
      {/* <Mapdemo9></Mapdemo9> */}
      {/* <Mapdemo10></Mapdemo10> */}
      {/* <Footercomponent></Footercomponent> */}
      <Routes>
        <Route path="/" element={<HomeComponent></HomeComponent>}></Route>
        <Route path="/netflixhome" element={<NetflixHome></NetflixHome>}></Route>
        <Route path="/netflixmovie" element={<NetflixMovie></NetflixMovie>}></Route>
        <Route path="/netflixshows" element={<NetflixShows></NetflixShows>}></Route>
        <Route path='/netflixaccount' element={<NetflixAccount></NetflixAccount>}></Route>
        <Route path='/netflixsports' element={<NetflixSports></NetflixSports>}></Route>
        <Route path="/*" element={<ErrorNotfound></ErrorNotfound>}></Route>
        <Route path="/watch/:name" element={<Watch></Watch>}></Route>
        <Route path="/teamsdetails/:name" element={<TeamDetail></TeamDetail>}></Route>
        <Route path="/teamsdetails/:name/:id" element={<TeamDetail></TeamDetail>}></Route>
        <Route path="/functiondemo" element={<Functiondemo></Functiondemo>}></Route>
        <Route path="/usedemo1" element={<UseStatedemo1></UseStatedemo1>}></Route>
        <Route path="/usedemo2" element={<UseStatedemo2></UseStatedemo2>}></Route>
        <Route path="/usedemo3" element={<UseStatedemo3></UseStatedemo3>}></Route>
        <Route path="/employees" element={<Employees></Employees>}></Route>
        <Route path="/inputdemo1" element={<InputDemo1></InputDemo1>}></Route>
        <Route path="/inputdemo2" element={<InputDemo2></InputDemo2>}></Route>
        <Route path="/formdemo1" element={<FormDemo1></FormDemo1>}></Route>
        <Route path="/formdemo2" element={<FormDemo2></FormDemo2>}></Route>
        <Route path="/formdemo3" element={<FormDemo3></FormDemo3>}></Route>
        <Route path="/formdemo4" element={<FormDemo4></FormDemo4>}></Route>
        <Route path="/formdemo5" element={<FormDemo5></FormDemo5>}></Route>
        <Route path="/formtask" element={<Formtask></Formtask>}></Route>
        <Route path="/formdemo6" element={<FormDemo6></FormDemo6>}></Route>
        <Route path="/formdemo7" element={<FormDemo7></FormDemo7>}></Route>
        <Route path="/formpasswordtask" element={<Formpasswordtask></Formpasswordtask>}></Route>
        
        

       
      </Routes>
    </div>
  )
}

export default App
