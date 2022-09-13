import React from 'react'
import './App.css';
import Header from "./Header"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './Footer';
import Employees from './Employees'
import GroupedTeamMembers from './GroupedTeamMembers';
import NavBar from './NavBar'
import {DataProvider} from './context/DataContext'
function App() {

  return (
    <DataProvider>
    <div>
    <Router >
      <NavBar/>
<Header />
<Routes>
<Route path="/" element={<Employees />}/>
<Route path="/GroupedTeamMembers" element={<GroupedTeamMembers />} />

</Routes>


<Footer/>
    </Router>
    </div>
    </DataProvider>
  );
}

export default App;

