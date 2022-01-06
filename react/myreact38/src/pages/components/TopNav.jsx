import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todos">todos</Link>
        </li>

        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
        <li>
          <Link to="/Counter">Counter</Link>
        </li>
      </ul>
    </div>
  );
}

export default TopNav;
