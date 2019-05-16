import React from "react";
import "./Contact.scss";
import Footer from "../Footer/Footer";


export default function Contact() {
	return (
		<section className="container">
		<div className="social__media">
          	Find me on Social Media
        </div>
        <div class="container">
	        <div className="destination-container">		            

	            <div className="destination square" id="linkedin">
	                <h2>LinkeIn</h2>
	            </div>

	            <div className="destination square" id="github">
	                <h2>Github</h2>
	            </div>

	            <div className="destination square" id="fb">
	                <h2>Facebook</h2>
	            </div>

	            <div className="destination square" id="instagram">
	                <h2>Instagram</h2>
	            </div>

	            <div className="destination square" id="resume">
	                <h2>Resume</h2>
	            </div>
        	</div>
        </div>
        <Footer /> 
        </section>
	)
}