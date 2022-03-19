import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/bootski1.jpeg';
import pic2 from '../assets/images/bootski2.jpeg';
import pic3 from '../assets/images/bootski3.jpg';
import pic4 from '../assets/images/bootski4.jpg';
import pic5 from '../assets/images/bootski5.jpg';
import pic6 from '../assets/images/bootski6.jpg';
import pic7 from '../assets/images/bootski7.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Product: Bootski</h2>
        <p>Company: Stolt of Sweden</p>
      </header>

      <section>
        <div className="box alt">
          <div className="row gtr-50 gtr-uniform">
            <div className="col-12"><span className="image fit"><img src={pic7} alt="" /></span></div>
            <div className="col-4"><span className="image fit"><img src={pic1} alt="" /></span></div>
            <div className="col-4"><span className="image fit"><img src={pic2} alt="" /></span></div>
            <div className="col-4"><span className="image fit"><img src={pic3} alt="" /></span></div>
            <div className="col-4"><span className="image fit"><img src={pic4} alt="" /></span></div>
            <div className="col-4"><span className="image fit"><img src={pic5} alt="" /></span></div>
            <div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span></div>
          </div>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
