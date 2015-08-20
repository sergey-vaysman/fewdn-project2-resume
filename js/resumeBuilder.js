
var bio = {
	"name": "John Doe",
	"role": "Web Developer",
	"contacts" : {
		"mobile": "650-555-5555",
		"email": "john@example.com",
		"github": "johndoe",
		"twitter": "@johndoe",
		"location": "San Francisco"
	},
	"welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
	"skills": ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"],
	"biopic": "images/fry.jpg"
};

/*
 * Returns an array with contact data, which can be added to header or footer
 */
var getContactsArray = function(contacts) {
	var formattedMobile = HTMLmobile.replace("%data%", contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", contacts.location);
	var contactsArr = [
		formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation
	];
	return contactsArr;
};

bio.displayContacts = function() {
	var contactsArr = getContactsArray(bio.contacts);
	for (var contactItem in contactsArr) {
		$("#topContacts, #footerContacts").append(contactsArr[contactItem]);
	}
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var contactsArr = getContactsArray(bio.contacts);
	bio.displayContacts();

	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedPic);

	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);


	if (bio.skills != null && bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
};

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
work.display = function() {
	if (work.jobs != null && work.jobs.length > 0) {
		for (var job in work.jobs) {
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
education.display = function() {
	if (education.schools != null) {
		for (var school in schools) {
			var schoolItem = schools[school];
			$("#education").append(HTMLschoolStart);
			var name = HTMLschoolName.replace("%data%", schoolItem.name);
			var degree = HTMLschoolDegree.replace("%data%", schoolItem.degree);
			$(".education-entry:last").append(name + degree);
			var dates = HTMLschoolDates.replace("%data%", schoolItem.dates);
			$(".education-entry:last").append(dates);
			var location = HTMLschoolLocation.replace("%data%", schoolItem.location);
			$(".education-entry:last").append(location);
			if (schoolItem.majors != null) {
				for (var major in schoolItem.majors) {
					var majorItem = schoolItem.majors[major];
					var majorDisplay = HTMLschoolMajor.replace("%data%", majorItem);
					$(".education-entry:last").append(majorDisplay);
				}
			}
		}
	}
	if (education.onlineCourses != null) {
		$("#education").append(HTMLonlineClasses);
		for (var onlineCourse in onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var course = onlineCourses[onlineCourse];
			var title = HTMLonlineTitle.replace("%data%", course.title);
			var school = HTMLonlineSchool.replace("%data%", course.school);
			$(".education-entry:last").append(title + school);
			var dates = HTMLonlineDates.replace("%data%", course.date);
			$(".education-entry:last").append(dates);
			var url = HTMLonlineURL.replace("%data%", course.url);
			$(".education-entry:last").append(url);
		}
	}
};


var inName = function() {
	return inName(bio.name);
};
var inName = function(name) {
	console.log("name: " + name);
	if (name != null) {
		var names = name.split(" ");
		if (names.length > 1) {
			var firstName = names[0];
			var lastName = names[1];
			firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
			lastName = lastName.toUpperCase();
			return firstName + " " + lastName;
		}
	}
	return null;
};

var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
			"images": ["images/197x148.gif", "images/197x148.gif"]
		}
	]
};
projects.display = function() {
	for (var project in projects.projects) {
		var projectItem = projects.projects[project];
		$("#projects").append(HTMLprojectStart);
		var title = HTMLprojectTitle.replace("%data%", projectItem.title);
		$(".project-entry:last").append(title);
		var dates = HTMLprojectDates.replace("%data%", projectItem.dates);
		$(".project-entry:last").append(dates);
		var description = HTMLprojectDescription.replace("%data%", projectItem.description);
		$(".project-entry:last").append(description);
		for (var image in projectItem.images) {
			var image = HTMLprojectImage.replace("%data%", projectItem.images[image]);
			$(".project-entry:last").append(image);
		}
	}
};

var displayMap = function() {
	$("#mapDiv").append(googleMap);
};

var detectClick = function() {
	$(document).click(function(loc) {
		console.log("x: " + loc.pageX + ", y: " + loc.pageY);
	});	
};

var displayContent = function() {
	bio.display();
	education.display();
	projects.display();
	work.display();
	displayMap();
	detectClick();
};

displayContent();
