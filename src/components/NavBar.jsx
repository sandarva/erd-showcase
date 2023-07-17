import { HashLink as Link } from 'react-router-hash-link'

const NavBar = ({ data }) => {
  return (
    <nav>
      <ul className="nav__list">
        {
          data.map(item => {
            return (
              <li className='nav__item' key={item.id}>
                <Link to={`#${item.id}`} smooth className='nav__link'>{item.title}</Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default NavBar