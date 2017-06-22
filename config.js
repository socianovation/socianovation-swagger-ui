var dropdowns = [
	{	
		label : 'Development Server',
		value : 'localhost'
	},
	{
		label : 'QA Server',
		value : 'localhost'
	}
];

var dropdown_list = "";

for(var a = 0; a < dropdowns.length; a++){
	dropdown_list += "<option value=\""+dropdowns[a].value+"\">"+dropdowns[a].label+"</option>";
}
	