import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export const Layout = ({content}) => (
    <div>
        <h1>Links</h1>
        <hr />
        <div>{content}</div>
    </div>
);


export class ListLinks extends TrackerReact(React.Component)  {
	
	constructor() {
        super();
        
        this.state = {
			subscription: {
				landings: Meteor.subscribe('landings')
			}
        }

    }
    componentWillUnmount() {
         
    }
    landings() {
        return Landings.find({}).fetch(); 
    }	
	render() {

		let inner = this.landings().map((landing,i) => {
          	return (<li key={i} >
          				<a href={'/'+ landing._id }> {landing.name} </a>
          			</li>);
    	});

		return (
            <div className="container">
                <ul>
                    { inner }
                </ul>
            </div>
        );
	}
} 