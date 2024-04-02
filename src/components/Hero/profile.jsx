import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>

                <h1 className={styles.title}>
                    Hi!  I am Hannah Jean
                </h1>
                <p className={styles.description}>
                    I am a 4th year student developer and graphic designer.
                     That develop websites using different programming language. 
                     Layouts design and also has small background in game development.
                     Reach out if you'd like to learn more!
                </p>
                <a href="https://drive.google.com/file/d/1Nc49W1gSg_QMFrwvAV4cC_CtwZe_cnzl/view?usp=sharing"className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/profile1.png")} alt="hero image of me"className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlue}/>
        </section>
    )
}