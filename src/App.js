import logo from "./logo.svg";
import "./App.css";

import { AgGridReact } from "ag-grid-react";

import { useState,useEffect,useMemo  } from "react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";


function App() {
  const[ rowData,setRowData] =useState( [
    { make: "ford", model: "focus", price: 40000 },
    { make: "Toyota", model: "Celica", price: 45000 },
    { make: "BMW", model: "4 series", price: 50000 },
  ]);

  const [columnDefs,setColumnDefs] =useState( [
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ]);
   
  const defaultColDef = useMemo( ()=> ({
    sortable: true,
    filter:true 
  }));

  useEffect(()=>{
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
    .then(result => result.json())
    .then(rowData => setRowData(rowData))
  },[])

  return (
    <div className="ag-theme-alpine" style={{height:500}}>
      <AgGridReact rowData={rowData} 
      columnDefs={columnDefs}
      defaultColDef={defaultColDef} />
    </div>
  );
}

export default App;
