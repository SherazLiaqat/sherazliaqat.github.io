
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../Components/Dropdown.css';
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import myimg from '../Components/Images/pakistanscreenshot.png'
export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/screenshot" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <nav className="nav">
        <h2>Please Select the Country</h2>
        <input className="input" id="toggle" type="checkbox" />
        <ul>
          <li>
            <Link to="/about">Pakistan</Link>
          </li>
          <li>
            <Link to="/MalasiyaGuidline">Malaysia</Link>
          </li>
          <li>
            <Link to="/saudiArabiaGuidline">Saudi Arabia</Link>
          </li>
          
        </ul>
      </nav>
    </div>
  );
}

function About() {
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "firstName", headerName: "First name", width: 130 },
        { field: "lastName", headerName: "Last name", width: 130 },
        {
          field: "age",
          headerName: "Age",
          type: "number",
          width: 90,
        },
        {
          field: "fullName",
          headerName: "Full name",
          description: "This column has a value getter and is not sortable.",
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.firstName || ""} ${params.row.lastName || ""}`,
        },
      ];
      
      const rows = [
        { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
        { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
        { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
        { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
        { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 12 },
        { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
        { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
        { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
        { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
      ];
      const showScreenshot=()=>{
         <img> src={myimg}</img>
         
      }
  return (
    <>
     
      <div style={{ display: "flex" }}>
        <button className="button">Guidlines</button>
        <button  onClick={showScreenshot} className="button">Screenshot</button>
       
      </div>
      <div style={{ height: 400, width: "100%" }}>
      <h1>Guidlines</h1>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />

      </div>
    </>
  );
}

function Dashboard() {
  return (
    <div>
      <h2><img src={myimg}/></h2>
    </div>
  );
}

// import React from 'react'
// import './Dropdown.css';
// import {Link} from 'react-router-dom';
// export default function Dropdown() {
//   return (
//     <>
//     <h1 style={{marginTop:'10px'}}>Research Thesis Title</h1>
//     <nav className='nav'>
//      <h2>Please Select the Country</h2>
//       <input className='input' id="toggle" type="checkbox"/>
// <ul>
// <li><Link to="/pakistanGuidline">Pakistan</Link></li>
//      <li><Link to="/malasiyaGuidline">Malaysia</Link></li>
//      <li><Link to="/saudiArabiaGuidline">Saudi Arabia</Link></li>
//      {/* <li><Link to="/pakistanGuidline">Pakistan</Link></li>
//      <li><Link to="/malasiyaGuidline">Malaysia</Link></li>
//      <li><Link to="/saudiArabiaGuidline">Saudi Arabia</Link></li> */}

//    </ul>
// </nav>
//     </>
//   )
// }
