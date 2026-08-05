import styles from "../styles/routes/About.module.scss";
import Hero from "../components/Hero";
import Category from "../components/Category";
import ContentWrapper from "./global/ContentWrapper";
import OurCrewCard from "../components/OurCrewCard";
import Footer from "../components/Footer";
import Showcase from "../components/Showcase";
import { useInView } from "react-intersection-observer";
import useWindowWidth from "../hooks/getWindowWidth";

const About = () => {
  const [ref, inView] = useInView();
  const { width } = useWindowWidth();

  return (
    <main className={styles.about}>
      <Hero
        image={
          width < 1024
            ? "https://res.cloudinary.com/dplbkid9/image/upload/v1785702442/5e5fcbf402ca7c7cecfe7bf6_Untitled-3_20_3_oxo8rk.jpg"
            : "https://res.cloudinary.com/dplbkid9/image/upload/v1785702378/5e602586e7017bb2b3d99ab3_Untitled-14_orl5rt.jpg"
        }
        title="About Us"
      >
        <p>
          The attractions of ceramics lie partly in its contradictions. It is
          both difficult and easy, with an element beyond our control. It is
          both extremely fragile and durable. Like &#39;Sumi&#39; ink painting,
          it does not lend itself to erasures and indecision.
        </p>
      </Hero>
      <Category />
      <section className={styles.ourCrew}>
        <ContentWrapper
          sideText="OUR TALENTED CREW"
          titleSm="OUR CREW"
          titleLg="Talented Artists"
          sideTextOrientation="right"
        >
          <div className={styles.cardContainer}>
            <OurCrewCard
              image="https://res.cloudinary.com/dplbkid9/image/upload/v1785702369/5bb9674282df3566bcb449cc_matheus-ferrero-216385-1-p-1600_doetya.jpg"
              title="Maria Monroy"
              subTitle="SENIOR DESIGNER"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. enim in eros elementum"
            />
            <OurCrewCard
              image="https://res.cloudinary.com/dplbkid9/image/upload/v1785702389/5bb51966b7369f90e2c3cc37_lucas-sankey-378674_onfskm.jpg"
              title="Dominic Basket"
              subTitle="SENIOR DESIGNER"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. enim in eros elementum"
            />
            <OurCrewCard
              image="https://res.cloudinary.com/dplbkid9/image/upload/v1785702401/5bb51966b7369f1eb3c3cc35_erik-lucatero-310633_e60wsd.jpg"
              title="Edward Fisher"
              subTitle="SENIOR DESIGNER"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. enim in eros elementum"
            />
          </div>
        </ContentWrapper>
      </section>
      <ContentWrapper sideText="THIS IS OUR MISSION">
        <div className={styles.ourMission}>
          <div
            className={`${styles.image} ${inView ? styles.show : ""}`}
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dplbkid9/image/upload/v1785701242/5bb9668024337c19082edcaf_orientovase_wzupn7.png)",
            }}
            ref={ref}
          ></div>
          <Showcase
            image="https://res.cloudinary.com/dplbkid9/image/upload/v1785701255/5bb381e8f20c2e1db6f8800c_blouse_o9vp5e.png"
            title={
              <div>
                Created With Love
                <span className={styles.ampersandStyle}> & </span> Passion
              </div>
            }
            to="/shop"
            linkText="View More Pieces"
            className={styles.showcase}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum. Duis cursus, mi quis viverra ornare,
            eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </Showcase>
        </div>
      </ContentWrapper>
      <Footer />
    </main>
  );
};

export default About;
