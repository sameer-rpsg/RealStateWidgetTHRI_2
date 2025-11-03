import React, { useState } from "react";
import styles from "@/components/Project.module.css";

const images = [
  "https://www.studioakto.com/video/vid1.mp4",
  "https://www.studioakto.com/video/last_vid.mp4",
  "https://www.studioakto.com/video/vid2.mp4",
  "https://www.pexels.com/download/video/7578547/",
];

const miniImages = [
  "https://www.studioakto.com/video/vid1.mp4",
  "https://www.studioakto.com/video/last_vid.mp4",
  "https://www.studioakto.com/video/vid2.mp4",
  "https://www.pexels.com/download/video/7578547/",
];

const texts = [
  {
    title: "Flexible",
    description:
      "Architectural firm focused on creating strong, beautiful buildings with spaces that are flexible, beautiful, and appropriate for the needs of its occupants.",
  },
  {
    title: "Spaces",
    description:
      "Gomez-Alvarez talked about his connection to the building itself. After visiting the facility, he immediately knew the potential it had.",
  },
  {
    title: "Institute",
    description:
      "It’s modern, designed for a future. It’s very technological. You have wi-fi and video, a big screen and a window in each space.",
  },
  {
    title: "Modern",
    description:
      "Chicago-based Designers were the lead designers, led by Will Radford and Matt Trott. They wanted a creative office that utilized the space.",
  },
];

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  const handleTabClick = (index) => {
    if (index !== activeIndex) {
      setPrevIndex(activeIndex);
      setActiveIndex(index);
      setTimeout(() => {
        setPrevIndex(null);
      }, 400);
    }
  };

  return (
    <div className={`${styles.section} ${styles.section__advant}`}>
      <div className={`${styles.content} ${styles.mod__advant}`}>
        <div className={styles.advant__tabs}>
          <div data-tabs="images" className={styles.advant__img_wrap}>
            {images.map((img, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === prevIndex;

              return (
                <video
                  loop
                  muted
                  playsInline
                  autoPlay
                  key={index}
                  loading="lazy"
                  src={img}
                  data-anim="img"
                  alt=""
                  className={`${styles.advant__img} ${
                    styles[`mod__${index + 1}`]
                  }`}
                  style={{
                    height: isActive || isPrev ? "100%" : "0",
                    overflow: "hidden",
                    transition: "height 0.4s ease",
                  }}
                />
                // <img
                //   key={index}
                //   loading="lazy"
                //   src={img}
                //   data-anim="img"
                //   alt=""
                //   className={`${styles.advant__img} ${
                //     styles[`mod__${index + 1}`]
                //   }`}
                //   style={{
                //     height: isActive || isPrev ? "100%" : "0",
                //     overflow: "hidden",
                //     transition: "height 0.4s ease",
                //   }}
                // />
              );
            })}
          </div>

          <div
            className={`${styles.w_layout_grid} ${styles.grid} ${styles.mod__advant}`}
          >
            <div
              data-anim="card-wrap"
              className={`${styles.advant__card_wrap} ${styles.active} ${styles.order3}`}
            >
              <div
                data-anim="card"
                className={`${styles.advant__card} ${styles.active}`}
              >
                <div
                  data-tabs="images-mini"
                  className={styles.advant__card_img_wrap}
                >
                  {miniImages.map((img, index) => {
                    const isActive = index === activeIndex;
                    const isPrev = index === prevIndex;

                    return (
                      <video
                        loop
                        muted
                        playsInline
                        autoPlay
                        key={index}
                        loading="lazy"
                        src={img}
                        data-anim="img"
                        alt=""
                        className={`${styles.advant__card_img} ${
                          styles[`mod__${index + 1}`]
                        }`}
                        style={{
                          height: isActive || isPrev ? "100%" : "0",
                          overflow: "hidden",
                          transition: "height 0.4s ease",
                        }}
                      />
                      // <img
                      //   key={index}
                      //   loading="lazy"
                      //   src={img}
                      //   data-anim="img"
                      //   alt=""
                      //   className={`${styles.advant__card_img} ${
                      //     styles[`mod__${index + 1}`]
                      //   }`}
                      //   style={{
                      //     height: isActive || isPrev ? "100%" : "0",
                      //     overflow: "hidden",
                      //     transition: "height 0.4s ease",
                      //   }}
                      // />
                    );
                  })}
                </div>

                {/* Texts */}
                <div data-tabs="text" className={styles.advant__card_txt_wrap}>
                  {texts.map((item, index) => (
                    <div
                      key={index}
                      className={`${styles.advant__card_txt} ${
                        styles[`mod__${index + 2}`]
                      } ${index === activeIndex ? styles.active : ""}`}
                    >
                      <div className={styles.advant__card_title}>
                        {item.title}
                      </div>
                      <p className={styles.advant__card_p}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.advant__tabs_nav}>
          {texts.map((item, index) => (
            <div
              key={index}
              className={`${styles.btn_tag} ${
                index === activeIndex ? styles.active : ""
              }`}
              onClick={() => handleTabClick(index)}
              style={{ cursor: "pointer" }}
            >
              <span className={styles.btn_tag__star}>&nbsp;</span>
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
