// SEO Configuration
export const SEO_CONFIG = {
  site: 'https://kj7kunal.github.io',
  siteName: 'Kunal Jain - ML Engineer',
  author: 'Kunal Jain',
  defaultTitle: 'Kunal Jain | Machine Learning Engineer',
  defaultDescription: 'Machine Learning Engineer based in Tokyo. Building AI solutions, exploring generative AI, and sharing insights on ML engineering, career growth, and life in Japan.',
  defaultImage: '/social.jpg',
  twitterHandle: '@kj7kunal',
  
  // Keywords for the main site
  primaryKeywords: [
    'machine learning engineer',
    'ai engineer tokyo',
    'ml engineering',
    'generative ai',
    'mlops',
    'computer vision',
    'llm fine-tuning',
    'data science',
    'python developer',
    'tensorflow',
    'pytorch',
    'career in japan',
    'tech blog'
  ],
  
  // Category-specific SEO
  categories: {
    life: {
      title: 'Life & Career',
      description: 'Personal stories, career insights, and life experiences as an ML Engineer in Tokyo',
      keywords: ['career', 'life in japan', 'tokyo', 'professional growth', 'work culture']
    },
    experiments: {
      title: 'Tech Experiments',
      description: 'Technical experiments, data visualizations, and programming explorations',
      keywords: ['data visualization', 'programming', 'experiments', 'coding projects', 'tech tutorials']
    },
    ml: {
      title: 'Machine Learning',
      description: 'Deep dives into ML engineering, research, and practical applications',
      keywords: ['machine learning', 'deep learning', 'mlops', 'ai research', 'model training']
    }
  },
  
  // Social links for structured data
  socialLinks: [
    'https://twitter.com/kj7kunal',
    'https://linkedin.com/in/kj7kunal',
    'https://github.com/kj7kunal'
  ],
  
  // Organization schema
  organization: {
    name: 'Kunal Jain - ML Engineer',
    url: 'https://kj7kunal.github.io',
    logo: 'https://kj7kunal.github.io/icon.png',
    foundingDate: '2019',
    email: 'contact@kj7kunal.github.io',
    description: 'Personal website and blog of Kunal Jain, Machine Learning Engineer based in Tokyo'
  }
};

// Helper function to generate category-specific meta
export function getCategoryMeta(category: string) {
  const categoryConfig = SEO_CONFIG.categories[category as keyof typeof SEO_CONFIG.categories];
  if (!categoryConfig) {
    return {
      title: 'Blog',
      description: 'Technical blog posts and insights',
      keywords: ['blog', 'technical writing']
    };
  }
  return categoryConfig;
}
