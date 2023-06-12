import {Link} from 'react-router-dom'

import './index.css'

const MovieItems = props => {
  const {eachMovie} = props
  const {posterPath, title, id} = eachMovie

  return (
    <li>
      <Link to={`/movies/${id}`}>
        <img className="popular-img" alt={title} src={posterPath} />
      </Link>
    </li>
  )
}
export default MovieItems
