import { Link } from 'gatsby';
import { OutboundLink } from "gatsby-plugin-google-analytics";
import get from 'lodash/get';
import React from 'react';

import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaBlog } from "@react-icons/all-files/fa/FaBlog";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaFileDownload } from "@react-icons/all-files/fa/FaFileDownload";

import profileImg from '../../images/profile.jpg';

const classes = {
  wrapper: 'block mb-6 md:flex',
  imageWrapper: 'w-full max-w-150',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20',
  name: 'text-5xl text-gray-900 font-bold leading-tight hover:text-black',
  description: 'text-gray-600',
  list: 'mt-6 uppercase tracking-wider',
  item: 'inline list-none pr-4',
  link:
    'inline-block py-2 font-semibold text-xs text-gray-600 hover:text-blue-500',
  icon:
    'inline-block py-2 font-semibold pr-5 text-lg text-gray-600 hover:text-blue-500',
};

const Header = ({ metadata = {}, noBlog = false }) => {
  const twitter = get(metadata, 'author', false);
  const github = get(metadata, 'github', false);
  const linkedin = get(metadata, 'linkedin', false);
  const resume = get(metadata, 'resume', false);
  const mail = get(metadata, 'mail', false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <Link to="/">
          <img className={classes.image} src={profileImg} alt={metadata.name} />
        </Link>
      </div>
      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link to="/">{metadata.name}</Link>
        </h1>
        <p className={classes.description}>{metadata.description}</p>
        {/* <ul className={classes.list}>
          {github && (
            <li className={classes.item}>
              <a className={classes.link} href={github}>
                GitHub
              </a>
            </li>
          )}
          {linkedin && (
            <li className={classes.item}>
              <a className={classes.link} href={linkedin}>
                LinkedIn
              </a>
            </li>
          )}
          {twitter && (
            <li className={classes.item}>
              <a
                className={classes.link}
                href={`https://twitter.com/${twitter}`}
              >
                Twitter
              </a>
            </li>
          )}
          {!noBlog && (
            <li className={classes.item}>
              <Link className={classes.link} to="/blog">
                Blog
              </Link>
            </li>
          )}
          {resume && (
            <li className={classes.item}>
              <a className={classes.link} href={resume}>
                Resume
              </a>
            </li>
          )}
        </ul> */}
        <ul className={classes.list}>
          {github && (
            <li className={classes.item}>
              <OutboundLink 
                className={classes.icon} 
                href={github} 
                target="_blank"
                eventLabel="github"
              >
                <FaGithub />
              </OutboundLink>
            </li>
          )}
          {linkedin && (
            <li className={classes.item}>
              <OutboundLink 
                className={classes.icon} 
                href={linkedin}
                target="_blank"
                eventLabel="linkedin"
              >
                <FaLinkedin />
              </OutboundLink>
            </li>
          )}
          {mail && (
            <li className={classes.item}>
              <a className={classes.icon}
                href={`mailto:${mail}`}
              >
                <FaEnvelope />
              </a>
            </li>
          )}
          {twitter && (
            <li className={classes.item}>
              <OutboundLink
                className={classes.icon}
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                eventLabel="twitter"
              >
                <FaTwitter />
              </OutboundLink>
            </li>
          )}
          {!noBlog && (
            <li className={classes.item}>
              <Link className={classes.icon} to="/blog">
                <FaBlog />
              </Link>
            </li>
          )}
          {resume && (
            <li className={classes.item}>
              <OutboundLink 
                className={classes.icon} 
                href={resume}
                target="_blank"
                eventLabel="resume"
              >
                <FaFileDownload />
              </OutboundLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
