module.exports = [{
  name: 'Portfolio Website',
  role: 'Engineer',
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
  imageUrl: 'https://i.imgur.com/MSeeALH.png',
  skills:
    [ 'js', 'node', 'express', 'react', 'html', 'css', 'grid', 'git', 'webpack', 'vscode', 'heroku', 'regex' ],
  priority: 1,
  slug: 'portfolio-website',
  keyName: 'portfolio-website-component',
  imgAlt: 'portfolio-website-thumbnail'
}, {
  name: 'Masks Google Plus Rescue',
  role: 'Engineer',
  paragraph:
    'Scraped, organized, and cleaned up data from a Google Plus community before Google pulled the plug on Plus. It went so well, we did the same for other communities run by the same game company!',
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
    [ 'js', 'node', 'git', 'puppeteer', 'vscode', 'json', 'regex' ],
  priority: 2,
  slug: 'masks-google-plus-rescue',
  keyName: 'masks-google-plus-rescue-component',
  imgAlt: 'masks-google-plus-rescue-thumbnail'
}, {
  name: 'Moodify',
  role: 'Fullstack Software Engineer',
  paragraph:
    "The user takes a selfie, or uploads a photo, which we then upload to Google Cloud Vision. Cloud Vision returns to us an image analysis object, which we run through our own home-brewed function (transforming Google's word data into numerical values, crunching them based on positivity or negativity and importance, and using a fixed-point radius to get a range for Spotify). This yields a search query that we pass to Spotify along with the relevant user data, permitting the user to play the songs and/or save the playlist to their account.",
  bullets:
    [ 'User takes or uploads a selfie, and receives a unique Spotify playlist matching the image’s mood',
      "Wrote/updated function mapping Google Cloud Vision's analysis object to a string for Spotify’s search" ],
  url: 'https://my-moodify.herokuapp.com',
  github: 'https://github.com/grape-emu/my-moodify',
  video: 'http://bit.ly/moodify-presentation',
  bestLink: 'http://bit.ly/moodify-presentation',
  imageUrl: 'https://i.imgur.com/Us7GTvX.png',
  skills:
    [ 'js', 'node', 'express', 'axios', 'postman', 'react', 'redux', 'css', 'git', 'webpack', 'vscode', 'heroku', 'agile' ],
  priority: 3,
  slug: 'moodify',
  keyName: 'moodify-component',
  imgAlt: 'moodify-thumbnail'
}, {
  name: 'Timelink Travel Services',
  role: 'Fullstack Software Engineer',
  paragraph:
    'Premise: our client had recently outgrown their etsy shop, and needed a functional e-commerce site that could display their wares.',
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
    [ 'js', 'node', 'express', 'axios', 'postman', 'sequelize', 'react', 'redux', 'css', 'flexbox', 'git', 'webpack', 'postgres', 'vscode', 'heroku', 'agile' ],
  priority: 4,
  slug: 'timelink-travel-services',
  keyName: 'timelink-travel-services-component',
  imgAlt: 'timelink-travel-services-thumbnail'
}, {
  name: 'Keeping Facebook Cheerful',
  role: 'Solo Engineer',
  paragraph:
    "Since I was a child, I've never liked politics; usually after an election, people calm down and start getting along again. But after the 2016 election, nobody calmed down. Rather than leaving facebook (and missing the delightful photos of my friends' babies and dogs), I instead started asking one question every day. Some are silly, some outlandish, some simply noncontroversial. People have really enjoyed having an oasis where nobody's confronting anybody, but I've asked over 800 questions by now! It seemed time to build an archive that people besides me could peruse.",
  bullets:
    [ 'Display of longstanding personal project, asking silly/creative questions daily',
      'Populating archive required scraping the DOM 800x in real time',
      'Future features: archive search by keyword, tag, date; display five random questions; submit suggestion',
      'Future script: scrape facebook daily, updating database and front page with latest question' ],
  github: 'https://github.com/feminaprovita/kfbc-website',
  video: 'http://bit.ly/kfbc',
  bestLink: 'http://bit.ly/kfbc',
  imageUrl: 'https://i.imgur.com/WReoK7h.png',
  skills:
    [ 'js', 'node', 'express', 'axios', 'sequelize', 'react', 'redux', 'css', 'flexbox', 'git', 'postgres', 'vscode', 'heroku', 'puppeteer', 'chalk' ],
  priority: 5,
  slug: 'keeping-facebook-cheerful',
  keyName: 'keeping-facebook-cheerful-component',
  imgAlt: 'keeping-facebook-cheerful-thumbnail'
}]
