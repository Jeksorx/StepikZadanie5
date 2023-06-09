import React from 'react';

export default function Section({ name, logo, description }) {
  return (
    <section>
      <h3>{name}</h3>
      <img src={logo} alt={`${name} logo`} />
      <p>{description}</p>
    </section>
  );
}
