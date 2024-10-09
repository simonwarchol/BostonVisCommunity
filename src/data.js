
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#root',
  title: 'BostonVIS',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Boston VIS Community',
  description: 'Boston VIS is an emerging alliance of university- and industry-based Visualization researchers. The main focus of Boston VIS is to provide VIS researchers with a strong peer community and with access to the broad range of VIS expertise available throughout Boston area. Our activities will likely involve social and research events, creating a shared calendar of VIS-related events, and curriculum coordination.'
}

const events = [

  {
    title: "Post-CHI Deadline Drinks",
    type: "Archive",
    glyph: "star",
    date: "26-Sep-2024 @ 6:00pm",
    location: "Bow Market, Somerville",
    description: "After CHI deadline celebration! The CHI deadline is coming. After hitting the submit button for one last time, join us for our annual post-CHI deadline drinks! Come chilling with other CHI survivors (or cheerful observers) and enjoying your well-deserved drinks."
  },

  {
    title: "Boston VIS PhD Summer School",
    type: "Archive",
    glyph: "star",
    date: "13-Aug-2024 @ 9:00pm",
    location: "Northeastern, Shillman Hall, Room 320. 115 Forsyth St. Boston, MA 02115",
    description: "Join us for the 2024 Boston VIS Summer School on August 13th and 14th at Shillman Hall., networking opportunities, and student-led tutorials. For communications, use Slack. Contact <a href='mailto:dwootton@mit.edu'>Dylan Wootton</a> for questions. Find the schedule on our <a href='https://vizphdsummerschool.github.io/'>website</a>."
  }
]

const participants = [
  {
    name: 'Visual Computing Group',
    affiliation: 'Harvard University',
    website: 'http://vcg.seas.harvard.edu/',
  }, {
    name: 'VALT - Visual Analytics Laboratory at Tufts',
    affiliation: 'Tufts University',
    website: 'http://valt.cs.tufts.edu/',
  }, {
    name: 'MIT Visualization Group',
    affiliation: 'Massachusetts Institute of Technology',
    website: 'http://vis.csail.mit.edu/',
  }, {
    name: 'Khoury Vis Lab',
    affiliation: 'Northeastern University',
    website: 'https://vis.khoury.northeastern.edu/',
  }, {
    name: 'Insight + Interaction Lab',
    affiliation: 'Harvard University',
    website: 'https://insight.seas.harvard.edu/',
  }, {
    name: 'VIEW Lab (Visualization and Information Equity) at WPI',
    affiliation: 'Worcester Polytechnic Institute',
    website: 'https://wpivis.github.io/'
  }, {
    name: 'Machine Psychology Research Group',
    affiliation: 'UMass Boston',
    website: 'https://mpsych.org'
  }, {
    name: 'Data + Feminism Lab',
    affiliation: 'Massachusetts Institute of Technology',
    website: 'https://dataplusfeminism.mit.edu/'
  }, {
    name: 'Visualization Research Lab',
    affiliation: 'Brown University',
    website: 'http://vis.cs.brown.edu/'
  },

  {
    name: 'Insight + Interaction Lab',
    affiliation: 'Harvard University',
    website: 'https://insight.seas.harvard.edu/'
  },
  {
    name: 'Northeastern University Visualization Consortium (NUVis)',
    affiliation: 'Northeastern University',
    website: 'https://nuvis.northeastern.edu/'
  },
  {
    name: 'HCI-VIS Lab',
    affiliation: 'University of Massachusetts Amherst',
    website: 'https://groups.cs.umass.edu/hci-vis/'
  },
  {
    name: 'HIDIVE Lab',
    affiliation: 'Harvard Medical School',
    website: 'https://hidivelab.org/'
  },
  // {
  //   name: '',
  //   affiliation: 'Northeastern University',
  //   website: 'https://nuvis.northeastern.edu/'
  // },
  // NamWook Kim (Boston College) https://www.namwkim.org/
  // Sarah Williams
  // Jonathan Zong
  // Harini Suresh
  // Pedro Cruz
  // Laura Perovich
  // Carmen Hull
  // Dylan Cashman
  // Michael Correll
  // Clifton Forlines
  // Mahsan Nourani
  // Nezar Abdennur

  // {
  //     name: 'Other Participating Universities',
  //     affiliation: 'UMass Amherst',
  //     website: ''
  //   },

]




const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'simonwarchol@g.harvard.edu',
}

export { header, about, events, contact, participants }