
function addRoles(username,arr_roles){
	let user = Meteor.users.findOne({username: username});
	if(user)
		Roles.addUserToRoles( user._id , arr_roles );
}

function removeRoles(username,arr_roles){
	var user = Meteor.users.findOne({username: username});
	if(user)	
		Roles.removeUserFromRoles( user._id, arr_roles );
}
//CREATE user
if(!Meteor.users.findOne({'username':'damarnez'})){
	
	Accounts.createUser({
		profile: {
      		name: 'Daniel Martin'
    	},
	    username: "damarnez",
	    email: "danielmartinjimenez@gmail.com",
	    password: "qwerty"
	});

	addRoles('damarnez',['admin']);
	
	let user = Meteor.users.findOne({username: 'damarnez'});

	let isInDBTheme = Themes.findOne({name: 'Theme Basic'});
	if (!isInDBTheme) {
		 
		let newTheme = _.extend({
			name:'Theme Basic',
			definition:'basic'
		},{
			userId: user._id, 
			author: user.username, 
			submitted: new Date()
		});

		let themeId = Themes.insert(newTheme);

		let newLanding = _.extend({
			name:'Example Landing',
			theme: themeId
		}, {
			userId: user._id, 
			author: user.username, 
			submitted: new Date()
		});

		let landingId = Landings.insert(newLanding);

	}



}
//Add role
if (Meteor.users.find().count() === 0) {
	//Has users
	addRoles('damarnez',['admin']);
}