export const setSelectedArticle = (article) => {
  console.log('setArticleData: action', article)
  return {
    type: 'SET_ARTICLE',
    article
  }

}