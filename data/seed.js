const blogData = [{
  title: 'Things I Learned Building My Portfolio Site',
  postUrl:
  'https://medium.com/@feminaprovita/things-i-learned-building-my-portfolio-site-7abb472599ae?source=friends_link&sk=3d5684ab10c6f127a942352beb24299b',
  imageUrl:
  'https://cdn-images-1.medium.com/max/800/1*Nqg9mpO7gKfYH26Lj0LgLQ.jpeg',
  date: '2019-05-20',
  teaser:
  'After nearly two months of working on my portfolio site, here are my takeaways. Maybe you can glean something valuable from my mistakes.',
  project: 'Portfolio Website',
  skills:
  [ 'js', 'node', 'express', 'react', 'html', 'css', 'grid', 'git', 'webpack', 'heroku', 'RegEx' ]
}, {
  title: 'Pair Programming after Bootcamp: Unintentionally a Great Learning Experience',
  postUrl: 'https://medium.com/@feminaprovita/pair-programming-after-bootcamp-unintentionally-a-great-learning-experience-2201223413d?source=friends_link&sk=6e3a26bebd0e3973ca5b6cf901bdb3a7',
  imageUrl: 'https://i.imgur.com/cmVXobL.jpg',
  date: '2019-03-12',
  summary: 'In which I learn that 1) pair programming with an experienced developer is a pretty different experience from pair programming with a peer who knows about as little as I do, and also that 2) I actually *can* pair program with an experienced developer and not be a waste of space but make actual, worthwhile contributions.',
  teaser: 'It was just a couple days before my bootcamp graduation when the other developer in my roleplaying group mentioned a side project on his radar...',
  project: 'Masks Rescue',
  skills: [ 'js', 'node', 'puppeteer', 'git' ]
}, {
  title: 'New to Programming? Here’s How to Better Parse the Results from Googling Your Error Messages',
  postUrl: 'https://medium.com/@feminaprovita/new-to-programming-heres-how-to-better-parse-the-results-from-googling-your-error-messages-8c9b0081fef4?source=friends_link&sk=52b56dafe2f2cd51c0447cc0d811539b',
  imageUrl: 'https://i.imgur.com/jhxCzGv.jpg',
  date: '2019-01-28',
  teaser: 'So you’ve written a function/program/website, and it doesn’t work. Hopefully it’s giving you an error message somewhere...',
  skills: [ 'js', 'node', 'git' ]
}]


const jobData = [{
    jobTitle: 'Freelance Editorial Consultant',
    monthStart: 'March 2011',
    bullets: [
      'Edit/proofread books in final stage before publication for publishers, nonprofits, authors, grad students',
      'Fix grammar and usage errors, apply style guides, add indexing, format footnotes, analyze data'
    ],
    paragraph:
      'Copyediting, proofreading, indexing, stylizing, marketing, writing, and other tasks as requested. Projects have included theology books—scholarly, popular, and devotional; analyses of liturgical data; theses and dissertations; and teacher’s manuals. Ongoing clients include Word On Fire, Liturgy Training Publications, their academic imprint Hillenbrand Books, and Illuminare Publications. Past clients include the Archdiocese of Chicago, C-FAM, Faith and Life, Magnificat, King Richard’s Liturgical Design & Consulting, Liturgical Press, and private persons.',
    skills: ['proofing', 'copyediting']
  },
  {
    company: 'Magnificat',
    url: 'http://us.magnificat.net',
    location: 'Yonkers, NY',
    jobTitle: 'Assistant Editor',
    monthStart: 'February 2013',
    monthEnd: 'August 2018',
    bullets: [
      'Proofread and fact-checked every issue of a monthly magazine with a circulation of more than 270,000, including maintaining regular correspondence with subject-matter experts on improving content',
      'Pitched, researched, assessed market and wrote proposals for, and edited a variety of books, exponentially increasing personal volume of books edited over five years (from 2 in 2012 to 16 in 2018)',
      'Rewrote and dramatically expanded website FAQ; merged marketing texts to harmonize copy across platforms',
      'Took initiative to create and maintain U.S. office’s only spreadsheet of all books and their information. Created and maintained several in-house organizing spreadsheets to optimize repeating tasks, saving at least 20 person-hours/month.',
      'Expanded and reorganized an existing 3-page magazine-only style guide into a 22-page booklet, updated three times a year, with clear sections for magazines, books, and marketing',
      'Developed a reputation as the “go-to” person in the office for technical and subject-matter questions'
    ],
    paragraph:
      'Proofread, fact-checked, and applied style guide to monthly Catholic worship aid reaching about 270,000 subscribers; also chose hymns for daily offices, suggested/organized occasional liturgical improvements, and aided with translation and marketing tasks. Edited, compiled, and proofread various book projects as needed. Since 2017, also edited bookstore website and ebooks, developed new books, and creatively expanded marketing efforts at minimal expense.',
    skills: ['proofing, copyediting', 'html', 'french', 'latin']
  },
  {
    company: 'Various choirs',
    url: 'http://nymcc.org/about-us',
    jobTitle: 'Vocalist / Alto',
    monthStart: 'September 1996',
    bullets: [
      'Have sung in over a dozen choirs (breaks: July 2014–Aug 2017; June 2018–Feb 2019)',
      'Usually alto, but roles have included cantor, soprano, tenor, and “make up a new harmony now, please”',
      'Mostly church choirs, at varying skill levels (inc. professional), across a wide range of styles and languages',
      'Currently: Metropolitan Catholic Chorale (based in Bronx, NY)'
    ],
    paragraph:
      'Have sung in over a dozen choirs with breaks rarely longer than a few months (exceptions: July 2014–Aug 2017; June 2018–Feb 2019). Usually an alto, but roles have also included cantor, soprano, tenor, and “make up a new harmony now, please.” Mostly church choirs, at varying skill levels (up to professional), across a wide range of styles and languages. Currently in NYC’s Metropolitan Catholic Chorale.',
    skills: ['latin']
}]

const projectData = [{
  name: 'Portfolio Website',
  role: 'Fullstack Engineer',
  bullets:
    [ 'Built with Express, React, and Webpack',
      'Styled with CSS Grid',
      'Hosted on Heroku',
      'Previous build also used Redux, Sequelize, and PostgreSQL' ],
  github: 'https://github.com/feminaprovita/portfolio-simple',
  blogUrl:
    'https://medium.com/@feminaprovita/things-i-learned-building-my-portfolio-site-7abb472599ae',
  bestLink:
    'https://medium.com/@feminaprovita/things-i-learned-building-my-portfolio-site-7abb472599ae',
  imageUrl: 'https://i.imgur.com/lCRjxiE.png',
  skills:
    [ 'js', 'node', 'express', 'react', 'html', 'css', 'grid', 'git', 'webpack', 'heroku', 'regex' ],
  priority: 1
}, {
  name: 'Google+ Rescue',
  role: 'Backend Engineer',
  par2:
    'Scraped, organized, and cleaned up data from a Google Plus community before Google pulled the plug on Plus. It went so well, we did the same for other communities run by the same game company!',
  paragraph:
    'Collaborated with another engineer to analyze and capture full archive (posts, comments, uploaded photos, links) of an active Google+ Community in advance of the platform\'s shutdown, scraping with Puppeteer.',
  bullets:
    [ 'Co-wrote functions and scraped data from active Google+ community in advance of planned shutdown',
      'Analyzed then captured full archive (posts, comments, uploaded photos, links), scraping with Puppeteer' ],
  github: 'https://github.com/feminaprovita/masks-rescue',
  blogUrl:
    'https://medium.com/@feminaprovita/pair-programming-after-bootcamp-unintentionally-a-great-learning-experience-2201223413d',
  bestLink:
    'https://medium.com/@feminaprovita/pair-programming-after-bootcamp-unintentionally-a-great-learning-experience-2201223413d',
  imageUrl: 'https://i.imgur.com/cmVXobL.jpg',
  skills:
    [ 'js', 'node', 'git', 'puppeteer', 'regex' ],
  priority: 2
}, {
  name: 'Moodify',
  role: 'Fullstack Engineer',
  par2:
    "The user takes a selfie, or uploads a photo, which we then upload to Google Cloud Vision. Cloud Vision returns to us an image analysis object, which we run through our own home-brewed function (transforming Google's word data into numerical values, crunching them based on positivity or negativity and importance, and using a fixed-point radius to get a range for Spotify). This yields a search query that we pass to Spotify along with the relevant user data, permitting the user to play the songs and/or save the playlist to their account.",
  paragraph:
    'Wrote, updated, and debugged a complex JavaScript function mapping Google Cloud Vision\'s facial recognition analysis of user\'s photo to a Spotify search string, to generate a custom playlist matching the user\'s mood.',
  bullets:
    [ 'User takes or uploads a selfie, and receives a unique Spotify playlist matching the image’s mood',
      "Wrote/updated function mapping Google Cloud Vision's analysis object to a string for Spotify’s search" ],
  url: 'https://my-moodify.herokuapp.com',
  github: 'https://github.com/grape-emu/my-moodify',
  video: 'http://bit.ly/moodify-presentation',
  bestLink: 'http://bit.ly/moodify-presentation',
  imageUrl: 'https://i.imgur.com/Us7GTvX.png',
  skills:
    [ 'js', 'node', 'express', 'axios', 'react', 'redux', 'css', 'git', 'webpack', 'heroku', 'agile' ],
  priority: 3
}, {
  name: 'Timelink Travel Services',
  role: 'Fullstack Engineer',
  par2:
    'Premise: our client had recently outgrown their etsy shop, and needed a functional e-commerce site that could display their wares.',
  paragraph:
    'Part of a team that built an e-commerce site with integrated payment options in less than two weeks. Involved in all facets of production, including styling with CSS and Bootstrap. Practiced Agile workflow and maintained excellent Git hygiene.',
  bullets:
    [ 'E-commerce site with integrated payment option, built in under two weeks',
      'Practiced Agile workflow and maintained excellent Git hygiene',
      'CRUD app built in Node with Express, Sequelize, React, and Redux',
      'Involved with all facets of production, styled with CSS and Bootstrap' ],
  url: 'https://pm-grace-shopper.herokuapp.com',
  github: 'https://github.com/pigMercury/grace-shopper',
  bestLink: 'https://pm-grace-shopper.herokuapp.com',
  imageUrl: 'https://i.imgur.com/RXzSb5q.png',
  skills:
    [ 'js', 'node', 'express', 'axios', 'sequelize', 'react', 'redux', 'css', 'flexbox', 'git', 'webpack', 'postgres', 'heroku', 'agile' ],
  priority: 4
}, {
  name: 'Keeping Facebook Cheerful',
  role: 'Fullstack Engineer',
  par2:
    "Since I was a child, I've never liked politics; usually after an election, people calm down and start getting along again. But after the 2016 election, nobody calmed down. Rather than leaving facebook (and missing the delightful photos of my friends' babies and dogs), I instead started asking one question every day. Some are silly, some outlandish, some simply noncontroversial. People have really enjoyed having an oasis where nobody's confronting anybody, but I've asked over 800 questions by now! It seemed time to build an archive that people besides me could peruse.",
  paragraph:
    'Created an archive of nearly a thousand public Facebook posts (required scraping the DOM more than 800 times to set up).',
  bullets:
    [ 'Display of longstanding personal project, asking silly/creative questions daily',
      'Populating archive required scraping the DOM 800x in real time',
      'Future features: archive search by keyword, tag, date; display five random questions; submit suggestion',
      'Future script: scrape facebook daily, updating database and front page with latest question' ],
  url: 'https://kfbc.herokuapp.com',
  github: 'https://github.com/feminaprovita/kfbc-website',
  video: 'http://bit.ly/kfbc',
  bestLink: 'http://bit.ly/kfbc',
  imageUrl: 'https://i.imgur.com/dKXhDzd.png',
  skills:
    [ 'js', 'node', 'express', 'axios', 'sequelize', 'react', 'redux', 'css', 'flexbox', 'git', 'postgres', 'heroku', 'puppeteer', 'chalk' ],
  priority: 5
}]


const schoolData = [
  {
    fullName: 'Franciscan University of Steubenville',
    shortName: 'Franciscan University',
    url: 'https://www.franciscan.edu',
    location: 'Steubenville, OH',
    degree: 'B.A.',
    major: 'Catechetics',
    graduation: 2008,
    thesis:
      'Liturgical signs and symbols and the importance of understanding them for active participation',
    advisor: 'James Pauley, M.A., S.T.D.',
    detail:
      'Great Books honors program. French minor. Semester in Gaming, Austria.'
  },
  {
    fullName:
      'Liturgical Institute of the University of Saint Mary of the Lake',
    shortName: 'Liturgical Institute',
    url: 'https://www.liturgicalinstitute.org/',
    location: 'Mundelein, IL',
    degree: 'M.A.',
    major: 'Liturgical Studies',
    graduation: 2011,
    thesis:
      'The Ars Celebrandi of the Mystical Body: Applications for Postconciliar Liturgical Praxis',
    advisor: 'Denis R. McNamara, M.Arch.H., Ph.D.',
    detail: 'Graduated cum laude.'
  },
  {
    fullName: 'Grace Hopper Program at Fullstack Academy of Code',
    shortName: 'Grace Hopper',
    url: 'https://www.gracehopper.com',
    location: 'New York, NY',
    degree: 'Web Development Certification',
    graduation: 2019
  }
]

const skillsByLevel = [{
  level: 'irrelevant',
  skills: ['Proofreading', 'Copyediting', 'French', 'Latin']
}, {
  level: 'proficient',
  skills: ['JavaScript/ES6', 'Node', 'Express', 'Sequelize', 'React', 'Redux', 'HTML5', 'Flexbox', 'Git', 'Webpack/Babel', 'Agile', 'Axios', 'Excel', 'Heroku']
}, {
  level: 'familiar',
  skills: ['PostgreSQL', 'CSS3', 'Waffle', 'Bootstrap', 'Puppeteer', 'Python', 'RegEx']
}]

const skillsByType = {
  languages: ['JavaScript/ES6', 'Python', 'SQL'],
  frontend: ['React', 'Redux', 'HTML5', 'CSS3, Grid, Flexbox', 'Webpack/Babel'],
  backend: ['Node', 'Express', 'Sequelize', 'PostgreSQL', 'Heroku'],
  tools: ['Git', 'Puppeteer', 'Excel', 'RegEx'],
  other: ['Agile', 'Copyediting', 'Proofreading', 'French']
}

module.exports = {
  blogData,
  jobData,
  projectData,
  schoolData,
  skillsByLevel,
  skillsByType
}
