import React from "react";
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import configuration from '../configurations/index.js';
import Header from './page/header.jsx';
import Features from './page/features.jsx';
import Price from './page/price.jsx';
import Team from './page/team.jsx';
import {
  Footer,
} from 'rebass'

export class LandingPage extends TrackerReact(React.Component)  {
	
	constructor() {
		super();
		this.state = {
			subscription: {
				themes: Meteor.subscribe('themes'),
				landings: Meteor.subscribe('landings')
			}
		}


	}
	componentWillUnmount() {
		this.state.subscription.themes.stop();
		this.state.subscription.landings.stop();
	}
	themes(id) {
		return Themes.findOne({_id:id}); 
	}	
	landings(id) {
        return Landings.findOne({_id:id}); 
    }
	render() {
		console.log("ID Landing:",this.props.idLanding.id)
		
		let actual_landing = this.landings(this.props.idLanding.id);
		let theme;
		if(actual_landing) theme = this.themes(actual_landing.theme);
		if(theme && actual_landing){
		 
			this.state = configuration[theme.definition || 'basic'];
		
			const {
		    	fontFamily,
		    	fontWeight,
		    	letterSpacing,
		      	color,
		        backgroundColor
		    } = this.state;

			return (
				<div  style={{
			          fontFamily,
			          fontWeight,
			          letterSpacing,
			          color,
			          backgroundColor
			        }}>
					<Header/>
					<div className="container-fluid">
				    	<Price />
						<Features />
						<Team />	
					</div>
					<Footer>
					    <center>Developer @damarnez</center>
				    </Footer>
			    </div>
			);
		}else{
			console.log("RENDER LOADING ");
			return (<h1> Loading ... </h1>);
		}
	}
}