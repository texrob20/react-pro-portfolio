# React Pro Portfolio
GIVEN a single-page application portfolio for a web developer:
- WHEN I load the portfolio THEN I am presented with a page containing a header, a section for content, and a footer
- WHEN I view the header THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
- WHEN I view the navigation titles THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
- WHEN I click on a navigation title THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
- WHEN I load the portfolio the first time THEN the About Me title and section are selected by default
- WHEN I am presented with the About Me section THEN I see a recent photo or avatar of the developer and a short bio about them
- WHEN I am presented with the Portfolio section THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
- WHEN I am presented with the Contact section THEN I see a contact form with fields for a name, an email address, and a message
- WHEN I move my cursor out of one of the form fields without entering text THEN I receive a notification that this field is required
- WHEN I enter text into the email address field THEN I receive a notification if I have entered an invalid email address
- WHEN I am presented with the Resume section THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
- WHEN I view the footer THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 

## Built With:
- Nodejs
  - React
  - JSX
- HTML
- CSS (Bootstrap)

## Site Overview
The site showcases the techniques used during the bootcamp using React to create a single page application.

### Header
The header inclues the navigation tabs and a short description of the portfolio.

### About
The about section provides an avatar and a brief overview of who I am.

### Resume
The resume section includes a list of skills learned during the bootcamp and a link to download a generic resume.

### Projects
The project section provides icons and short descriptions of some of the projects that highlight the skills learned in the bootcamp.  Each icon includes a link to the GitHub repo.

### Contact
The contact form is not functional but does support error checking of the email address.  In addition, it checks to see if data has been entered into each field and notifies the user that input is required after the user moves away from that field.

### Footer
The footer contains links to my LinkedIn, GitHub, and Stack Overflow profiles.

## Deployed Application
The application is deployed here: https://github.io/

## Demo
<img src=https://github.com/texrob20/react-pro-portfolio/blob/main/demo/react-pp-demo1.png>
<img src=https://github.com/texrob20/react-pro-portfolio/blob/main/demo/react-pp-demo2.png>
<img src=https://github.com/texrob20/react-pro-portfolio/blob/main/demo/react-pp-demo3.png>
<img src=https://github.com/texrob20/react-pro-portfolio/blob/main/demo/react-pp-demo4.png>