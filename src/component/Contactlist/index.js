import React, { Component } from 'react';
import "./Contactlist.scss";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { contactData } from "../contactData";

export default class Contactlist extends 
Component  {
	state = {
		contacts: contactData
	};
 	render() { 
 		//console.log(this.state.works);
 		const { contacts } = this.state;
 		return (
 			
 			<section className="contact">
 				<div className="contact-img"></div>
 				<div className="findme">
		            <div className="findme-title">
		               Find me on
		            </div>
 					<div className="contactlist">
             		
		 				{contacts.map(contact => {
		 					return <Contact key={contact.id} contact=
		 					{contact} />;	
		 				})}
		 			</div>	 			
 				</div>
 			</section>
 		);
 	}
}


            