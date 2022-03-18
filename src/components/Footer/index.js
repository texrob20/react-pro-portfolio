import React from 'react';

export default function Footer() {
  return (
    <section id="contact-me" class="contact">
    <div>
      <h5>&copy; 2022 Robert's Portfolio Page</h5>
    </div>
    <div class="contact-info">
      <a href="https://www.linkedin.com/in/robert/"><img src={require(`../../assets/images/linkedin.png`)} alt=""/></a>
      <a href="https:github.com/texrob20/"><img src={require(`../../assets/images/github.png`)} alt=""/></a>
      <a href="https://stackoverflow.com/users/16805159/robert"><img src={require(`../../assets/images/stackoverflow.png`)} alt=""/></a>
    </div>
    </section>
  );
}