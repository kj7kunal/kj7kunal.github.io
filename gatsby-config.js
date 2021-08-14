module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Kunal Jain',
    // Main Site Title
    title: `Kunal Jain | Machine Learning Engineer`,
    // Description that goes under your name in main bio
    description: `Machine Learning Engineer currently in Tokyo, Japan`,
    // Optional: Twitter account handle
    author: `@kj7kunal`,
    // Optional: Github account URL
    github: `https://github.com/kj7kunal`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/kj7kunal`,
    // Content of the About Me section
    about: `I'm a motivated machine learning engineer who has experienced building ML models and applying AI to supplement various products and services. I'm passionate about working in challenging and high-impact environments, and building automation pipelines that help save human time and effort. I take up pet projects actively and I recently started competitive programming for interviewing.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Devfolio',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'ChromeExtensionKit',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Visional Inc. (formerly BizReach Inc.)',
        description: 'Machine Learning Engineer, October 2019 - Present',
        link: 'https://www.visional.inc/ja/index.html',
      },
      {
        name: 'Nanyang Technological University, Singapore',
        description: 'Summer Research Internship, May 2018 - July 2018',
        link: 'https://www.ntu.edu.sg/rose',
      },
      {
        name: 'ISRO Satellite Centre, Bangalore',
        description: 'Summer Research Internship, May 2017 - July 2017',
        link: 'https://www.ursc.gov.in/',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    education: [
      {
        name: 'Indian Institute of Technology Kharagpur',
        description: '[Dual (B.Tech + M.Tech.)] Aerospace Engineering | [Minor] Computer Science and Engineering | 2014 - 2019',
        link: 'http://www.iitkgp.ac.in/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
