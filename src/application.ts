/// <reference path="jquery.d.ts" />
/// <reference path="mustache.d.ts" />

import utils = module('./utils');
import events = module('./events');

export class Application {
	constructor() {
		
	}
	
	start() {
		//simple demonstration of events
		var o = new events.Observable();
		o.on( (x) => {
				//get a template (using mustach templates) from index.html
				var el = utils.getTemplateElement('template-welcome');
				//put it in the body
				$(document.body).append(el);		
			});
		//trigger the event
		o.trigger();
	}
}