import React from 'react';
import { Link } from "react-router-dom";

export default function createNav(entries, linkStyle, listStyle) {
  if (typeof entries !== 'object' || Array.isArray(entries)) {
    throw new Error('Element list must be defined in an object format.')
  }
  if (linkStyle && typeof linkStyle !== 'string') {
    throw new Error('Element styles must be defined in a string format.')
  }
  return (
    <ul className={listStyle}>
      {Object.entries(entries).map(([key, value]) => (
        <li key={key}>
          <Link to={`/session/${key}`} className={linkStyle}>
            {value}
          </Link>
        </li>
      ))}
    </ul>
  );
}