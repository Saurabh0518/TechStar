import React from 'react'
import vg from "../assests/img2.jpg";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className='home' id="home">
  <main>
        <h1>TechStar</h1>
        <p>Solution to all your problems</p>
    </main>

    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
            <p>We are your one and only solution to the tech problems you face everyday.
                We are leading tech company whose aim is to increase the problem solving ability
                of the children.
            </p>
        </div>
    </div>


    <div className="home3"  id="about">
      <div>
      <h1>Who we are</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Fugit officia tenetur tempore veniam harum dolores totam pariatur
         ut neque commodi cupiditate, in recusandae sint cum repudiandae? Hic
          repellendus recusandae reiciendis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Minima sapiente quod provident earum, 
           beatae fugiat officiis, sequi nihil nulla sed distinctio
            nemo est impedit ipsum, ab accusantium et libero veniam.
      </p>
      </div>
    </div>
  
     <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div
           style = {{animationDelay: "0.3s",}}
          >
                   <AiFillGoogleCircle/>
                   <p>Google</p>
          </div>

          <div
           style = {{animationDelay: "0.5s",}}
          >
                   <AiFillAmazonCircle/>
                   <p>Amazon</p>
          </div>
          <div
           style = {{animationDelay: "0.7s",}}
          >
                   <AiFillYoutube/>
                   <p>Youtube</p>
          </div>
          <div
           style = {{animationDelay: "0.3s",}}
          >
                   <AiFillInstagram/>
                   <p>Instagram</p>
          </div>
        </article>
      </div>
     </div>
    
    </>
  )
}

export default Home


 