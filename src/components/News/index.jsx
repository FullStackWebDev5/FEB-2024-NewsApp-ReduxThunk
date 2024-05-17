import { useEffect } from 'react'
import './index.css'
import SingleNews from '../SingleNews'
import { useSelector, useDispatch } from 'react-redux'
import { fetchNews } from '../../actions/news'

function News() {
  const news = useSelector(store => store.news)
  const loading = useSelector(store => store.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNews())
  }, [])

  return (
    <div className='container'>
      <h1 id='page-heading'>BREAKING NEWS</h1>
      <div className='news-container'>
        {!loading ? 
          news.map((singleNews, index) => (
            <SingleNews key={index} singleNews={singleNews} />
          )) : 
        <img src='https://loading.io/assets/mod/spinner/spinner/lg.gif' alt='loading' style={{ height: '60vh' }} />}
      </div>
    </div>
  )
}

export default News