module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://kj7kunal.github.io/`,
    // Your Name
    name: 'Kunal Jain',
    // Main Site Title
    title: `Kunal Jain | Machine Learning Engineer`,
    // Description that goes under your name in main bio
    description: `Machine Learning Engineer currently in Tokyo, Japan`,
    // Optional: Twitter account handle
    author: `kj7kunal`,
    // Optional: Github account URL
    github: `https://github.com/kj7kunal`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/kj7kunal`,
    // Optional: Resume URL
    resume: `https://tinyurl.com/kunaljainresume`,
    // Optional: Email ID
    mail: `kjkunal7996@gmail.com`,
    // Content of the About Me section
    about: `I'm a Machine Learning Engineer passionate about working in challenging and high-impact environments, and building automation pipelines that help save human time and effort. I love investigating new cutting-edge technologies and spending caffeinated lofi evenings implementing them in my personal projects. In my free time, I like to go long-distance running, visit coffee shops or learn the piano!`,
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Visional Inc. (formerly BizReach Inc.)',
        description: 'Machine Learning Engineer, October 2019 - Present',
        link: '/blog/2021-visional',
      },
      {
        name: 'Nanyang Technological University, Singapore',
        description: 'Summer Research Internship, May 2018 - July 2018',
        link: '/blog/2018-ntu-intern',
      },
      {
        name: 'ISRO Satellite Centre, Bangalore',
        description: 'Summer Research Internship, May 2017 - July 2017',
        link: '/blog/2017-isro-intern',
      },
    ],
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'E-Medic',
        description:
          'A WhatsApp chatbot for contact-less consultation booking and healthcare management during Covid-19',
        link: 'https://github.com/kj7kunal/e-med',
      },
      {
        name: 'Pokemon Go Social',
        description:
          'A fun conceptualization of a social networking app for Pokemon GO',
        link: 'https://github.com/kj7kunal/Pokemon-Go-Social',
      },
      {
        name: 'Guess The Doodle',
        description:
          'An instagram filter that challenges you to guess the doodle before it finishes drawing',
        link: 'https://github.com/kj7kunal/GuessTheDoodle',
      },
      {
        name: 'Newspaper Sudoku Solver',
        description:
          'Solve a Standard Sudoku by looking at it',
        link: 'https://github.com/kj7kunal/newspaper_sudoku_solver',
      },
    ],
    // Optional: List your education, they must have `name` and `description`. `link` is optional.
    education: [
      {
        name: 'Indian Institute of Technology Kharagpur',
        description: [
          {
            text: '[Dual (B.Tech + M.Tech.)] Aerospace Engineering, July 2014 - May 2019',
          },
          {
            text: '[Minor] Computer Science and Engineering',
          },
        ],
        link: 'http://www.iitkgp.ac.in/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, JavaScript (ES6+), PyTorch, pandas, OpenCV, Dialogflow, Node.js, Express.js, Vue.js, React',
      },
      {
        name: 'Databases & ORMs',
        description: 'MySQL, Sequelize',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), Heroku, API design, Agile / Scrum',
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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return {
                  title: node.frontmatter.title,
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                };
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Kunal Jain's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-193465086-1`, // Optional Google Analytics
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
