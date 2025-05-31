import React from "react";
import "./card.css";
//import  ticketsData from "../ticketDetails.json"

const Card = ({ tickets }) => {
    return (
        <div className="card-container">
        {tickets.map((ticket, index) => (
            <div className="card" key={index}>
                <div className="container">
                    <div> Ticket Id: <span>{ticket.id}</span></div>
                    <div><h4><b>{ticket.name}</b></h4></div>
                    <div><b>Assigned Agent:</b> <span>{ticket.agent}</span></div>
                    <div><b>Due Date:</b> <span>{ticket.dueDate}</span></div>
                    <div><b>Status:</b> <span>{ticket.status}</span></div>
                </div>
            </div>
        ))}
    </div>

    )
}

export default Card;