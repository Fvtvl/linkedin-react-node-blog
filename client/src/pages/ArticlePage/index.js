import React from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from '../../components/CommentForm';
import CommentsList from '../../components/CommentsList';
import { useFetchArticles } from '../../hooks/useFetchArticles';
import { useUser } from '../../hooks/useUser';
import articles from '../article-content';
import NotFoundPage from '../NotFoundPage';

const ArticlePage = () => {
  const { articleId } = useParams();
  const { user, loading } = useUser();

  const { articleInfo, setArticleInfo, addUpvote } = useFetchArticles(
    articleId,
    user,
    loading
  );

  const article = articles.find((article) => article.name === articleId);

  if (!article) return <NotFoundPage />;

  return (
    <>
      <h1>{article.title}</h1>
      <div id="upvotes-section">
        {user ? (
          <button onClick={addUpvote}>
            {articleInfo.canUpvote ? 'Upvote' : 'Already Upvoted'}
          </button>
        ) : (
          <button>Log In to upvote</button>
        )}
        <p>{articleInfo.upvotes}</p>
      </div>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {user ? (
        <CommentForm
          articleId={articleId}
          onArticleUpdated={(updatedArticle) => setArticleInfo(updatedArticle)}
        />
      ) : (
        <button>Log In to add a comment</button>
      )}
      <CommentsList comments={articleInfo.comments} />
    </>
  );
};

export default ArticlePage;
