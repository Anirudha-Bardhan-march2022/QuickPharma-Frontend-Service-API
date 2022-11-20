import "./About.css";
import React from "react";

const About = () => {

    return (
        <div className="img">
            <br/>
            <h1 className="text-center text-shadow: 2px 2px 8px"><i>About</i></h1>
            <div className="rel1">
                <h3><i>The idea</i></h3>
                <p>
                <h6>In healthcare, the information around our medicines and lab tests is either
                 unavailable or incomprehensible to us.<br/><br/>
                So we decided to create a platform that stood for transparent, authentic and
                 accessible information for all.
                This idea grew into a company and this Online Medical Store was created.</h6>
                </p>
            </div>
            <div className="rel2">
                <h3><i>What we offer</i></h3>
                <div>
               <h6> We provide accurate, authoritative & trustworthy information on medicines and help
                 people use their medicines effectively and safely.<br/><br/>
                
                We get medicines and other health products delivered at home in 1000+ cities across
                 India from licensed and verified pharmacies.
                
                We also provide diagnostic services from certified labs and online doctor consults 
                at any time, from anywhere.</h6>
                </div>
            </div>
            <div className="rel3">
                <h3><i>The journey so far</i></h3>
                <h6>
                We’ve made health care accessible to millions by giving them quality care 
                at affordable prices.<br/>
                We continue to expand our rich and extensive medical content and are working hard
                 to make this information available in multiple local languages.
                </h6>
            </div>
            <div className="rel4">
                <h3><i>Our work and culture</i></h3>
                <h6>
                At our Store we strongly believe that a great culture is an important ingredient
                for a startup’s success. Our culture promotes radical candor, fast paced 
                iterations, collaboration and a flat hierarchy.<br/><br/>
                At our store we believe that every individual has the power to drive impact and change. We encourage our team
                members to take ownership and charge not paying heed to organizational trappings.
                As a result individuals (and not just leaders) have the potential to drive big 
                impact on our business and customers.
                </h6>
            </div>
        </div>
      );
    };
    export default About;
    