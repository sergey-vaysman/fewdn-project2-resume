
var skills = ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"];

var contacts = {
	"mobile": "650-555-5555",
	"email": "john@example.com",
	"github": "johndoe",
	"twitter": "@johndoe",
	"location": "San Francisco"
};

var bio = {
	"name": "John Doe",
	"role": "Web Developer",
	"contacts" : contacts,
	"welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
	"skills": skills,
	"biopic": "images/fry.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//TODO: create an array with these objects
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
//TODO: append using a for-loop through the array
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedPic);

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);

$("#header").append(HTMLskillsStart);
var formattedSkill1 = HTMLskills.replace("%data%", bio.skills[0]);
var formattedSkill2 = HTMLskills.replace("%data%", bio.skills[1]);
var formattedSkill3 = HTMLskills.replace("%data%", bio.skills[2]);
var formattedSkill4 = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill1);
$("#skills").append(formattedSkill2);
$("#skills").append(formattedSkill3);
$("#skills").append(formattedSkill4);

var work = {
	"jobs": [
		{
			"employer": "Planet Express",
			"title": "Delivery Boy",
			"location": "Brooklyn, NY",
			"dates": "January 3000 - Future",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		}
	]
};

var schools = [
	{
		"name": "Nova Southeastern University",
		"location": "Fort Lauderdale, FL",
		"degree": "Masters",
		"majors": ["CS"],
		"dates": "2013"
	},
	{
		"name": "Eckerd College",
		"location": "Saint Petersbourgh, FL",
		"degree": "BA",
		"majors": ["CS"],
		"dates": "2003"
	}
];
var onlineCourses = [
	{
		"title": "Javascript Crash Course",
		"school": "Udacity",
		"date": "2014",
		"url": "http://www.udacity.com/course/ud804"
	}
];
var education = {
	"schools": schools,
	"onlineCourses": onlineCourses
};