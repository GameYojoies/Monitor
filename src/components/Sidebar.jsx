import React from 'react';

function Sidebar({ activeLink, onLinkClick }) {
  const linkClass = (link) =>
    `block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded ${activeLink === link ? 'bg-gray-200' : ''}`;

  return (
    <nav className="w-64 bg-gray-100 p-4">
      <ul className="space-y-4">
        <li>
          <a
            href="#monitor"
            className={linkClass('Monitor')}
            onClick={() => onLinkClick('Monitor')}
          >
            Monitor
          </a>
        </li>
        <li>
          <a
            href="#home"
            className={linkClass('Home')}
            onClick={() => onLinkClick('Home')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#services"
            className={linkClass('Services')}
            onClick={() => onLinkClick('Services')}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={linkClass('About')}
            onClick={() => onLinkClick('About')}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={linkClass('Contact')}
            onClick={() => onLinkClick('Contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
