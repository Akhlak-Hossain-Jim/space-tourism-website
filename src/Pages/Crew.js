import React, { useState } from "react";
import styled from "styled-components";

export default function Crew() {
  const [nav, setNav] = useState(0);

  const DATA = [
    {
      name: "Douglas Hurley",
      designation: "Commander ",
      details:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      name: "MARK SHUTTLEWORTH",
      designation: "Mission Specialist ",
      details:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "Victor Glover",
      designation: "PILOT",
      details:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    },
    {
      name: "Anousheh Ansari",
      designation: "Flight Engineer",
      details:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    },
  ];

  return (
    <Container iWidth={DATA[nav].iWidth ? DATA[nav].iWidth : null}>
      <div className="crew_component">
        <div className="crew_component__text">
          <div className="crew_component__text_content">
            <h5>
              <span>02</span>
              MEET YOUR CREW
            </h5>
            <h4>{DATA[nav].designation}</h4>
            <h3>{DATA[nav].name}</h3>
            <p>{DATA[nav].details}</p>
          </div>
          <div className="crew_component__text_nav">
            {React.Children.toArray(
              DATA.map((data, index) => (
                <div
                  className={`crew_component__text_nav__Link index ${
                    nav === index ? "active" : ""
                  }`}
                  role="button"
                  aria-label={data.nam}
                  title={data.name}
                  onClick={() => setNav(index)}
                ></div>
              ))
            )}
          </div>
        </div>
        <div className="crew_component__image">
          <img
            src={`/images/${DATA[nav].name.replace(" ", "-")}.png`}
            alt={DATA[nav].name}
          />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.main`
  background-image: url("/images/crew-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 900px;
  display: flex;
  @media (max-width: 768px) {
    min-height: 100vh;
    background-image: url("/images/crew-bg-tab.png");
  }
  .crew_component {
    display: flex;
    justify-content: space-between;
    gap: 48px;
    width: (100%, calc(1185.07px + 48px));
    margin: 0 auto;
    margin-top: 198px;
    padding: 0 24px;

    position: relative;
    @media (max-width: 768px) {
      flex-direction: column;
      margin-top: 136px;
      gap: 40px;
    }
    @media (max-width: 548px) {
      flex-direction: column-reverse;
      margin-top: 139px;
      gap: 32px;
    }
    &__text {
      width: min(100%, 614px);
      @media (max-width: 768px) {
        text-align: center;
        width: min(100%, 458px);
        margin: 0 auto;
      }
      @media (max-width: 548px) {
        display: flex;
        flex-direction: column-reverse;
      }
      &_content {
        & > h5 {
          display: flex;
          gap: 28px;
          text-transform: uppercase;
          @media (max-width: 768px) {
            text-align: left;
            gap: 16px;
          }
          @media (max-width: 548px) {
            align-items: center;
            justify-content: center;
            position: absolute;
            top: -51px;
            left: 50%;
            transform: translateX(-50%);
          }
          & > span {
            opacity: 0.25;
          }
        }
        & > h4 {
          margin-top: 154px;
          mix-blend-mode: normal;
          opacity: 0.5;
          @media (max-width: 768px) {
            margin-top: 60px;
          }
          @media (max-width: 548px) {
            margin-top: 0;
          }
        }
        & > h3 {
          margin-top: 15px;
          @media (max-width: 768px) {
            margin-top: 8px;
          }
        }
        & > p {
          margin-top: 27px;
          max-width: 444px;

          @media (max-width: 768px) {
            margin-top: 16px;
            max-width: 100%;
          }
          @media (max-width: 548px) {
            padding-bottom: 104px;
          }
        }
      }
      &_nav {
        margin-top: 120px;
        display: flex;
        gap: 24px;

        @media (max-width: 768px) {
          margin-top: 40px;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 548px) {
          margin: 0;
          margin-bottom: 32px;
        }
        &__Link {
          width: 15px;
          aspect-ratio: 1/1;
          border-radius: 50%;
          background-color: var(--light);
          opacity: 0.17;
          @media (max-width: 768px) {
            width: 10px;
          }
          @media (max-width: 548px) {
          }
          &:hover {
            opacity: 0.5;
          }
          &.active {
            opacity: 1;
          }
        }
      }
    }
    &__image {
      width: min(${({ iWidth }) => (iWidth ? iWidth : "450px")}, 100%);
      align-self: flex-end;
      display: flex;
      @media (max-width: 768px) {
        margin: 0 auto;
      }
      img {
        width: 100%;
        height: auto;
        object-position: bottom;
        margin-top: auto;
      }
    }
  }
`;
