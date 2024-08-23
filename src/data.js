
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#root',
  title: 'BostonVIS',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Boston VIS Community',
  description: 'Boston CHI Labs is an emerging alliance of university- and industry-based HCI researchers. The main focus of the Labs is to provide students doing HCI research with a strong peer community and with access to the broad range of HCI expertise available throughout Boston area. Our activities will likely involve social and research events, creating a shared calendar of HCI-related events, and curriculum coordination. Our activities complement those of BostonCHI, which is an organization of HCI professionals from the New England area.'
}

const events = [

  {
    title: "Post-CHI Deadline Drinks",
    type: "Upcoming",
    glyph: "star",
    date: "20-Sep-2024 @ 9:00am",
    location: "",
    description: "After CHI deadline celebration! The CHI deadline is coming. After hitting the submit button for one last time, join us for our annual post-CHI deadline drinks! Come chilling with other CHI survivors (or cheerful observers) and enjoying your well-deserved drinks."
  },

  {
    title: "Boston VIS Summer School",
    type: "Archive",
    glyph: "star",
    date: "13-Aug-2024 @ 9:00am",
    location: "Northeastern, Shillman Hall, Room 320. 115 Forsyth St. Boston, MA 02115",
    description: "Join us for the 2024 Boston VIS Summer School on August 13th and 14th at Shillman Hall. Enjoy exciting programming, networking opportunities, and student-led tutorials. For communications, use Slack. Contact <a href='mailto:dwootton@mit.edu'>Dylan Wootton</a> for questions. Find the schedule on our <a href='https://vizphdsummerschool.github.io/'>website</a>."
  },
  {
    title: "Pre-CHI Madness 2018",
    type: "Archive",
    glyph: "bullhorn",
    date: "29-Mar-2018 @ 5:30pm - 7:00pm",
    location: "MIT, CSAIL, Stata Center D463 (Star Room), (32 Vassar Street, Cambridge, MA 02139)",
    description: "<p>Please sign up: <a href=\"https://goo.gl/forms/tsW6aMvoGvq12PyZ2\">Google form</a></p><p>Authors, If you are presenting this year at CHI, we'd be delighted to hear a 10-minute sneak-preview of your talk. We all will be very happy if you and/or your co-authors could share your work to the Boston CHI community.</p><p> All Attendees, Please join us the event! Bring your friends, family and colleagues. In this event, you will hear about latest CHI research in the Boston area, meet up with the crowd and help us give feedback on our talks.</p>"
  },
  {
    title: "Pre-CHI Madness 2017",
    type: "Archive",
    glyph: "bullhorn",
    date: "02-May-2017 @ 6:00pm - 8:00pm",
    location: "Harvard CruftLab 309 (19 Oxford St, Cambridge, MA 02138)",
    description: "Authors, We would love to hear about your work at our pre-CHI madness event, and hope you have many feedback from audiences :) If you are presenting this year at CHI, we'd be delighted to hear a 10-minute sneak-preview of your talk. If you are presenting a poster or demo, we'd be delighted to hear a 30-second pitch of your work. If your poster/demo is ready, please show it off too! All Attendees, We hope this event will be one of the best places to hear about latest CHI research in the Boston area, so please come join us! Bring your friends, family and colleagues. Meet up with the crowd, chat, eat, drink and help us give feedback on our talks and posters/demos."
  },
  {
    title: "Post-CHI Deadline Drinks",
    type: "Archive",
    glyph: "glass",
    date: "21-Sep-2016 @ 8:30pm",
    location: "The Field Pub, 20 Prospect St, Cambridge, MA 02139",
    description: "After CHI deadline celebration! The CHI deadline is coming. After hitting the submit button for one last time, join us for our annual post-CHI deadline drinks! Come chilling with other CHI survivors (or cheerful observers) and enjoying your well-deserved drinks."
  },
  {
    title: "Pre-CHI Madness 2016",
    type: "Archive",
    glyph: "bullhorn",
    date: "04-May-2016 @ 6:00pm - 8:00pm",
    location: "MIT, 32-G882",
    description: "If you are presenting this year at CHI, we'd be delighted to hear a 3-minute sneak-preview of your talk. If you are presenting a poster, we'd be at least as delighted to hear about your research and give you feedback on your poster draft. Just bring the draft on your computer (or a test printout), have a 30-second pitch ready, and you are good to go! If you want to hear about latest CHI research in the Boston area, please come! Bring your friends, family and colleagues. Meet up with the crowd, chat, eat, drink and help us give feedback on our talks and posters."
  },
  {
    title: "Event - BostonCHI Labs March Meetup",
    type: "Archive",
    glyph: "star",
    date: "30-Mar-2016 @ 7:00pm-",
    location: "John Harvard’s Brewery & Ale House, 33 Dunster St, Cambridge, MA 02138",
    description: "Join us for an evening of nice company with dinner and drinks. This is a great chance to meet/catch up with other HCI researchers in Greater Boston area."
  },
  {
    title: "Event - BostonCHI Labs Lightning Talk Session",
    type: "Archive",
    glyph: "star",
    date: "22-Jan-2016 @ 6:00pm - 8:00pm",
    location: "Harvard, Maxwell Dworkin, Room 323",
    description: "The lightning talks are three-minute talks. They can be about your recent work, work in progress, or any cool HCI related topics you want to share. The event overall will be very casual. Feel free to come to hang out, catch up with folks, get to know new people, and, of course, enjoy good food!"
  },
  {
    title: "Post-CHI Deadline Drinks",
    type: "Archive",
    glyph: "glass",
    date: "25-Sep-2015 @ 5:00pm",
    location: "John Harvard's, 33 Dunster St, Cambridge",
    description: "Friday is fast approaching. After you make your last-minute edits and submit \"one last time\", join us for our annual post-CHI deadline drinks!"
  },
  {
    title: "BostonCHI Labs Spring Send-off",
    type: "Archive",
    glyph: "glass",
    date: "26-May-2015 @ 6:30pm",
    location: "John's Harvard at Harvard Square, 33 Dunster Street, Cambridge, MA 02138",
    description: "Summer is coming! We are having a get-together to celebrate summer with food and drinks, and catch up with each other before people leave for their summer plans."
  },
  {
    title: "Event - Batya Friedman",
    type: "Archive",
    glyph: "star",
    date: "13-Nov-2014 @ 4:00pm",
    location: "Room G-115 - Maxwell Dworkin building - Harvard, 33 Oxford St., Cambridge",
    description: "Join us for a talk by <a href=\"http://ischool.uw.edu/people/faculty/batya\">Batya Friedman</a> titled \"Technology of Value: Principles, Policy and Practice\". Immediately following the talk there will be a small BostonCHI Labs reception so that we all have a chance to socialize a little and say hello to Batya. Immediately before the talk (at 3:30) there will be ice cream open to anyone attending the talk and to the CS community at Harvard. Please join us for any combination of these events!"
  },
  {
    title: "Post-CHI Deadline Drinks",
    type: "Archive",
    glyph: "glass",
    date: "22-Sep-2014 @ 9:00pm",
    location: "John Harvard's, 33 Dunster St, Cambridge",
    description: "Make those final edits, hit submit, and join us for our annual post-CHI deadline drinks!"
  },
  {
    title: "Event - Hiroshi Ishii",
    type: "Archive",
    glyph: "star",
    date: "10-Jun-2014 @ 6:30pm",
    location: "Tufts Interdisciplinary Lab for Computation, 196 Boston Avenue, 4th Floor",
    description: "<p>Join us for an exciting talk from Hiroshi Ishii, \"Vision-Driven: Beyond Tangible Bits, Towards Radical Atoms\".</p><p>More talk details can be found <a href=\"ishii.html\">here</a>.</p><p>This is a joint <a href=\"http://bostonchilabs.org\">BostonCHI Labs</a> and <a href=\"http://bostonchi.org\">BostonCHI</a> event.</p><p>RSVP through BostonCHI at <a href=\"https://www.eventbrite.com/e/hiroshi-ishii-vision-driven-beyond-tangible-bits-towards-radical-atoms-tickets-11597541559\">Eventbrite</a>."
  },
  {
    title: "Pre-CHI Madness",
    type: "Archive",
    glyph: "bullhorn",
    date: "23-Apr-2014 @ 6:00pm",
    location: "MSR NERD, Abigail Adams and Crispus Attucks Rooms",
    description: "<p>If you are presenting at this year's CHI, we'd be delighted to hear a 3 minutes sneak-preview of your talk.</p><p>If you are presenting a poster, we'd be at least as delighted to hear about your research and give you feedback on your poster draft. Just bring the draft on your computer (or a test printout), have an elevator pitch ready, and you'll be good to go!</p><p>Last but not least, if you want to hear about the latest CHI research happening in the Boston area, please come, bring your friends, family, colleagues, meet up with the crowd, chat, eat, drink, and help us get feedback on our talks and posters.</p>"
  },
  {
    title: "MSR Meetup",
    type: "Archive",
    glyph: "glass",
    date: "26-Mar-2014 @ 7:00pm",
    location: "MSR NERD, Thomas Paul Room",
    "attendance": 30,
    description: "<p>With conference deadlines looming, we're bringing you a brief escape! Come join other HCI researchers, faculty, and students for an evening of socializing, light food, and drinks.</p> <p>To help forge new connections between groups, attendees will be invited to give a 3-minute pitch about their current research. No slides allowed!</p><p>RSVP using <a href=\"http://doodle.com/28qugye823md7axb\">this Doodle poll.</a></p>"
  },
  {
    title: "Winter Meetup",
    type: "Archive",
    glyph: "glass",
    date: "30-Jan-2014 @ 8:00pm",
    location: "John Harvard's",
    "attendance": 16,
    description: "<p>Come and join us Thursday, 1/30 for our first event of 2014! We will meet at 8pm at John Harvard's.</p> <p>The first 3 pitchers (and a few appetizers) will be on us, so get there early!</p><p>RSVP using <a href=\"http://www.doodle.com/dp4asb4frxacxepm\">this Doodle poll.</a></p>"
  },
  {
    title: "Post-CHI Review Celebrate and Commiserate",
    type: "Archive",
    glyph: "glass",
    date: "13-Nov-2013 @ 6:00pm",
    location: "John Harvard's",
    description: "We have a strong hunch that the CHI reviews will be released before Wednesday night. But even if you did not submit, please join us to celebrate and commiserate on Wednesday night at John Harvard's!"
  },
  {
    title: "Post-CHI Deadline Drinks",
    type: "Archive",
    glyph: "glass",
    date: "18-Sep-2013 @ 8:00pm",
    location: "Meadhall in Cambridge (4 Cambridge Ctr)",
    description: "It's beer'o'clock! Or will be soon. Please come and join us tomorrow night for our annual post-CHI deadline drinks."
  },
  {
    title: "Pre-CHI Madness",
    type: "Archive",
    glyph: "bullhorn",
    date: "10-Apr-2013 @ 6:00pm",
    location: "MIT CSAIL",
    description: "<p>If you are presenting at this year's CHI, we'd be delighted to hear a 3 minutes sneak-preview of your talk.</p><p>If you are presenting a poster, we'd be at least as delighted to hear about your research and give you feedback on your poster draft. Just bring the draft on your computer (or a test printout), have an elevator pitch ready, and you'll be good to go!</p><p>Last but not least, if you want to hear about the latest CHI research happening in the Boston area, please come, bring your friends, family, colleagues, meet up with the crowd, chat, eat, drink, and help us get feedback on our talks and posters.</p>"
  },
  {
    title: "HCI Student Short Presentations",
    type: "Archive",
    glyph: "bullhorn",
    date: "12-Dec-2012 @ 6:00pm",
    location: "3rd floor, Google, 5 Cambridge Center",
    description: "Before the semester ends, we would like to invite you and your research groups to an evening of food and informal student presentations<br><br>All students are strongly encouraged to participate and others are warmly welcome to do so.  We will also provide food, (sponsored by Yahoo!).<br><br>1. Please  RSVP and let us know if you would like to present: <a href=\"http://doodle.com/hxrwa56yqdffe25u\">RSVP HERE!</a><br/>2. By December 11, please prepare 1-3 minute presentation on your research and send your slide(s) to bestefiliz@gmail.com<br/>3. Faculty: please forward to your research groups (and anyone else who might be interested)<br/><br/>We are looking forward to seeing you there!"
  },

  {
    title: "Fall Event - Lars Erik Holmquist",
    type: "Archive",
    glyph: "star",
    date: "16-Oct-2012 @ 6:00pm",
    location: "Harvard, Maxwell-Dworkin Building",
    description: "<p>Do you find yourself staring blankly at your screen now that all your papers and ideas are sent off to CHI? We're here to help you through this time with an inspirational talk by Lars Erik Holmquist of Yahoo! Research, who will tell us about innovative technologies that make your life more interesting and fun.</p><p>To get a feeling for how much extra yummy food we should order (sponsored by Yahoo! Research!), please <a href=\"http://doodle.com/cp8gc2hr3g4q6e75\">RSVP</a>.</p><p>Tentative plan: food at 6pm, talk at 6:30pm, more mingling after the talk.</p>"
  },
  {
    title: "Deadline Drinks",
    type: "Archive",
    glyph: "glass",
    date: "19-Sep-2012 @ 9:00pm",
    location: "John Harvard's, 33 Dunster St, Cambridge",
    description: "<p>In what's becoming an annual tradition, we unwind over food and drinks to celebrate CHI submissions.</p>"
  },
  {
    title: "Summer Drinks",
    type: "Archive",
    glyph: "glass",
    date: "7-Aug-2012 @ 8:00pm",
    location: "Meadhall, 4 Cambridge Center",
    description: "<p>It's time to hear what everyone else has been doing this summer -- and what those CHI submission plans are :)  Come and join us for a refreshing after work beer or two at Meadhall in Kendall Sq.</p><p>This is your last chance to see all of us before the annual post-CHI deadline drinks!</p><p>And please bring along summer interns or new CHI people in town.</p>"
  },
  {
    title: "Pre-CHI Talks",
    type: "Archive",
    glyph: "bullhorn",
    date: "25-Apr-2012 @ 6:00pm",
    location: "Google, 5 Cambridge Center",
    description: "<p>Are you going to CHI and are participating in papers, notes, posters, demos, chairing workshops, etc?</p><p>Are you missing CHI this year but would still like to hear about what BostonCHI Labs research will be appearing at the conference? Please join us in a Pre-CHI event organized by BostonCHI Labs!</p><p>We'd like to offer anyone who has work appearing at any venue in the conference the chance to share it with our community first.  Think of it as a quick practice talk with a friendly community, or a chance to share your enthusiasm.  If you're interested, sign up <a href=\"https://docs.google.com/spreadsheet/viewform?formkey=dFlVZzFTN3BWaVowMy1rU0F3M1p0T3c6MQ#gid=0\">here</a>.</p>"
  },
  {
    title: "March Meetup",
    type: "Archive",
    glyph: "stats",
    date: "2-Mar-2012 @ 5:00pm",
    location: "Maxwell-Dworkin room 119",
    description: "<p>Join us for highlights on CSCW and TEI '12! Share, listen, or just catch up with the group since the winter breaks, hope to see everyone there!</p><p>And for anyone interested after - we'll head out for drinks (maybe John Harvards, Cambridge Commons, or any other suggestions)!</p>"
  },
  {
    title: "Deadline Drinks",
    type: "Archive",
    glyph: "glass",
    date: "22-Apr-2011 @ 9:00pm",
    location: "TBA",
    description: "<p>Expanding our annual tradition of post-deadline drinks, we will unwind over food and drinks to celebrate the UIST submission deadline.</p>"
  },
  {
    title: "Pre-CHI Talks",
    type: "Archive",
    glyph: "bullhorn",
    date: "26-Apr-2011 @ 6:30pm",
    location: "MSR NERD",
    description: "<p>Are you going to CHI and are participating in papers, notes, posters, demos, chairing workshops, etc?</p><p>Are you missing CHI this year but would still like to hear about what BostonCHI Labs research will be appearing at the conference? Please join us in a Pre-CHI event organized by BostonCHI Labs!</p><p>We'd like to offer anyone who has work appearing at any venue in the conference the chance to share it with our community first.  Think of it as a quick practice talk with a friendly community, or a chance to share your enthusiasm.  If you're interested, sign up <a href=\"http://doodle.com/igf2ne5ubwtgxdit\">here</a> and reply to mstrait@cs.tufts.edu with your name, talk title and the conference track (paper, note, poster, etc).</p><p><a href=\"http://doodle.com/gg9255wd4q5scr38\">RSVP</a> to the Doodle poll if you will be attending.</p>"
  },
  {
    title: "CHI Cloud",
    type: "Archive",
    glyph: "glass",
    date: "28-Mar-2011 @ 6:00pm",
    location: "MSR NERD",
    description: "<p>A very special socializing event hosted by NERD where we all turned into one big tag cloud!</p>"
  },
  {
    title: "Deadline Drinks",
    type: "Archive",
    glyph: "glass",
    date: "24-Sep-2010 @ 9:00pm",
    location: "John Harvard's Pub",
    description: "<p>In what's becoming an annual tradition, we unwound over food and drinks to celebrate CHI submissions.</p>"
  },
  {
    title: "Lecture Series",
    type: "Archive",
    glyph: "star",
    date: "12-May-2010 @ 6:00pm",
    location: "Maxwell-Dworkin (33 Oxford St, Cambridge)",
    description: "<p>Joint event with BostonCHI: a talk by Fernanda Vi&eacute;gas and Martin Wattenberg on Social Data Visualization.</p>"
  },
  {
    title: "Pre-CHI Talks",
    type: "Archive",
    glyph: "bullhorn",
    date: "07-Apr-2010 @ 7:00pm",
    location: "MIT Stata Center (32-G449)",
    description: "<p>Are you going to CHI and are participating in papers, notes, posters, demos, chairing workshops, etc? Are you missing CHI this year but would still like to hear about what BostonCHI Labs research will be appearing at the conference? Please join us in a Pre-CHI preview!</p>"
  },
  {
    title: "Lab Social",
    type: "Archive",
    glyph: "glass",
    date: "28-Jan-2010 @ 9:00pm",
    location: "Muddy Charles Pub",
    description: "<p>Hang out, eat, drink, and meet other HCI researchers and students at <a href=\"http://web.mit.edu/muddy/location.html\">Muddy Charles Pub</a>.</p>"
  },
  {
    title: "CHILab Madness",
    type: "Archive",
    glyph: "bullhorn",
    date: "11-Nov-2009 @ 8:00pm",
    location: "Harvard University (33 Oxford St, Cambridge)",
    description: "<p>This event was attended by over 60 students, postdocs, faculty and researchers from Harvard, MIT, Northeastern, Olin College, Tufts, Wellesley College, WPI, IBM research, and Bank of America.  Over 30 people presented their research at the \"Madness\" part of the event.</p>"
  },
  {
    title: "Deadline Drinks",
    type: "Archive",
    glyph: "glass",
    date: "24-Sep-2009 @ 9:00pm",
    location: "John Harvard's Pub",
    description: "<p>We unwound over food and drinks to celebrate CHI submissions.</p>"
  }
]

const participants = [
  {
    name: 'Visual Computing Group',
    affiliation: 'Harvard University',
    website: 'http://vcg.seas.harvard.edu/',
  },
  {
    name: 'MIT Visualization Group',
    affiliation: 'Massachusetts Institute of Technology',
    website: 'http://vis.csail.mit.edu/',
  },
  {
    name: 'VALT - Visual Analytics Laboratory at Tufts',
    affiliation: 'Tufts University',
    website: 'http://valt.cs.tufts.edu/',
  }, {
    name: 'Khoury Vis Lab',
    affiliation: 'Northeastern University',
    website: 'https://vis.khoury.northeastern.edu/',
  }, {
    name: 'VIEW Lab (Visualization and Information Equity) at WPI',
    affiliation: 'Worcester Polytechnic Institute',
    website: 'https://wpivis.github.io/'
  }


]




const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'simonwarchol@g.harvard.edu',
}

export { header, about, events, contact, participants }