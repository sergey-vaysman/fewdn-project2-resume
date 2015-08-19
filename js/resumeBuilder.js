
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

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var contactsArr = [
	formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation
];
for (contactItem in contactsArr) {
	$("#topContacts").append(contactsArr[contactItem]);
}

var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedPic);

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);


if (bio.skills != null && bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

var work = {
	"jobs": [
		{
			"employer": "Planet Express",
			"title": "Delivery Boy",
			"location": "Brooklyn, NY",
			"dates": "January 3000 - Future",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		},
		{
			"employer": "Panucci's Pizza",
			"title": "Delivery Boy",
			"location": "Manhattan, NY",
			"dates": "1998 - December 31, 1999",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		}
	]
};

if (work.jobs != null && work.jobs.length > 0) {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(employer + title);
		var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(dates);
		var jobLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(jobLocation);
		var description = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(description);
	}
}

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
