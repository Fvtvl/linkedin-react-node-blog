import { useEffect, useState } from 'react';
import axios from 'axios';

const initialInfo = {
  upvotes: 0,
  comments: [],
  canUpvote: false,
};

export const useFetchArticles = (articleId, user, loading) => {
  const [articleInfo, setArticleInfo] = useState(initialInfo);

  const addUpvote = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};
    const response = await axios.put(
      `/api/articles/${articleId}/upvote`,
      null,
      { headers }
    );
    setArticleInfo(response.data);
  };

  useEffect(() => {
    const loadArticleInfo = async () => {
      const token = user && (await user.getIdToken());
      console.log('loadArticleInfo  user:', user);
      const headers = token ? { authtoken: token } : {};
      const response = await axios.get(`/api/articles/${articleId}`, {
        headers,
      });

      setArticleInfo(response.data);
    };
    if (!loading) {
      loadArticleInfo();
    }
  }, [articleId, user, loading]);
  return { articleInfo, setArticleInfo, addUpvote };
};
