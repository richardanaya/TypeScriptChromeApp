/// <reference path="jquery.d.ts" />
/// <reference path="mustache.d.ts" />

import utils = module('./utils');

export class Application {
	constructor() {
		
	}
	
	start() {
		var el = utils.getTemplate('template-welcome');
		$(document.body).append(el);
	}
}