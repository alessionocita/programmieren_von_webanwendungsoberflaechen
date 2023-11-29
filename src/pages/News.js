// News-Seitenkomponente. Benutzt die Komponente AsideNavigation

import styles from "./News.module.css";

import AsideNavigation from "../components/AsideNavigation";

import news1 from "../assets/news_anniversary.png";
import news2 from "../assets/news_green_park_day.png";
import news3 from "../assets/news_workshop.png";
import news4 from "../assets/news_solar_panel.png";
import news5 from "../assets/news_team_meeting.png";

// Aside Menu Links (weitergegeben an AsideNavigation.js)
const MENULINKS = ["Home"];

function News(props) {
  return (
    <div className={styles.container}>
      {props.viewport > 820 && <AsideNavigation menuLinks={MENULINKS} />}

      <main className={styles.main}>
        <h1 className={styles.title}>News</h1>
        <div className={styles.news}>
          <img src={news1} className={styles.image} />

          <h4>March 1, 2023</h4>
          <h2>Celebrating Our Milestone: Five Years of ClimateCare Ventures</h2>
          <p>
            We're thrilled to celebrate our first anniversary! It's been a year
            full of challenges, learnings, and significant strides in promoting
            eco-friendly practices. Our dedicated team showcased a remarkable
            performance, as depicted in our annual review chart. Thank you to
            everyone who believed in us!
          </p>
        </div>

        <div className={styles.news}>
          <img src={news2} className={styles.image} />

          <h4>April 15, 2023</h4>
          <h2>Engaging with the Community at Green Park Day</h2>
          <p>
            Our team had a fantastic time setting up a booth at the local Green
            Park Day event. It was heartwarming to see the community's interest
            in sustainable living, and we're proud to have shared valuable tips
            on reducing carbon footprints.
          </p>
        </div>

        <div className={styles.news}>
          <img src={news3} className={styles.image} />

          <h4>June 10, 2023</h4>
          <h2>Workshop on Reducing Household Carbon Footprints</h2>
          <p>
            Our recent workshop at the community center was a great success! Our
            expert, Dr. Emily Turner, shared practical steps that every
            household can take to minimize their carbon emissions. We're excited
            to organize more such events in the future.
          </p>
        </div>

        <div className={styles.news}>
          <img src={news4} className={styles.image} />

          <h4>August 20, 2023</h4>
          <h2>Solar Panel Installation Project Completed</h2>
          <p>
            We're proud to announce the successful installation of solar panels
            for the Johnson family in our locality. This project is a testament
            to our commitment to promoting renewable energy sources in our
            community.
          </p>
        </div>

        <div className={styles.news}>
          <img src={news5} className={styles.image} />

          <h4>October 5, 2023</h4>
          <h2>Planning for the Future: Team Meeting Highlights</h2>
          <p>
            Our recent team meeting was all about brainstorming and planning for
            upcoming projects. With sustainability at the forefront, we're eager
            to bring more innovative solutions to our community in the coming
            months.
          </p>
        </div>

        <div className={styles.freespace}></div>
      </main>
    </div>
  );
}

export default News;
