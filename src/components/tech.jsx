import React from 'react';
import Slide from 'react-reveal/Slide';

const Tech = () => {
  return (
    <div id="tech" className="tech">
      <h1>Tech stack</h1>
      <Slide right big>
        <ul id="stack">
          <li><img src="https://cdn.svgporn.com/logos/ruby.svg" alt="Ruby Icon" /> </li>
          <li><img src="https://cdn.svgporn.com/logos/rails.svg" alt="Rails Icon" /></li>
          <li><img src="https://cdn.svgporn.com/logos/postgresql.svg" alt="PostgreSQL Icon" /></li>
          <li><img src="https://cdn.svgporn.com/logos/sqlite.svg" alt="SQlite Icon" /></li>
          <li><img src="https://cdn.svgporn.com/logos/github-icon.svg" alt="Github Icon" /></li>
          <li><img src="https://cdn.svgporn.com/logos/gitlab.svg" alt="Gitlab Icon" /></li>
          <li><img src="https://cdn.svgporn.com/logos/javascript.svg" alt="JavaScript Icon" /></li>
          <li><img src="https://cdn.svgporn.com/logos/html-5.svg" alt="HTML 5 Icon" /></li>
          <li><img src="https://cdn.svgporn.com/logos/react.svg" alt="React Icon" /></li>
          <li><img src="https://cdn.svgporn.com/logos/css-3.svg" alt="CSS Icon" /></li>
          <li><img src="https://cdn.svgporn.com/logos/sass.svg" alt="Sass Icon" /></li>
          <li><img src="https://cdn.svgporn.com/logos/figma.svg" alt="Figma Icon" /></li>
          <li><img src="https://cdn.svgporn.com/logos/heroku-icon.svg" alt="Heroku Icon" /></li>
        </ul>
      </Slide>
    </div>
  )
}

export default Tech;