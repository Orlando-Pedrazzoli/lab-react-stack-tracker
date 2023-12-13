import React from 'react';
import { Link } from 'react-router-dom';

function HomePage({ companies }) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul>
        {companies.map(company => (
          <li key={company.slug}>
            <Link to={`/company/${company.slug}`}>
              <img
                src={company.logo}
                alt={company.name}
                style={{ width: '50px', height: '50px' }}
              />
              {company.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
