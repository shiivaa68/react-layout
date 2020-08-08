/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';

export function HomePage() {
  return (
    <article>
      <Helmet>
        <title>خانه</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div />
    </article>
  );
}

export default HomePage;
