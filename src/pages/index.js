import React from 'react';
import { Link } from 'gatsby';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import logodog from '../assets/images/logo-dog.jpg';
import pic1 from '../assets/images/9.jpg';
import pic2 from '../assets/images/5.jpg';
import pic3 from '../assets/images/59.jpg';
import banner from '../assets/images/12.jpg';
import renderbox from '../assets/images/renderbox.jpg';
import render from '../assets/images/render.jpg';
import chair from '../assets/images/chair.jpg';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            We help our customers to physically realice their ideas, from a thought or dream to realitity.
            <br />
          </h2>
          <p>
            Our team has many years of experience in Product Design, 3D CAD work,
            <br />
            Rendering, the packaging industry and manufacturing of the product.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>General Design</h2>
          <p>General aesthetic, user experience, engineering and manufacturing approach</p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>Detailed Engineering </h2>
          <p>All of the design and engineering work required before a prototype can be made, including 3D modeling, calculations, simulations, and more.</p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>Prototype</h2>
          <p>Fabrication, assembly, and testing/refinement</p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Portfolio</h2>
        </header>
            <Carousel >
                <div>
                  <Link to="/Bootski">
                    <img src={banner} />
                    <p className="legend">Product: Bootski | Company: Stolt of Sweden</p>
                    </Link>
                </div>
                <div>
                    <img src={chair} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={render} />
                    <p className="legend">Legend 1</p>
                </div>
            </Carousel>
      </div>
      <div className="responsive">
        <img src={logodog} alt="" />
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>We	bring to LIFE your IDEAS</h2>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="mailto:20designing@gmail.com" className="button fit primary">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);


export default IndexPage;
