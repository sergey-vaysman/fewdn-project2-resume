var name = "John Doe";
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);