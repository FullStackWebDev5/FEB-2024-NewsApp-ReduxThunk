import './index.css'

function SingleNews({ singleNews }) {
  const { title, description, urlToImage, publishedAt, author, url } = singleNews;
  const defaultNewsImageURL = 'https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png'
  return (
    <div className='news-card'>
      <img className='news-img' src={urlToImage || defaultNewsImageURL} alt='img-url' />
      <div className='news-content'>
        <p className='news-title'>{title}</p>
        <p className='news-description'>{description}</p>
        <p className='news-info'>Reported by: {author} | Date: {publishedAt}</p>
        <a className='news-read-more' href={url} target='_blank'>Read more</a>
      </div>
    </div>
  )
}

export default SingleNews