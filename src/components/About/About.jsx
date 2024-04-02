import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";


export const About = () => {
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                src={getImageUrl("about/about.png")}
                alt="me sitting with a laptop"
                className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt = "cursor Icon" />
                       <div className={styles.aboutItemText}>
                      
            <h3> FrontEnd  Developer</h3>
            <p>
                I'm a frontend developer woth experience in building responsive
                and optimized site
            </p>
            </div>
            </li>


            <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt = "server Icon"  
                 /> 
                       <div className={styles.aboutItemText}>
                      
            <h3> BackEnd  Developer</h3>
            <p>
              I can develop and optimized backend system. 
            </p>
            </div>
            </li>


            <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt = "paint Icon" />
                       <div className={styles.aboutItemText}>
                      
            <h3> UI Designer</h3>
            <p>
            UI Designing in multiple layout designs, landing pages and have an 
            experience in creacting a designs for websites and other platforms.
         
            </p>
            </div>
            </li>



            <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt = "paint Icon" />
                       <div className={styles.aboutItemText}>
                      
            <h3> Game Development</h3>
            <p>
          I and my team develop a mobile game application using the Unity as a platform.
            </p>
            </div>
            </li>
         
           </ul>
           </div>
        </section>
        
    );
};