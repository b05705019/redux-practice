import './TitleCards.css'
import { useRouteMatch, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSelectedArticle } from '../_actions'
import React from 'react';

const Titles = (props) => {
  let { path } = useRouteMatch();

  const history = useHistory();
  const handleSelectArticle = (article) => {
    console.log('click')
    props.setSelectedArticle(article)
    history.push(`${path}/${article.articleTitle}`)
  }
  return (
    <div className="title-card-container">
      <div className="start-start flex-wrap">
        {props.articles.map((article, idx) => (
          <div key={idx} className="title-card-link" onClick={() => handleSelectArticle(article)}>
            <div className="title-card">
              {article.articleTitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedArticle: (article) => {
      dispatch(setSelectedArticle(article))
    }
  }
}

const TitleCards = connect(null, mapDispatchToProps)(Titles);

export default TitleCards;