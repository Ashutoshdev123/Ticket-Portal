import React from "react";
import { useState } from "react";
import "./dashboard.css";
import Card from "./card";
import  ticketsData from "../ticketDetails.json"

const Header = () => {
    //const [selectedStatus, setSelectedStatus] = useState("all");
    const [filteredTickets, setFilteredTickets] = useState(ticketsData);

    const getDataByStatus = (e) => {
      const status = e.target.value;
      const agent = e.target.value;
     // console.log(status);
      if (status === "all" || agent === "") {
       setFilteredTickets(ticketsData);      
      } else {
        const filtered = ticketsData.filter(ticket => ticket.status === status || ticket.agent === agent);
        setFilteredTickets(filtered);
      }
    };  
  

    return (
        <div>
        <h2 className="dashboard">Ticket Board</h2>
        
        <div className="dashboard">
        Filter by Status: <select name="filterByStaus" id="filterByStaus" onChange={getDataByStatus}>
            <option value="">select</option>
            <option value="all">ALL</option>
            <option value="open">Open</option>
            <option value="in-progress">In-Progress</option>
            <option value="closed">Closed</option>
            <option value="confirm">Confirm</option>
        </select>
        <span>Filter by Agent:
        <select name="filterByAgent" id="filterByAgent" onChange={getDataByStatus}>
            <option value="">select</option>
            <option value="agent1">Agent1</option>
            <option value="agent2">Agent2</option>
            <option value="agent3">Agent3</option>
            
        </select>
        </span>
        </div>    
        
        <Card tickets={filteredTickets} />
        </div>
    )
}

export default Header;