import React from 'react';

import Section from '../section';
import SummaryItemList from '../summary-item-list';

const SectionEducation = ({ education }) => {
  if (!education.length) return null;

  return (
    <Section title="Education">
      {education.map((item) => (
        <SummaryItemList
          key={item.name}
          name={item.name}
          description={item.description}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionEducation;
