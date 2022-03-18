import React from 'react';

export default function Footer() {
  return (
    <section id="contact-me" class="contact">
    <div class="block-header"><h2>Robert C.</h2></div>
    <div class="contact-info">
      <a href="https://www.linkedin.com/in/robert/"><img src={require(`../../assets/images/linkedin.png`)} alt=""/></a>
      <a href="https:github.com/texrob20/"><img src={require(`../../assets/images/github.png`)} alt=""/></a>
      <a href="https://stackoverflow.com/users/16805159/robert"><img src={require(`../../assets/images/stackoverflow.png`)} alt=""/></a>
    </div>
    <div>
      <h5>&copy; 2022 Robert's Portfolio Page</h5>
    </div>
    </section>

  );
}