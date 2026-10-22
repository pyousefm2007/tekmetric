
import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [showVideo, setShowVideo] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <div className="website">
      <header className="navbar">
        <a href="#" className="logo">
          <img src="/img.tik.svg" alt="Tekmetric Logo" />
        </a>

        <button
  className="mobile-menu-btn"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="فتح أو إغلاق القائمة"
  aria-expanded={menuOpen}
>
  {menuOpen ? "✕" : "☰"}
</button>


<nav className={`nav-links ${menuOpen ? "menu-open" : ""}`}>      
  <div className="nav-item">
    <a href="#product">
      PRODUCT <span className="arrow">⌄</span>
    </a>
    <div className="dropdown mega-dropdown five-columns">
      <div className="dropdown-column">
        <h4>Explore Products</h4>
         <a href="#features">Shop Management</a>
            <a href="#workflow">Multi-Shop Management</a>
             <a href="#estimates">Tire Management</a>
            <a href="#estimates">Payments</a>
          <a href="#estimates">Marketing</a>
      </div>

      <div className="dropdown-column">
        <h4>Run Your Shop</h4>
        <a href="#technicians">Digital Vehicle Inspections</a>
           <a href="#inspections">Estimate Building</a>
            <a href="#inventory">Parts & Inventory</a>
             <a href="#inventory">Reporting</a>
           <a href="#inventory">Tire Management</a>
         <a href="#inventory">Multi-Shop Management</a>
      </div>

      <div className="dropdown-column">
        <h4>Secure Payments</h4>
        <a href="#Payment Processing">Payment Processing</a>
           <a href="#Invoicing">Invoicing</a>
              <a href="#Text-to-Pay">Text-to-Pay</a>
             <a href="#Buy Now, Pay Later">Buy Now, Pay Later</a>
          <a href="#Capital Financing">Capital Financing</a>
       </div>
      <div className="dropdown-column">
        <h4>Engage Your Customers</h4>
        <a href="#Online Booking">Online Booking</a>
          <a href="#Automated Reminders">Automated Reminders</a>
            <a href="#Scheduled Campaigns">Scheduled Campaigns</a>
             <a href="#Two Way Texting">Two Way Texting</a>
           <a href="#Google Reviews">Google Reviews</a>
         <a href="#Websites">Websites</a>
      </div>
      <div className="dropdown-column">
        <h4>Shop Tools</h4>
        <a href="#Mobile App">Mobile App</a>
          <a href="#Integrations">Integrations</a>
        <a href="#ROI Calculator">ROI Calculator</a>
      </div>
    </div>
  </div>

  <div className="nav-item">
    <a href="#shop-types">
      SHOT TYPS<span className="arrow">⌄</span>
    </a>
    <div className="dropdown mega-dropdown three-columns">
      <div className="dropdown-column">
        <h4>INDEPENDENT AUTO REPAIR</h4>
        <p>With Tekmetric, you get a lifelong partner
          <br/> and the means to become better every
          <br/> single day.</p>

          <div className="dropdown-column">
        <h4>MULTI-LOCATION</h4>
        <p>With Tekmetric, you run consistent shops,<br/>
         grow profits faster, and scale with a partner<br/>
          you trust.</p>
      </div>
      </div>
      
      <div className="dropdown-column">
       <img src='https://cdn.prod.website-files.com/678cca1dba65076a9fd94f2d/678fd231073615318a9ab2e1_646d375d23b571cd5e48a289_hero.webp' alt=''></img>
        <a href="#transmission">How Garagisti Transformed Its<br/>
         Customer Experience with<br/>
          Tekmetric</a>
          <a href="#" class="read-more">
           <span>READ MORE</span>
          <span class="arrow-circle">↗</span>
         </a>
      </div>
      <div className="dropdown-column">
        <img src='https://cdn.prod.website-files.com/678cca1dba65076a9fd94f2d/678fd2319c8e6148abf0486c_64d1322c5aabdaa695580587_rush-automotive.webp' alt=''></img>
        <a href="#single-shop">How Rush Automotive's Enterprise <br/> Accelerated Their Growth with <br/> Tekmetric</a>
         <a href="#" class="read-more">
         <span>READ MORE</span>
          <span class="arrow-circle">↗</span>
        </a>
      </div>
    </div>
  </div>

  <div className="nav-item">
    <a href="#pricing">PRICING</a>
  </div>

  <div className="nav-item">
  <a href="#resources">
    RESOURCES <span className="arrow">⌄</span>
  </a>

  <div className="dropdown mega-dropdown three-columns">
    <div className="dropdown-column">
      <h4>BLOG</h4>
      <p>Thoughts, perspectives, and industry <br/> commentary from the Tekmetric editorial <br/> team.</p>
      <h4>WEBINARS</h4>
      <p>Webinars designed to keep you at the <br/> forefront of the auto repair industry.</p>
      <h4>LIVE EVENTS</h4>
      <p>Join us in person at top auto repair industry <br/> events and tradeshows!</p>
      <h4>CUSTOMER STORIES</h4>
      <p>Discover why auto repair shops across the <br/> nation rely on Tekmetric.</p>
    </div>

    <div className="dropdown-column">
      <h4>DOWNLOADS</h4>
       <p>The latest industry reports, actionable <br/> insights, and our own carefully crafted <br/> guides wait for you right here.</p>
     <h4>HELP CENTER</h4>
     <p>Peruse through our library to get Tekmetric <br/> up and running quickly.</p>
      <h4>UNDER THE LIFT</h4>
      <p>Stories from the automotive frontier. Watch <br/> the latest episode.</p>
       <h4>INTEGRATIONS</h4>
       <p>Tekmetric seamlessly integrates with your <br/> favorite business tools.</p>
    </div>

    <div className="dropdown-column">
      <h4>SUPPORT</h4>
      <p>Our dedicated support team is ready to help <br/> you keep things running smoothly and <br/> answer your questions.</p>
      <h4>REFER A FRIEND</h4>
      <p>Refer fellow auto repair shops for the <br/> chance to win prizes.</p>
      <h4>TEKMETRIC SHOP INDEX</h4>
      <p>See how you compare to thousands of <br/> shops in your state and nationwide.</p>
      <h4>PARTNERS</h4>
     <p>Making the automotive industry better one <br/> partnership at a time.</p>
    </div>
  </div>
</div>

  <div className="nav-item">
    <a href="#about">
      ABOUT <span className="arrow">⌄</span>
    </a>
    <div className="dropdown mega-dropdown three-columns">
      <div className="dropdown-column">
        <h4>ABOUT US</h4>
        <p>Empowering auto repair shops to deliver <br/> exceptional customer experiences.</p>
        <h4>LEADERSHIP</h4>
        <p>Our leadership team is at the forefront of <br/> driving innovation and creating lifelong <br/> connections with the auto repair industry.</p>
        <h4>CUSTOMER REVIEWS</h4>
        <p>Built by industry innovators, fueled by happy <br/> customers.</p>
      </div>
      <div className="dropdown-column">
        <h4>PRESS</h4>
        <p>Read the latest on Tekmetric and how we’re <br/> changing the industry.</p>
        <h4>CAREERS</h4>
        <p>We love to build—whether it’s our people, <br/> processes, technology, or relationships <br/> within the auto repair industry.</p>
        <h4>CONTACT US</h4>
        <p>Have questions about the product or need <br/> help? Our dedicated team is here to help.</p>
      </div>
      <div className="dropdown-column">       
        <img src='https://cdn.prod.website-files.com/67630d23fb8afbdf78cb8447/69e1388f60fa604ee099f952_Tektonic%2027%20Image_320x160px%20v3.png' alt=''></img>
        <a href="#" class="read-more">
         <span>TEKTONIC 2027</span>
          <span class="arrow-circle">↗</span>
          </a>
        </div>
      </div>
    </div>
  </nav>

    <div className="nav-actions">
       <button className="login-btn">LOGIN</button>
          <button className="started-btn">
         GET STARTED <span>↗</span>
       </button>
        </div>
      </header>

      <section className="hero">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video">
          <source src="/amazonaws.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-label">All-In-One AUTO REPAIR SOFTWARE</p>
          <h1>
            BRING EVERY PART OF YOUR Shop –
            <br />
           <span>TOGETHER</span>
       </h1>
          
    <div className="buttons-group">
     <button
    className="start-btn"
    onClick={() => setShowVideo(true)}>
    SEE THE PLATFORM <span>▶</span>
  </button>

  <button className="demo-btn">
    BOOK A FREE DEMO <span>↗</span>
  </button>
</div>
{showVideo && (
  <div
    className="video-modal"
    onClick={() => setShowVideo(false)}
  >
    <div
      className="video-modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="video-close"
        onClick={() => setShowVideo(false)}>
        ×
      </button>
      <iframe
        src="https://www.youtube.com/embed/I4JmVeW9Sxg?autoplay=1"
        title="Platform Video"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
)}


                  
 </div>
</section>

<section class="repair-section">
  <div class="container-fluid px-lg-5">
    <div class="row align-items-start intro-row">
      <div class="col-lg-5">
        <div class="repair-heading">
          <div className="repair-wave">〰</div>
          <h1>
            AUTO REPAIR.<br/>
            DONE RIGHT.
          </h1>
        </div>
      </div>

      <div class="col-lg-7">
        <div class="repair-description">
          <p>At Tekmetric, we believe auto repair shops deserve more
            than disconnected tools. That’s <br/> why we built the
            industry-leading shop management software trusted by
            more than 16,000 <br/> shops nationwide.</p>
          <p> With Tekmetric, you can run your shop, get paid, and keep
            customers coming back — all <br/> from the same auto repair
            software. One login. One partner.</p>
        </div>
      </div>
    </div>

    <div class="row feature-row">
      <div class="col-lg-4 col-md-4">
        <a href="#" class="feature-card card-orange">
          <span className="feature-icon">📈</span>
          <span class="feature-label">RUN YOUR SHOP</span>
        </a>
      </div>

      <div class="col-lg-4 col-md-4">
        <a href="#" class="feature-card card-yellow">
          <svg class="feature-icon dollar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34 10 H17 C7 10 7 23 17 23 H29 C40 23 40 37 29 37 H11" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"/>
            <path d="M23 5 V43" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"/>
          </svg>
          <span class="feature-label">SECURE PAYMENTS</span>
        </a>
      </div>

      <div class="col-lg-4 col-md-4">
        <a href="#" class="feature-card card-blue">
          <svg class="feature-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 22 L19 10 L25 16 L20 21 L25 26 L30 21 L35 26 L23 38 L18 33 L13 28 Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            <path d="M24 11 L29 6 L42 19 L29 32 M20 21 L28 29 M16 25 L24 33" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          </svg>
          <span class="feature-label">
            ENGAGE YOUR CUSTOMERS
          </span>
        </a>
      </div>
    </div>
  </div>
</section>









</div>
  );
}

export default App;
