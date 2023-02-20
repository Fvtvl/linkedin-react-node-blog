import React from 'react';
import ArticlesList from '../../components/ArticlesList/ArticleList';

import articles from '../article-content';

const ArticlesListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticlesList articles={articles} />
    </>
  );
};

export default ArticlesListPage;