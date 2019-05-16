import React, { Component } from 'react';
import "./Work.scss";
import icon from "../../portfolio.png";

export default class Work extends Component {
 	render() {
 		const { img, name, info, source_url, code, rel } = this.props.work;
 		const url = `https://i.postimg.cc/${img}.png`;
 		return (
 			<article className="work">
 				<h3>{name}</h3>			
				<div className="img-container">
					<a href={source_url} 
				    target="_blank" rel={rel}>
				    <img className="worklist" src={url} alt={name}/></a>
				</div>
				<div className="work-info">
					<h4>
						<form className="border">
							<div className="button">
							<a href={source_url} 
							target="_blank" rel={rel}> View App
							 </a>
							</div>
							
							<div className="button">
							<a href={code} 
							target="_blank" rel={rel}> View Code
							 </a>
							 </div>
						</form>
					</h4>
					<h5>
						<p>{info}</p>
    				</h5>			
 				</div>
 			</article>
		)
 	}
 }


				