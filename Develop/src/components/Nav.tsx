// src/components/Nav.tsx
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav" style={{ padding: '1em 2em' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'active nav-link' : 'nav-link'
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/SavedCandidates"
            className={({ isActive }) =>
              isActive ? 'active nav-link' : 'nav-link'
            }
          >
            Potential Candidates
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
