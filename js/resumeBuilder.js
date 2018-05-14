/*
This is empty on purpose! Your code to build the resume will go here.
 */
// Bio Section starts here
var bio = {
    "name": "Mohit Menghnani",
    "role": "Front End Engineer",
    "contacts": {
        "mobile": "352-226-2150",
        "email": "m.menghnani@gmail.com",
        "github": "mmenghnani89",
        "twitter": "theproductguy89",
        "location": "San Francisco"
    },

    "welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    "skills": ["swimming", "lawn tennis", "clubbing"],

    "biopic": "https://goo.gl/eDsbmR",

    "display": function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName, formattedRole);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedLocation, formattedGithub);

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedBioPic, formattedMsg, HTMLskillsStart);

        //Print skills
        bio.skills.forEach(function(skill) {
            var formattedSkills = HTMLskills.replace("%data%", skill);
            $("#header").append(formattedSkills);
        });
    }

};

//Work Experience section starts here
var work = {
    "jobs": [{
            "employer": "AppDirect",
            "title": "Senior Engineer",
            "dates": "Feb 2015 to present",
            "location": "Sunnyvale, CA",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac ornare quam. Nunc eros nunc, convallis tempor eros at, facilisis finibus magna. Curabitur finibus elementum leo, in vulputate libero efficitur ut. Ut in lacus metus. Aliquam vitae justo id est aliquam vehicula. Nam rhoncus ornare nisl in dapibus. Vivamus eget commodo quam. Ut non turpis ante. Cras dictum ex et risus scelerisque tempus. Ut dapibus eros sit amet mi commodo, id tristique nulla dignissim."
        },
        {
            "employer": "Citrix",
            "title": "Engineer",
            "dates": "July 2012 to Feb 2015",
            "location": "Fort Lauderdale,FL",
            "description": "Donec in nisl eu mi interdum aliquam. Suspendisse justo tellus, lobortis eget nulla vel, varius dapibus nisi. Maecenas imperdiet elit molestie nulla luctus efficitur. Proin id quam eget enim tempus lobortis. Nulla faucibus, diam quis ultricies lacinia, sapien odio malesuada lorem, ut mattis magna odio nec justo. "
        },
        {
            "employer": "Sumtotal",
            "title": "Junior Engineer",
            "dates": "July 2011 to June 2012",
            "location": "Syracuse, NY",
            "description": "Nullam sed est finibus, tincidunt nibh id, molestie magna. Etiam tempus fermentum nulla non tincidunt. Aenean iaculis eros placerat nulla ultricies, ut dapibus tellus imperdiet. Mauris sed feugiat diam. Nullam nulla arcu, fermentum at rutrum nec, ultricies sed orci. Cras sed ligula eros."
        }
    ],
    "display": function() {
        $("#workExperience").append(HTMLworkStart);

        work.jobs.forEach(function(job) {
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
            var substringWork = formattedWorkEmployer + formattedWorkTitle; //Joining employer name and title in one string before displaying them so that they are added within the same element
            var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);

            $(".work-entry").append(substringWork, formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
        });
    }
};

//Projects Section Starts here
var projects = {
    "projects": [{
            "title": "Library Management System",
            "dates": "Feb 2015",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac ornare quam. Nunc eros nunc, convallis tempor eros at, facilisis finibus magna. Curabitur finibus elementum leo, in vulputate libero efficitur ut. Ut in lacus metus.",
            "images": ["https://goo.gl/a2yj7s", "https://goo.gl/a2yj7s", "https://goo.gl/a2yj7s"]
        },
        {
            "title": "File Transactions in the Cloud",
            "dates": "Present",
            "description": "Nullam sed est finibus, tincidunt nibh id, molestie magna. Etiam tempus fermentum nulla non tincidunt. Aenean iaculis eros placerat nulla ultricies, ut dapibus tellus imperdiet. Mauris sed feugiat diam. Nullam nulla arcu, fermentum at rutrum nec, ultricies sed orci.",
            "images": ["https://goo.gl/a2yj7s", "https://goo.gl/a2yj7s", "https://goo.gl/a2yj7s", "https://goo.gl/a2yj7s"]
        }
    ],
    "display": function() {
        $("#projects").append(HTMLprojectStart);
        projects.projects.forEach(function(project) {
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);
            project.images.forEach(function(image) {
                var formattedProjectImages = HTMLprojectImage.replace("%data%", image);
                $(".project-entry").append(formattedProjectImages);
            });
        });
    }
};

//Education Section Starts here
var education = {
    "schools": [{
            "name": "University of Florida",
            "location": "Gainesville",
            "degree": "Masters in Computer Science",
            "majors": ["Computer Science", "Electronics"],
            "dates": "May 2012"
        },
        {
            "name": "IIIT Allahabad",
            "location": "Allahabad",
            "majors": ["Information Technology", "Management"],
            "degree": "Bachelors in Information Technology",
            "dates": "August 2006 to May 2010"
        }
    ],
    "onlineCourses": [{
            "title": "Java Programming",
            "school": "University of Michigan",
            "dates": "July 2015",
            "url": "https://www.umichigan.edu"
        },
        {
            "title": "FrontEnd Nanodegree",
            "school": "Udacity",
            "dates": "December 2017",
            "url": "https://www.udacity.com"
        }
    ],
    "display": function() {
        $("#education").append(HTMLschoolStart);
        education.schools.forEach(function(school) {
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var substringSchool = formattedSchoolName + formattedSchoolDegree; //Joining School Name and School Degree in one string before displaying them so that they are added within the same elementum
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry").append(substringSchool, formattedSchoolLocation, formattedSchoolDates); //Education - Including colleges

            school.majors.forEach(function(major) {
                var formattedMajorName = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry").append(formattedMajorName);
            });

        });


        //Adding Heading for Online Courses
        $(".education-entry").append(HTMLonlineClasses);

        //Removing Padding inherited from the education-entry class
        $('#education .education-entry h3').css('padding-left', '0px');
        education.onlineCourses.forEach(function(course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var substringOnlineSchool = formattedOnlineTitle + formattedOnlineSchool; //Joining Online School and Title in one string before displaying them so that they are added within the same element

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);

            var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry").append(substringOnlineSchool, formattedOnlineDates, formattedOnlineURL);

        });
    }

};
// Calling the display function for bio
bio.display();

// Calling the display function for education
education.display();

// Calling the display function for projects
projects.display();

// Calling the display function for work
work.display();

//Adding Maps
$("#mapDiv").append(googleMap);