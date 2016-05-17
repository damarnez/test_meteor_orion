import React from 'react';
import {mount} from 'react-mounter';
import {Layout,ListLinks} from './components/app.jsx';
import {LandingPage} from './components/landing-page.jsx';

FlowRouter.route("/", {
	action() {
		mount(Layout, { content: <ListLinks/> });
	}
});

FlowRouter.route('/:id', {
	action(params) {
		mount(LandingPage, {idLanding:params});
	}
});

