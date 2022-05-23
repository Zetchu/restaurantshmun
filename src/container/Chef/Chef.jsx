import React from "react";

import { images } from "../../constants";

import { SubHeading } from "../../components";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img_reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chefs Word"></SubHeading>
      <h1 className="headtext__cormorant"> What we beleive in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_qoute">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            illum dignissimos eum itaque distinctio, reprehenderit
            necessitatibus odit nisi quidem temporibus inventore illo minus,
            quia rerum veniam, voluptate voluptatum quae perferendis.
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi optio
          officia illum magni natus! Hic deserunt minima et perspiciatis
          exercitationem ratione quidem neque assumenda expedita dolorum. Ea
          aspernatur doloremque dolore.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
