import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <>
    <section className='header-section'>
      {/* <div className='header-image-container'>
        <img className='header-image' src='/images/bg-pattern-intro-desktop.svg'></img>
      </div>
       */}
      <div className='header-content'>
        <Navbar />
        <div className='header-description'>
          <h1 className='header-title'>A modern publishing platform</h1>
          <p className='header-text'>Grow your audience and build your online brand</p>
          <div className='main-btns'>
            <div className='start-btn'>Start for Free</div>
            <div className='learn-more-btn'>Learn More</div>
          </div>
        </div>
        
        
      </div>
    </section>
    <section className='design-section'>
      <h1 className='design-title'>Designed for the future</h1>
      <div className='design-container'>
        <div className='design-intro-container'>
          <h2 className='design-intro-title'>Introducing an extensible editor</h2>
          <p className='design-intro-text'>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
change the looks of a blog.</p>
        </div>
        <div className='design-content-container'>
          <h2 className='design-content-title'>Robust content management</h2>
          <p className='design-content-text'>Flexible content management enables users to easily move through posts. Increase the usability of your blog 
by adding customized categories, sections, format, or flow. With this functionality, you're in full control.</p>
        </div>
       </div>
    </section>
    <section className='ai-section'>
      <img className='ai-img' src='/images/illustration-phones.svg'></img>
      <div className='ai-content'>
        <h1  className='ai-title'>State of the Art Infrastructure</h1>
        <p className='ai-text'>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
</p>
      </div>
    </section>
    <section className='description-section'>
      <div className='description-container'>
        <div className='description-intro-container'>
          <h2 className='description-intro-title'>Free, open, simple</h2>
          <p className='description-intro-text'>Blogr is a free and open source application backed by a large community of helpful developers. It supports 
features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
</p>
        </div>
        <div className='description-power-container'>
          <h2 className='description-power-title'>Powerful tooling</h2>
          <p className='description-power-text'>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
capable of producing even the most complicated sites.</p>
        </div>
       </div>
    </section>

Product

Overview
Pricing
Marketplace
Features
Integrations

Company

About
Team
Blog
Careers

Connect

Contact
Newsletter
LinkedIn






Designed for the future

Introducing an extensible editor
Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
change the looks of a blog.

Robust content management
Flexible content management enables users to easily move through posts. Increase the usability of your blog 
by adding customized categories, sections, format, or flow. With this functionality, you're in full control.

State of the Art Infrastructure
With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.

Free, open, simple
Blogr is a free and open source application backed by a large community of helpful developers. It supports 
features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.

Powerful tooling
Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
capable of producing even the most complicated sites.

Product

Overview
Pricing
Marketplace
Features
Integrations

Company

About
Team
Blog
Careers

Connect

Contact
Newsletter
LinkedIn

<footer className="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
  Coded by <a href="#">Your Name Here</a>.
</footer>
    </>
  )
}

export default App
