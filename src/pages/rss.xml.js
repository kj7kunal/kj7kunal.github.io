import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  // Get all posts from all collections
  const lifeEntries = await getCollection('life');
  const experimentsEntries = await getCollection('experiments');
  const mlEntries = await getCollection('ml');
  
  // Combine all entries and transform them
  const allEntries = [
    ...lifeEntries.map(entry => ({
      ...entry,
      collection: 'life'
    })),
    ...experimentsEntries.map(entry => ({
      ...entry,
      collection: 'experiments'
    })),
    ...mlEntries.map(entry => ({
      ...entry,
      collection: 'ml'
    }))
  ];

  // Sort by date (newest first)
  const sortedEntries = allEntries.sort((a, b) => 
    new Date(b.data.date) - new Date(a.data.date)
  );

  return rss({
    title: 'Kunal Jain - Portfolio & Blog',
    description: 'Personal blog covering technology, machine learning, data science, and life experiences. Insights from my journey in tech, internships, and projects.',
    site: context.site,
    items: sortedEntries.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.date,
      description: entry.data.description,
      link: `/blog/${entry.slug}/`,
      categories: entry.data.tags || [],
    })),
    customData: `<language>en-us</language>`,
  });
}
