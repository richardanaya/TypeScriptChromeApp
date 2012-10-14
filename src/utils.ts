//returns a template as a string
export function getTemplate(name,data={}){
	var templateString = $('#'+name).html();
	return Mustache.render(templateString,data);
}

//returns a template as an html element
export function getTemplateElement(name,data={}){
	return $(getTemplate(name,data)).get(0);
}