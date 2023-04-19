import { FC } from "react";
import HomePage from "../../HomePage";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {
  CardContent,
  CardImage,
  CardTitle,
  CardWrapper,
  IntroduceCard,
  IntroduceDiv,
  StyledAboutMeContact,
  StyledAboutMeContactCard,
  StyledAboutMeExperienceContainer,
  StyledAboutMeIcon,
  StyledAboutMeIntroduce,
} from "./style";
import { Tilt } from "react-tilt";
import EarthCanvas from "./component/EarthModal";
import { Canvas } from "react-three-fiber";
import web from "../../../../img/web.png";
import backend from "../../../../img/backend.png";
import mobile from "../../../../img/mobile.png";
import creator from "../../../../img/creator.png";
import itIcon from "../../../../img/itIcon.png";

const experiences = [
  {
    title: "Front End Developer",
    company: "GrubMarket",
    list: [
      "Developing features to enhance the user experience using JavaScript, React JS, Redux.",
      "Creating unit tests with Jest when needed.",
      "Collaborating with development teams and product managers to create innovative software solutions.",
    ],
    time: "2021.09-2023.01",
  },
  {
    title: "Full Stack Developer– Project Base",
    company: "Anime House ",
    list: [
      "Developing front-end website architecture and back-end website applications",
      "Designing user interactions on the web page.",
      "Creating servers and databases for functionality",
      "Troubleshooting, debugging and upgrading the website and application consistently",
    ],
    time: "2021.07-2022.07",
  },
  {
    title: "Full Stack Developer – Project Base",
    company: "Infinmax company",
    list: [
      "In charge of the ERP platform of the real estate industry",
      "Collaborate with different dept. to create innovative software solutions.",
      "Create new, dynamic, front-end, and back-end software products and apps that are dynamic and visually appealing.",
      "Design apps from scratch using ReactJS, .NET Core, SQL Server, and many other modern technologies, such as D3 and xlsx",
    ],
    time: "2020.10-2021.09",
  },
  {
    title: "Full Stack Developer - Internship",
    company: "Visual Medical Coaching",
    list: [
      "Plan and complete the database transition from MongoDB into the SQL server.",
      "Build user interfaces that interact with RESTful APIs",
      "Develop new features for the application using. NET.",
    ],
    time: "2019.12-2020.08",
  },
];

const tech = [
  { img: web, title: "Web Developer" },
  { img: backend, title: "BackEnd Developer" },
  { img: mobile, title: "Test" },
  { img: creator, title: "Content Creator" },
];

const SubAboutMeComponent: FC = () => {
  const getExperience = () => {
    return (
      <>
        <StyledAboutMeIntroduce>
          <h3>Work Experience.</h3>
        </StyledAboutMeIntroduce>
        <StyledAboutMeExperienceContainer>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: " #a136be ", color: "#fff" }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date={experience.time}
                iconStyle={{ background: " #ffffff ", color: "#fff" }}
                icon={<StyledAboutMeIcon src={itIcon} />}
              >
                <h2 className="vertical-timeline-element-title">
                  {experience.title}
                </h2>
                <h4 className="vertical-timeline-element-subtitle">
                  {experience.company}
                </h4>
                <ul>
                  {experience.list.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </StyledAboutMeExperienceContainer>
      </>
    );
  };

  const getIntroduceCard = () => {
    return (
      <IntroduceCard>
        {tech.map((item) => (
          <IntroduceDiv>
            <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
              <CardWrapper>
                <div>
                  <CardContent>
                    <CardImage src={item.img} alt="web-development" />

                    <CardTitle>{item.title}</CardTitle>
                  </CardContent>
                </div>
              </CardWrapper>
            </Tilt>
          </IntroduceDiv>
        ))}
      </IntroduceCard>
    );
  };

  const getIntroduce = () => {
    return (
      <>
        <StyledAboutMeIntroduce>
          <h3>Hi, I'm Leo Lu</h3>
          <p>
            Logical and results-driven full-stack developer dedicated to
            building and optimising user-focused websites and applications with
            3+ years of related working experience.
          </p>{" "}
          <p>
            Judicious and creative when crafting effective websites, apps, and
            platforms to propel competitive advantage and revenue growth.{" "}
          </p>
          <p>
            Highly skilled in programming design, development, and
            implementation of functional specifications and technically
            proficient and analytical problem solver with calm and focused
            demeanour.{" "}
          </p>
          <p>
            Currently looking to take on more challenges that can improve and
            grow my abilities and skills with a more prominent and more
            potential company.
          </p>
        </StyledAboutMeIntroduce>
      </>
    );
  };

  const getContact = () => {
    return (
      <StyledAboutMeContact>
        <div>
          <StyledAboutMeContactCard>
            <h2>Contact.</h2>
            <p>Email: leolupersonal@gmail.com</p>
            <p>Phone Number: 0272091817</p>
            <p>Location: Auckland,New Zealand</p>
          </StyledAboutMeContactCard>
        </div>
        <div>
          <Canvas
            style={{
              width: "100%",
              height: "500px",
            }}
          >
            <EarthCanvas />
          </Canvas>
        </div>
      </StyledAboutMeContact>
    );
  };

  const getContext = () => {
    return (
      <>
        {getIntroduce()}
        {getIntroduceCard()}
        {getExperience()}
        {getContact()}
      </>
    );
  };

  return (
    <>
      <HomePage state={2} context={getContext()} />
    </>
  );
};
export default SubAboutMeComponent;
