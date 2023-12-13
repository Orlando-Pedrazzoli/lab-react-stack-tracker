import React from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';

function TechnologyPage({ technologies }) {
  const { slug } = useParams();

  const [searchParams] = useSearchParams();
  const companySlug = searchParams.get('company');

  const technology = technologies.find(tech => tech.slug === slug);

  if (!technology) {
    return <div>Technology not found</div>;
  }

  return (
    <div>
      <h1>{technology.name}</h1>
      <img src={technology.logo} alt={`${technology.name} Logo`} />
      <p>Description: {technology.description}</p>

      {companySlug && (
        <p>
          <Link to={`/company/${companySlug}`}>Back to {companySlug}</Link>
        </p>
      )}
    </div>
  );
}

export default TechnologyPage;
