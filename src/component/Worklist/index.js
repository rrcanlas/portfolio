import React, { Component } from 'react';
import "./Worklist.scss";
import Work from "../Work/Work";
import { workData } from "../workData";

export default class Worklist extends 
Component  {
	state = {
		works: workData
	};
 	render() { 
 		//console.log(this.state.works);
 		const { works } = this.state;
 		return (			
 			<section className="worklist">
 				{works.map(work => {
 					return <Work key={work.id} work=
 					{work} />;	
 				})} 		
 			</section>
 		);
 	}
}