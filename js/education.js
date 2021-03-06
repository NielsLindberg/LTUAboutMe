var education = {
    "htmlOuterTemplate": "<div class=\"education-entry bgcolor-white border shadow\"></div>",
    "htmlInnerTemplates": [{
        "picture": "<img class=\"edu-pic\" src=\"%data%\" ",
        "alt": "alt=\"%data%\"></img>"
    }, {
        "url": "<div class=\"overlay bgcolor-1-op text-center\"><a target=\"_blank\" href=\"%data%\">",
        "name": "%data%",
        "degree": " - %data%</a></div>"
    }, {
        "description": "<p class=\"school-description\">%data%</p><div class=\"spacer\"></div>"
    }, {
        "dates": "<div class=\"fixed-bottom\"><hr><p class=\"date-location-text\">%data%<br>",
        "location": "%data%</p></div>"
    }],
    "schools": [{
        "name": "Frederiksberg Gymnasium",
        "location": "Copenhagen, Frederiksberg, Denmark",
        "degree": "Gymnasium",
        "description": "Completed Gymnasium with the focus areas: Mathematics, Physics, Computer Science<br><br>\
                        Gymnasium is the educational level between elementary school and university in Denmark",
        "dates": "2005 - 2008",
        "url": "http://www.frberg-gym.dk/",
        "picture": "images/Frberggymn.png",
        "alt": "Picture of Frederiksberg-Gymnasium"
    }, {
        "name": "Copenhagen Business School",
        "location": "Copenhagen, Frederiksberg, Denmark",
        "degree": "Bachelor",
        "description": "Completed a Bachelor in Business Administration",
        "dates": "2010 - 2013",
        "url": "http://www.cbs.dk/",
        "picture": "images/CBS.png",
        "alt": "Picture of Copenhagen Business School"
    }, {
        "name": "Luleå Technical University",
        "location": "Luleå, Sweden",
        "degree": "Bachelor Courses",
        "description": "Distance studying the following IT courses:<br>Java, C#, Introductory Web Development, CMS, Knowledge Management",
        "dates": "18/01/2016 - 31/06/2016 (expected)",
        "url": "http://www.ltu.se",
        "picture": "images/LTU.png",
        "alt": "Picture of Luleå Technical University"
    }, {
        "name": "Örebro University",
        "location": "Örebro, Sweden",
        "degree": "Bachelor Courses",
        "description": "Distane studying a course called:<br>Programming in C",
        "dates": "18/01/2016 - 31/06/2016 (expected)",
        "url": "http://www.oru.se",
        "picture": "images/ORU.png",
        "alt": "Picture of Örebro University"
    }, {
        "name": "Udacity.com",
        "location": "Online",
        "degree": "Online degree",
        "description": "Taking a Front End Web Developer Nanodegree at Udacity to fill up any spare time i have between my university courses.",
        "dates": "18/01/2016 - 31/06/2016 (expected)",
        "url": "http://www.udacity.com",
        "picture": "images/Udacity.png",
        "alt": "Picture of Udacity.com office"
    }]
};
