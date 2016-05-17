/**
* VALIDATIONS
**/
let validateTheme = function (data) {
  var errors = {};
	if (!data.name)
  		errors.name  = "Please value name is required";
	return errors;
}

/* ORION COLLECTION */
Themes = new orion.collection('themes', {
	singularName: 'theme', // The name of one of these items
	pluralName: 'themes', // The name of more than one of these items
	link: {
		title: 'Themes' 
	},
	tabular: {
		columns: [
		  { 
		    data: "name", 
		    title: "Name Theme" 
		  },
		  { 
		    data: "definition", 
		    title: "Definition" 
		  },
		]
	}
});

Meteor.methods({
	themeInsert: function(data) {
		check(this.userId, String);
		
		let errors = validateTheme(data);
		if (errors.name)
		  throw new Meteor.Error('invalid-theme', "Name and Definition are required.");

		let isInDB = Themes.findOne({name: data.name});
		if (isInDB) {
			return { exist: true, _id: isInDB._id }
		}

		let user = Meteor.user();
		let newTheme = _.extend(data, {
			userId: user._id, 
			author: user.username, 
			submitted: new Date()
		});

		let themeId = Themes.insert(newTheme);

		return themeId ;
	}
});

/**
* SCHEMA GENERATOR
**/

Themes.attachSchema(new SimpleSchema({
	name: {
		type: String,
		optional: false,
		label: 'Name Theme'
	},
	definition: {
		type: String,
		optional: false,
		label: 'Name Style',
	}
}));

