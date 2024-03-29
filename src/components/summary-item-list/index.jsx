import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
};

const SummaryItemList = ({ name, description, link = false, internal = false }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-blue-500' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <div className={classes.description}>
        {description.map((item) => (
          <p>{item.text}</p>
        ))}
      </div>
    </div>
  );
};

export default SummaryItemList;
