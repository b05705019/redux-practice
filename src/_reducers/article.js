import { CallToActionSharp } from "@material-ui/icons"

const selectedArticle = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ARTICLE':
      {
        return {
          id: action.article.articleId,
          title: action.article.articleTitle
        }
      }
    default: 
      return state
  }
}

export default selectedArticle