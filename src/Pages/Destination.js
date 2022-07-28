import React, { useState } from "react";
import styled from "styled-components";

export default function Destination() {
  const [nav, setNav] = useState(0);
  const DATA = [
    {
      title: "moon",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      timeToTravel: "3 days",
    },
    {
      title: "mars",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 MIL. km",
      timeToTravel: "9 months",
    },
    {
      title: "europa",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. km",
      timeToTravel: "3 years",
    },
    {
      title: "titan",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. km",
      timeToTravel: "7 years",
    },
  ];
  return (
    <Container>
      <div className="destination_content">
        <div className="destination_content__image">
          <h5>
            <span>01</span>Pick your destination
          </h5>
          <div className="destination_content__image_container">
            <img src={`/images/${DATA[nav].title}.png`} alt={DATA[nav].title} />
          </div>
        </div>
        <div className="destination_content__text">
          <div className="destination_content__text_nav">
            {React.Children.toArray(
              DATA.map((data, index) => (
                <button
                  className={`destination_content__text_nav__link nav-text ${
                    nav === index ? "active" : ""
                  }`}
                  onClick={() => setNav(index)}
                >
                  {data.title}
                </button>
              ))
            )}
          </div>
          <div className="destination_content__text_content">
            <h2>{DATA[nav].title}</h2>
            <p>{DATA[nav].description}</p>
            <div className="destination_content__text_content__divider"></div>
            <div className="destination_content__text_content__status">
              <div className="destination_content__text_content__status_con">
                <div className="subtitle-2">AVG. DISTANCE</div>
                <h5>{DATA[nav].distance}</h5>
              </div>
              <div className="destination_content__text_content__status_con">
                <div className="subtitle-2">Est. travel time</div>
                <h5>{DATA[nav].timeToTravel}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.main`
  background-image: url("/images/destination-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 900px;
  display: flex;
  @media (max-width: 768px) {
    min-height: 100vh;
    background-image: url("/images/destination-bg-tab.png");
  }
  .destination_content {
    width: min(100%, 1206.5px);
    margin: auto;
    margin-top: 218px;
    margin-bottom: 112px;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 48px;
    @media (max-width: 768px) {
      margin-top: 136px;
      margin-bottom: 62px;

      flex-direction: column;
      padding: 0 38.5px;
      justify-content: center;
      align-items: center;
      gap: 53px;
    }
    @media (max-width: 548px) {
      margin-top: 88px;
      margin-bottom: 58px;
      gap: 26px;
    }
    &__image {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: min(508px, 100%);
      @media (max-width: 768px) {
        width: 100%;
      }
      & > h5 {
        display: flex;
        gap: 28px;
        text-transform: uppercase;
        @media (max-width: 768px) {
          gap: 16px;
        }
        @media (max-width: 548px) {
          align-items: center;
          justify-content: center;
        }
        & > span {
          opacity: 0.25;
        }
      }
      &_container {
        margin: 91px 0 0 auto;
        width: min(445px, 100%);
        @media (max-width: 768px) {
          width: min(300px, 100%);
          margin: 60px auto 0;
        }
        @media (max-width: 548px) {
          width: min(170px, 100%);
          margin: 32px auto 0;
        }
        img {
          width: 100%;
        }
      }
    }
    &__text {
      width: min(100%, 445px);
      @media (max-width: 768px) {
        width: min(573px, 100%);
        text-align: center;
        margin: 0 auto;
      }
      &_nav {
        display: flex;
        gap: 35px;
        @media (max-width: 768px) {
          justify-content: center;
        }
        @media (max-width: 548px) {
          gap: 27px;
        }
        &__link {
          background: transparent;
          padding-bottom: 15px;
          color: var(--light-purple);
          position: relative;
          &::after {
            content: "";
            background-color: var(--light);
            position: absolute;
            width: 100%;
            height: 3px;
            bottom: 0;
            left: 0;
            transform: scale(0);
          }
          &:hover::after {
            transform: scale(1);
            opacity: 0.5;
          }
          &.active {
            color: var(--light);
            &::after {
              opacity: 1;
              transform: scale(1);
            }
          }
        }
      }
      &_content {
        & > h2 {
          padding-top: 37px;
          text-transform: uppercase;
          @media (max-width: 768px) {
            padding-top: 32px;
          }
          @media (max-width: 548px) {
            padding-top: 20px;
          }
        }
        & > p {
          padding-top: 14px;
          color: var(--light-purple);
          @media (max-width: 768px) {
            padding-top: 8px;
          }
          @media (max-width: 548px) {
            padding-top: 1px;
          }
        }
        &__divider {
          height: 1px;
          width: 100%;
          background-color: var(--dark-2);
          margin: 54px 0 28px;
          @media (max-width: 768px) {
            margin: 49px 0 28px;
          }
          @media (max-width: 548px) {
            margin: 32px 0;
          }
        }
        &__status {
          display: flex;
          gap: 36px;
          @media (max-width: 768px) {
            align-items: center;
            justify-content: center;
          }
          @media (max-width: 548px) {
            flex-wrap: wrap;
          }
          &_con {
            & > .subtitle-2 {
              color: var(--light-purple);
            }
            & > h5 {
              text-transform: uppercase;
              letter-spacing: 0px;
              padding-top: 12px;
            }
          }
        }
      }
    }
  }
`;
