/**
* VALIDATIONS
**/
let validateLanding = function (data) {
  var errors = {};
	if (!data.name)
  		errors.name  = "Please value name is required";
	if (!data.theme)
		errors.theme = "Please value theme is required";
  return errors;
}
 
Landings = new orion.collection('landings', {
	singularName: 'landing', // The name of one of these items
	pluralName: 'landings', // The name of more than one of these items
	link: {
		title: 'Landings' 
	},
	tabular: {
	columns: [
	  { 
	    data: "name", 
	    title: "Name Landing" 
	  },{ 
	    data: "theme", 
	    title: "Theme" 
	  }]
	}
});

Meteor.methods({
	landingInsert: function(data) {
		check(this.userId, String);
		
		// let errors = validateLanding(data);
		// if (errors.name || errors.theme)
		//   throw new Meteor.Error('invalid-page', "Name and Theme are required.");

		let isInDB = Landings.findOne({name: data.name});
		if (isInDB) {
			return { exist: true, _id: isInDB._id }
		}

		let user = Meteor.user();
		let newLanding = _.extend(data, {
			userId: user._id, 
			author: user.username, 
			submitted: new Date()
		});

		let landingId = Landings.insert(newLanding);

		return {
		  _id: landingId
		};
	}
});

/**
* SCHEMA GENERATOR
**/

Landings.attachSchema(new SimpleSchema({
	name: {
		type: String,
		optional: false,
		label: 'Name Landing'
	},
	theme: orion.attribute('hasOne',{
	    	label: 'Choose a theme'
		},
		{
		    collection: Themes,
		    titleField: 'name',
		    publicationName: 'someRandomString'
		}
	)
}));