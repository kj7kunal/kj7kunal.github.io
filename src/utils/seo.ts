/**
 * Calculate estimated reading time for text content
 * @param text - The text content to analyze
 * @param wordsPerMinute - Average reading speed (default: 200 WPM)
 * @returns Reading time in minutes (rounded up)
 */
export function calculateReadingTime(text: string, wordsPerMinute: number = 200): number {
  // Remove markdown syntax and count words
  const cleanText = text
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\[.*?\]\(.*?\)/g, '') // Remove links
    .replace(/#{1,6}\s+/g, '') // Remove headers
    .replace(/[*_~`]/g, '') // Remove formatting
    .replace(/\n/g, ' '); // Replace newlines with spaces
  
  const wordCount = cleanText.trim().split(/\s+/).filter(word => word.length > 0).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Extract keywords from text content for SEO
 * @param text - The text content to analyze
 * @param maxKeywords - Maximum number of keywords to return
 * @returns Array of relevant keywords
 */
export function extractKeywords(text: string, maxKeywords: number = 10): string[] {
  // Common stop words to filter out
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
    'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
    'will', 'would', 'could', 'should', 'may', 'might', 'can', 'this', 'that', 'these', 'those',
    'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them', 'my', 'your',
    'his', 'her', 'its', 'our', 'their', 'about', 'into', 'through', 'during', 'before', 'after',
    'above', 'below', 'up', 'down', 'out', 'off', 'over', 'under', 'again', 'further', 'then', 'once'
  ]);
  
  const cleanText = text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  const words = cleanText.split(' ');
  const wordCount: { [key: string]: number } = {};
  
  // Count word frequency
  words.forEach(word => {
    if (word.length > 3 && !stopWords.has(word)) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  });
  
  // Sort by frequency and return top keywords
  return Object.entries(wordCount)
    .sort(([,a], [,b]) => b - a)
    .slice(0, maxKeywords)
    .map(([word]) => word);
}
