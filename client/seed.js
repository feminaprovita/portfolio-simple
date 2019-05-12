const blogData = [
  {
    title:
      'New to Programming? Here’s How to Better Parse the Results from Googling Your Error Messages',
    postUrl:
      'https://medium.com/@feminaprovita/new-to-programming-heres-how-to-better-parse-the-results-from-googling-your-error-messages-8c9b0081fef4',
    // imageUrl: 'https://cdn-images-1.medium.com/max/1600/1*7P1FchNLHq7fHjCOrY0wPw.png',
    imageUrl: 'https://i.imgur.com/jhxCzGv.jpg',
    date: '2019-01-28',
    teaser:
      'So you’ve written a function/program/website, and it doesn’t work. Hopefully it’s giving you an error message somewhere...',
    skills: ['js', 'node', 'git']
  },
  {
    title:
      'Pair Programming after Bootcamp: Unintentionally a Great Learning Experience',
    postUrl:
      'https://medium.com/@feminaprovita/pair-programming-after-bootcamp-unintentionally-a-great-learning-experience-2201223413d',
    // imageUrl: 'https://cdn-images-1.medium.com/max/1200/1*PT4sFPxT3P_HKSXReGD1Fw.png',
    imageUrl: 'https://i.imgur.com/cmVXobL.jpg',
    date: '2019-03-12',
    summary:
      'In which I learn that 1) pair programming with an experienced developer is a pretty different experience from pair programming with a peer who knows about as little as I do, and also that 2) I actually *can* pair program with an experienced developer and not be a waste of space but make actual, worthwhile contributions.',
    teaser:
      'It was just a couple days before my bootcamp graduation when the other developer in my roleplaying group mentioned a side project on his radar...',
    project: 'Masks Rescue',
    skills: ['js', 'node', 'puppeteer', 'vscode', 'json', 'git']
  }
]

const jobData = [
  {
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
      'Editorial miscellany for monthly Catholic devotional (circ. 270,000), books for kids and adults',
      'Created several in-house spreadsheets to improve or optimize repeat tasks for self and others',
      'Merged marketing texts to harmonize copy across platforms, notably editing the website'
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
  }
]

const projectData = [
  {
    name: 'Portfolio Website',
    role: 'Engineer',
    bullets: [
      'Database-driven portfolio site with buttons that filter data into or out of render',
      'Built with Node, Express, PostgreSQL, Sequelize, React, and Redux, and hosted on Heroku',
      'Used a combination of responsive design and media queries to style for desktop and mobile',
      'Planned expansions: CI/CD, meta-tagging for increased accessibility, individual pages for each component that showcase database relationships',
      // 'Learned that git is case-insensitive (and how to fix that), repurposed data with RegEx, added HTML meta tags',
      // 'Did a lot of post-deployment troubleshooting',
    ],
    // paragraph: '',
    github: 'https://github.com/feminaprovita/cg-com',
    skills: ['js', 'node', 'express', 'sequelize', 'pg', 'react', 'redux', 'html', 'css', 'flexbox', 'git', 'webpack', 'vscode', 'heroku', 'chalk', 'axios', 'postman', 'regex', 'AWS']
  },
  {
    name: 'Moodify',
    role: 'Fullstack Software Engineer',
    paragraph:
    "The user takes a selfie, or uploads a photo, which we then upload to Google Cloud Vision. Cloud Vision returns to us an image analysis object, which we run through our own home-brewed function (transforming Google's word data into numerical values, crunching them based on positivity or negativity and importance, and using a fixed-point radius to get a range for Spotify). This yields a search query that we pass to Spotify along with the relevant user data, permitting the user to play the songs and/or save the playlist to their account.",
    bullets: [
      'User takes or uploads a selfie, and receives a unique Spotify playlist matching image’s mood',
      `Wrote/updated function mapping Google Cloud Vision's analysis object to a string for Spotify’s search`
    ],
    url: 'https://my-moodify.herokuapp.com',
    github: 'https://github.com/grape-emu/my-moodify',
    video: 'http://bit.ly/moodify-presentation',
    skills: ['js', 'node', 'express', 'axios', 'postman', 'react', 'redux', 'css', 'git', 'webpack', 'vscode', 'heroku', 'agile']
  },
  {
    name: 'Masks Google Plus Rescue',
    role: 'Engineer',
    paragraph:
      'Scraped, organized, and cleaned up data from a Google Plus community before Google pulled the plug on Plus. It went so well, we did the same for other communities run by the same game company!',
    bullets: [
      'Co-wrote functions and scraped data from active Google+ community in advance of planned shutdown',
      'Analyzed then captured full archive (posts, comments, uploaded photos, links), scraping with Puppeteer'
    ],
    github: 'https://github.com/feminaprovita/masks-rescue',
    blogUrl: 'https://medium.com/@feminaprovita/pair-programming-after-bootcamp-unintentionally-a-great-learning-experience-2201223413d',
    skills: ['js', 'node', 'git', 'puppeteer', 'vscode', 'json', 'regex']
  },
  {
    name: 'Keeping Facebook Cheerful',
    role: 'Solo Engineer',
    paragraph:
      "Since I was a child, I've never liked politics; usually after an election, people calm down and start getting along again. But after the 2016 election, nobody calmed down. Rather than leaving facebook (and missing the delightful photos of my friends' babies and dogs), I instead started asking one question every day. Some are silly, some outlandish, some simply noncontroversial. People have really enjoyed having an oasis where nobody's confronting anybody, but I've asked over 800 questions by now! It seemed time to build an archive that people besides me could peruse.",
    bullets: [
      'Display of longstanding personal project, asking silly/creative questions daily',
      'Populating archive required scraping the DOM 800x in real time',
      'Future features: archive search by keyword, tag, date; display five random questions; submit suggestion',
      'Future script: scrape facebook daily, updating database and front page with latest question'
    ],
    // url: 'kfbc.herokuapp.com OR clairegilligan.com/kfbc',
    github: 'https://github.com/feminaprovita/kfbc-website',
    video: 'http://bit.ly/kfbc',
    skills: ['js', 'node', 'express', 'axios', 'sequelize', 'react', 'redux', 'css', 'flexbox', 'git', 'postgres', 'vscode', 'heroku', 'puppeteer', 'chalk']
  },
  {
    name: 'Timelink Travel Services',
    role: 'Fullstack Software Engineer',
    paragraph:
      'Premise: our client had recently outgrown their etsy shop, and needed a functional e-commerce site that could display their wares.',
    bullets: [
      'E-commerce site with integrated payment option, built in under two weeks',
      'Practiced Agile workflow and maintained excellent Git hygiene',
      'CRUD app built in Node with Express, Sequelize, React, and Redux',
      'Involved with all facets of production, styled with CSS and Bootstrap'
    ],
    url: 'https://pm-grace-shopper.herokuapp.com',
    github: 'https://github.com/pigMercury/grace-shopper',
    skills: ['js', 'node', 'express', 'axios', 'postman', 'sequelize', 'react', 'redux', 'css', 'flexbox', 'git', 'webpack', 'postgres', 'vscode', 'heroku', 'agile']
  }
]

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
  skills: ['JavaScript/ES6', 'Node', 'Express', 'Sequelize', 'React', 'Redux', 'HTML5', 'Flexbox', 'Git/Github', 'Webpack/Babel', 'Agile', 'Visual Studio Code', 'Postman', 'Axios', 'Excel', 'Heroku']
}, {
  level: 'familiar',
  skills: ['PostgreSQL', 'CSS3', 'Waffle', 'JSON', 'Bootstrap', 'Puppeteer', 'Python3', 'AWS', 'RegEx']
}]

const skillsByType = {
  languages: ['JavaScript/ES6', 'Python3', 'SQL'],
  frontend: ['React', 'Redux', 'HTML5', 'CSS3', 'Flexbox', 'Bootstrap', 'Webpack/Babel'],
  backend: ['Express', 'Sequelize', 'PostgreSQL'],
  data: ['Puppeteer', 'RegEx'],
  programs: ['Node', 'Git/Github', 'Visual Studio Code', 'Postman', 'Heroku', 'AWS'],
  nontechnical: ['Agile', 'Excel', 'Copyediting', 'Proofreading', 'French', 'Latin']
}




module.exports = {
  blogData,
  jobData,
  projectData,
  schoolData,
  skillsByLevel,
  skillsByType
}
