import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me" link="/blog/more-about">
      <div className="mb-6">
        <p>
          {about} <a class='text-gray-400 hover:text-blue-500 hover:underline' href={`/blog/more-about`}>Learn More</a>
        </p>
      </div>
    </Section>
  );
};

export default SectionAbout;
