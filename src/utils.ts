export function getTemplate(name,data={}){
	var templateString = $('#'+name).html();
	return Mustache.render(templateString,data);
}