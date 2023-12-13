import React from 'react';
import { useParams, Link } from 'react-router-dom';

function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const company = companies.find(c => c.slug === companySlug);

  if (!company) {
    return <div>Company not found.</div>;
  }

  return (
    <div>
      <h1>{company.name}</h1>
      <a href={company.website} target='_blank' rel='noopener noreferrer'>
        {company.website}
      </a>
      <p>{company.description}</p>
      <img src={company.logo} alt={`${company.name} Logo`} />
      <h2>Tech Stack</h2>
      <ul>
        {company.technologies.map(tech => (
          <li key={tech.slug}>
            <Link to={`/tech/${tech.slug}?company=${company.slug}`}>
              <img src={tech.image} alt={tech.name} />
              {tech.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyPage;
