import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import  IconButton from '@mui/material/IconButton';
import  DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import Addcar from "./Addcar";
import Editcar from "./Editcar";


function Carlist() {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const addCar = (car) => {
    // REST auton lisäys
    fetch("https://carrestapi.herokuapp.com/cars", {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(car)
  })
      .then(response => {
        if (response.ok) {
          fetchCars();
        }
      });
  };

  const fetchCars = () => {

    fetch("https://carrestapi.herokuapp.com/cars")
      .then((response) => response.json())
      .then((responseData) => setCars(responseData._embedded.cars));
  };

  const deleteCar = (link) => {
      fetch(link, {method: 'DELETE'})
      .then((response) => {
          if(response.ok) {
              fetchCars();
          }
      })
  }

  const updateCar = (updateCar, link) => {
    console.log("update funktio");
    fetch(link, {
      method: 'PUT',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(updateCar)
    })
      .then((response) => {
          if(response.ok) {
              fetchCars();
          }
      })
  }

  const [columnDefs, setColumnDefs] = useState([
    { field: "brand", sortable: true, filter: true },
    { field: "model", sortable: true, filter: true  },
    { field: "color", sortable: true, filter: true  },
    { field: "fuel", sortable: true, filter: true  },
    { field: "year", sortable: true, filter: true  },
    { field: "price", sortable: true, filter: true  },
    {
        headerName: '',
        width: 100,
        field: '_links.self.href',
        cellRenderer: (params) =>
        <IconButton color="error" onClick={() => deleteCar(params.value)}>
            <DeleteIcon />
        </IconButton>
    },
    {
      headerName: '',
      width: 100,
      field: '_links.self.href',
      cellRenderer: (params) =>
      <Editcar updateCar={updateCar} params={params}/>
  }
  ]);

  return (
      <div>
       <Addcar addCar={addCar}/>
      <div style={{ height: "100%", boxSizing: "border-box" }}>
        <div style={{height: 500, width: '100%'}} className="ag-theme-material">
          <AgGridReact 
            rowData={cars}  
            columnDefs={columnDefs}
            paginationPageSize={10}
            pagination={true} 
            />
        </div>
      </div>
    </div>
  );
}

export default Carlist;