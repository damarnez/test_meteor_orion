import React from 'react'
import {
	Heading,
	Text,
	Button
} from 'rebass'
const Features = () => (

		<div className="row" style={{
		      paddingTop: 40,
		      paddingBottom: 40,
		      backgroundColor:'green'
		    }}>
		  <div className="col-md-4">
			    <Heading size={1} big children='50€' />
	   			<Text children='Lorem Ipsum is simply dummy text of the ....' />
     
	  			<Button
			        big
		        children='Premium' /> 
		  	</div>
		  <div className="col-md-4">
		  		<Heading size={1} big children='40€' />
	   			<Text children='Lorem Ipsum is simply dummy text of the ....' />
       
	  			<Button
			        big
		        children='Medium' /> </div>
		  <div className="col-md-4">
		  		<Heading size={1} big children='25€' />
	   			<Text children='Lorem Ipsum is simply dummy text of the ....' />
         		<Button
			        big
		        children='Cheap' /></div>
		</div>
);

export default Features