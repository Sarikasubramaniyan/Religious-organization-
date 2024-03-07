import React, { useState } from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
/* import { Link } from 'react-router-dom';  */

function Home() {
    const [showDonationForm, setShowDonationForm] = useState(false);
    const [showMakeDonation, setShowMakeDonation] = useState(false);

    const toggleDonationForm = () => {
        setShowDonationForm(!showDonationForm);
    };

    const toggleMakeDonation = () => {
        setShowMakeDonation(!showMakeDonation);
    };

    return (
        <div className="home-container">
            <>
                {/* home */}
                <section className="header">
                    <div className="nav">
                        <div className="logo"><h1>ஸ்ரீ<b>ரங்கம்</b></h1></div>
                        <nav className="fixed-nav">
                            <ul>
                                <li><a href="#home">HOME</a></li>
                                <li><a href="#about">ABOUT</a></li>
                                <li><a href="#donation">DONATION</a></li>
                                <li><a href="#events">EVENTS</a></li>
                                <li><a href="#contact">CONTACT</a></li>
                            </ul>
                        </nav>
                    </div>
                </section>
                <section id="home" className="grid">
                    <div className="content">
                        <div className="content-left">
                            <div className="info">
                                <h2>Welcome to our temple</h2>
                                <p>Srirangam is one of the largest and most revered temples dedicated to Lord Vishnu, known for its architectural grandeur and religious significance.</p>
                            </div>
                            <button>Discover more about Srirangam</button>
                        </div>
                    </div>
                </section>

                {/* about */}
                {/*<section id="about" className="grad">
                    <div className="content">
                        {/*<div className="img">
                        <img src="/src/img/srirangaa.jpg" alt="Srirangam Temple" />
                         </div>*/}
                        {/*<div className="content-right">
                            <div className="info">
                                <h2>Srirangam Temple Tiruchirappalli</h2>
                                <h1>Visiting the Ranganathaswamy temple can be a fascinating experience for history enthusiasts as well as devotees.</h1>
                                <ul>
                                    <li>It is a very old temple. More than 1100 years old. </li>
                                    <li>This temple is also known as Thiruvaranga Tirupati, Periyakoil, Bhoologa Vaikundam, and Bhogamandabam. </li>
                                    <li>This temple includes various forms of Lord Vishnu and Goddess Lakshmi as well as religious scholars and Alwar or Bhakthi poet saints.</li>
                                    <li>The temple has 17 major gopurams (towers, 21 total), 39 pavilions, 50 shrines, 9 sacred water pools, Ayiram kaal mandapam (a hall of 1000 pillars), and several small water bodies inside.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section> */}
<section id="about" class="grad">
  <div class="content">
    {/*<div class="img">
      <img src="/src/img/srirangaa.jpg" alt="Srirangam Temple" />
    </div>*/}
    <div class="content-right">
      <div class="info">
        <h2>Srirangam Temple Tiruchirappalli</h2>
        <h1>Visiting the Ranganathaswamy temple can be a fascinating experience for history enthusiasts as well as devotees.</h1>
        <ul>
          <li>It is a very old temple. More than 1100 years old. </li>
          <li>This temple is also known as Thiruvaranga Tirupati, Periyakoil, Bhoologa Vaikundam, and Bhogamandabam. </li>
          <li>This temple includes various forms of Lord Vishnu and Goddess Lakshmi as well as religious scholars and Alwar or Bhakthi poet saints.</li>
          <li>The temple has 17 major gopurams (towers, 21 total), 39 pavilions, 50 shrines, 9 sacred water pools, Ayiram kaal mandapam (a hall of 1000 pillars), and several small water bodies inside.</li>
        </ul>
      </div>
    </div>
  </div>
</section>





                {/* donation */}
                <section id="donation" className="grbd">
                    <div className="donate">
                        <h3>DONATION</h3>
                        <h2>CHARITABLE ACTIVITY</h2>

                        <h4>"In giving, we receive. Your donation to our temple strengthens our spiritual foundation and supports the growth of our community."</h4>

                        <div className="card-list">
                            <div className="card">
                                <div className="food-title">
                                    <h1>GENERAL DONATION</h1>
                                </div>
                                <div className="desc-food">
                                    <p>For Maintenance and Upkeep,<br />Pooja Supplies and Ritual Offerings,<br />
                                        Temple Operations and Community Services.</p>
                                </div>
                                <div className="price">
                                  <button onClick={toggleDonationForm}>Donate Now <i>&rarr;</i></button>
                                   <a href="/Dn1" target="_blank">Donate Now</a>
                                {/* <Link to="/Dn1">Donate Now</Link> */}
                
                                </div>
                            </div>
                            <div className="card">
                                <div className="food-title">
                                    <h1>RENOVATION DONATION</h1>
                                </div>
                                <div className="desc-food">
                                    <p>For Structural Repairs,<br />Preservation of Sacred Spaces,<br />Upgrade of Facilities and Accessibility Improvements.</p>
                                </div>
                                <div className="price">
                               {/*  <Link to="/dn2.js">Donate Now <i>&rarr;</i></Link> */}
                                    <button onClick={toggleMakeDonation}> Donate Now<i>&rarr;</i></button>
                                    {/*<a href="/Dn2">Donate Now</a> */}
                                     <a href="/Dn2" target="_blank">Donate Now</a> 
                             {/*       <Link to="/Dn2">Donate Now</Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                 
                {/* events */}
                <section id="events" className="grcd">
  <div className="event">
    <h3>EVENTS</h3>
    <h2>"Within the walls of the temple, every event carries the fragrance of devotion and the melody of unity."</h2>
    <div className="card-list">
      <div className="card">
        <div className="food-title">
          <h1>Sri Jayanthi</h1>
        </div>
        <div className="desc-food">
          <p>The festival sees birthday celebrations for all forms of Lord Vishnu that reside within the temple complex.<br /> With the temple home to 81 shrines, most of these dedicated to Lord Vishnu.</p>
        </div>
      </div>
      <div className="card">
        <div className="food-title">
          <h1>Ekadesi</h1>
        </div>
        <div className="desc-food">
          <p>A 21-day festival,it falls between December and January to fall under the Margazhi month as per the Tamil calendar.On the main day, Lord Ranganatha Swamy comes out of his sanctum and participates in a spectacular procession.</p>
        </div>
      </div>
      <div className="card">
        <div className="food-title">
          <h1>Chithirai Ther</h1>
        </div>
        <div className="desc-food">
          <p>A festival established in the 13th century, it commemorates the renovation of the temple from a donation of 17,000 gold coins by a Vijayanagara king.This was following its invasion and dilapidation by foreign rulers.it is a nine-day long festival.</p>
        </div>
      </div>
      <div className="card">
        <div className="food-title">
          <h1>Ratothsavam</h1>
        </div>
        <div className="desc-food">
          <p>Another big festival that guests must look out for is the Ratothsavam or the annual temple chariot festival.<br />Celebrating between January and February to coincide with the Thai month as per the Tamil calendar.</p>
        </div>
      </div>
      <div className="card">
        <div className="food-title">
          <h1>Vasantotsavam</h1>
        </div>
        <div className="desc-food">
          <p>This festival is celebrated in the month of Vaikaasi ( May-June).Vasanthotsavam starts 8 days before the Pournami.On the first and seventh day of the festival, Lord Ranganaatha is accompanied by Goddess Sridevi and Bhudevi.</p>
        </div>
      </div>
      <div className="card">
        <div className="food-title">
          <h1>Navaraatri Utsavam</h1>
        </div>
        <div className="desc-food">
          <p>This takes place in the month of Purattaasi at Sri Ranga Naachiyaar Sanctum Andaal will play tricks like dancing with one leg and will also play a mouth organ.</p>
        </div>
      </div>
    </div>
  </div>
</section>

                {/* contact */}
                
                <section id="contact" class="grud">
    <div className="list">
        <div class="temple">
            <h3>SRIRANGAM</h3>
            <h2>Contact Srirangam Temple <br />
                Joint Commissioner / Executive Officer,<br />
                Sri Ranganathaswamy Temple,<br />
                Srirangam, Tiruchirappalli – 620 006.,<br />
                Tamil Nadu, India.
            </h2>
        </div>
        <div class="temple">
            <h3>POOJA DETAILS</h3>
            <h2>Viswaroobam seva: 06.00 - 07.15<br />
                pooja time: 07.15 - 09.00<br />
                Pooja time(No seva): 12:00 - 13:15 <br />
                Seva: 13:15 - 18.00
            </h2>
        </div>
        <div class="temple">
            <h3>OVERVIEW</h3>
            <h2>
                About Temple<br />
                Architecture<br />
                Service<br />
                Lord Vishnu<br />
            </h2>
        </div>
        <div className="temple">
            <h3>CONTACT US</h3>
            <h2>
            <span className="icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                   <span>Tiruchirappalli, Tamilnadu</span> <br/>
            <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                    <span>Srirangamtemple@gmail.com</span> <br />
                
                <span className="icon"><FontAwesomeIcon icon={faPhone} /></span> <span>04312432246</span>
            </h2>
            <div className="websites">
                <span className="icon"> <FontAwesomeIcon icon={faFacebook}/> </span>
                <span className="icon"> <FontAwesomeIcon icon={faInstagram}/> </span>
                <span className="icon"> <FontAwesomeIcon icon={faYoutube} /> </span>
            </div>
        </div>
    </div>
</section>

                <footer>
                    <p>&copy; 2024 sarikasubramaniyan website. All rights reserved.</p>
                </footer>
            </>

        </div>
    );
}

export default Home;
