import React from 'react';

export default function Project() {
  return (
      <section id="work" class="work">
      <h1>Web Development Projects Portfolio</h1>
      <div class="projects">
        <article class="project">
          <a href="https://texrob20.github.io/run-buddy/"><img src={require(`../../assets/images/project-1.jpg`)} alt="" /></a>
          <div class="project-info">
            <h3>Run Buddy</h3>
            <h4>Responsive Web Design</h4>
          </div>
        </article>
    
        <article class="project">
          <a href="https://texrob20.github.io/robot-gladiators/"><img src={require(`../../assets/images/project-3.jpg`)} alt="" /></a>
          <div class="project-info">
            <h3>Robot Gladiators</h3>
            <h4>Javascript Game</h4>
          </div>
         </article>
    
        <article class="project">
          <a href="https://github.com/mikebashford/personal-crypto-tracker"><img src={require(`../../assets/images/project-4.jpg`)} alt="" /></a>
           <div class="project-info">
             <h3>Personal Crypto Tracker</h3>
             <h4>Interactive Front End</h4>
           </div>
         </article>

         <article class="project">
          <a href="https://github.com/texrob20/techie-blog"><img src={require(`../../assets/images/project-5.jpg`)} alt="" /></a>
          <div class="project-info">
            <h3>Techie Blog</h3>
            <h4>MVC Wordpress Style Site</h4>
          </div>
        </article>

        <article class="project">
          <a href="https://github.com/JohnPac15/PIA-website"><img src={require(`../../assets/images/project-6.jpg`)} alt="" /></a>
          <div class="project-info">
            <h3>PIA Website</h3>
            <h4>Insurance site demonstrating MVC concepts </h4>
          </div>
        </article>

        <article class="project">
          <a href="https://github.com/texrob20/social-network-backend/"><img src={require(`../../assets/images/project-2.jpg`)} alt="" /></a>
          <div class="project-info">
            <h3>Social Network Backend</h3>
            <h4>NoSQL Database</h4>
          </div>
        </article>
    
        <article class="project">
          <a href="https://github.com/texrob20/my-budget-tracker/"><img src={require(`../../assets/images/project-3.jpg`)} alt="" /></a>
          <div class="project-info">
            <h3>My Budget Tracker</h3>
            <h4>PWA Demo</h4>
          </div>
        </article>

        <article class="project">
          <a href="https://github.com/texrob20/photo-port/"><img src={require(`../../assets/images/project-4.jpg`)} alt="" /></a>
          <div class="project-info">
            <h3>Photo Portfolio</h3>
            <h4>React Demo</h4>
          </div>
        </article>

        <article class="project">
          <a href="https://github.com/JohnPac15/babble-app/"><img src={require(`../../assets/images/project-5.jpg`)} alt="" /></a>
          <div class="project-info">
            <h3>Babble App</h3>
            <h4>MERN</h4>
          </div>
        </article>
      </div>
    </section>
  );
}