import React, { useEffect, useState } from 'react';

const HackerNewsTopArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopArticles = async () => {
      try {
        // Fetch the IDs of the top stories
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        const topStoriesIds = await response.json();

        // Get details for the first 10 stories
        const topTenStoriesPromises = topStoriesIds.slice(0, 10).map(id =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json())
        );

        const topTenStories = await Promise.all(topTenStoriesPromises);
        setArticles(topTenStories);
      } catch (error) {
        console.error('Error fetching top articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Top 10 Hacker News Articles</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id} style={{ marginBottom: '1em' }}>
            <h2>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h2>
            <p>{`Score:  ${article.score} by the author ${article.by}`}</p>
            {/* <span>
              <p>Score: {article.score}</p>
              <p>Author: {article.by}</p>
            </span> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HackerNewsTopArticles;
