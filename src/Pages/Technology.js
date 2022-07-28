import React, { useState } from "react";
import styled from "styled-components";

export default function Technology() {
  const [nav, setNav] = useState(0);

  const DATA = [
    {
      name: "LAUNCH VEHICLE",
      details:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "SPACEPORT",
      details:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "SPACE CAPSULE",
      details:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];

  return (
    <Container>
      <div className="technology_space">
        <h5>
          <span>03</span>SPACE LAUNCH 101
        </h5>
        <div className="technology_container">
          <div className="technology_container__text">
            <div className="technology_container__text_nav">
              {React.Children.toArray(
                DATA.map((data, index) => (
                  <button
                    className={nav === index ? "active" : ""}
                    title={data.name}
                    onClick={() => setNav(index)}
                  >
                    {index + 1}
                  </button>
                ))
              )}
            </div>
            <div className="technology_container__text_content">
              <h6 className="nav-text">THE TERMINOLOGY…</h6>
              <h3>{DATA[nav].name}</h3>
              <p>{DATA[nav].details}</p>
            </div>
          </div>
          <div className="technology_container__image">
            <img
              className="technology_container__image_desktop"
              src={`/images/tech-${nav + 1}.png`}
              alt={DATA[nav].name}
            />
            <img
              className="technology_container__image_tab"
              src={`/images/tech-${nav + 1}-tab.png`}
              alt={DATA[nav].name}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.main`
  background-image: url("/images/tech-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 900px;
  display: flex;
  @media (max-width: 768px) {
    min-height: 100vh;
    background-image: url("/images/tech-bg-tab.png");
  }
  .technology {
    &_space {
      margin-left: auto;
      margin-top: 212px;
      margin-bottom: 101px;
      width: calc(1273.5px + 32px);
      padding-left: 32px;
      @media (max-width: 768px) {
        padding: 0;
        margin-top: 136px;
        margin-bottom: 97px;
      }
      @media (max-width: 548px) {
        margin-top: 88px;
        margin-bottom: 81px;
      }
      & > h5 {
        display: flex;
        gap: 28px;
        text-transform: uppercase;
        @media (max-width: 768px) {
          gap: 16px;
          padding-left: 38.5px;
        }
        @media (max-width: 548px) {
          align-items: center;
          justify-content: center;
          padding: 0;
        }
        & > span {
          opacity: 0.25;
        }
      }
    }
    &_container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 26px;
      gap: 48px;

      @media (max-width: 768px) {
        flex-direction: column-reverse;
        margin-top: 60px;
        gap: 56px;
      }
      @media (max-width: 548px) {
        margin-top: 32px;
        gap: 34px;
      }
      &__text {
        display: flex;
        gap: 80px;
        width: min(100%, 604px);
        @media (max-width: 768px) {
          width: min(100%, calc(458px + 48px));
          padding: 0 24px;
          gap: 44px;
          flex-direction: column;
        }
        @media (max-width: 548px) {
          gap: 26px;
        }
        &_nav {
          display: flex;
          gap: 32px;
          flex-direction: column;
          @media (max-width: 768px) {
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 16px;
          }
          & > button {
            width: 80px;
            aspect-ratio: 1/1;
            border-radius: 50%;
            border: 1px solid var(--light-op);
            background-color: transparent;
            color: var(--light);
            line-height: 100%;
            display: flex;
            place-items: center;
            justify-content: center;
            padding: 3px 0 0 3px;
            text-align: center;
            @media (max-width: 768px) {
              width: 60px;
            }
            @media (max-width: 548px) {
              width: 40px;
            }
            &:hover {
              border: 1px solid var(--light);
            }
            &.active {
              background-color: var(--light);
              color: var(--dark);
            }
          }
        }
        &_content {
          width: min(470px, 100%);
          @media (max-width: 768px) {
            text-align: center;
            width: 100%;
          }
          & > h6 {
            color: var(--light-purple);
            @media (max-width: 548px) {
              font-size: 14px;
            }
          }
          & > h3 {
            margin-top: 11px;
            @media (max-width: 768px) {
              font-size: 40px;
              margin-top: 16px;
            }
            @media (max-width: 548px) {
              font-size: 24px;
              margin-top: 9px;
            }
          }
          & > p {
            margin-top: 17px;
            color: var(--light-purple);
            @media (max-width: 768px) {
              font-size: 16px;
              margin-top: 16px;
            }
            @media (max-width: 548px) {
              font-size: 15px;
            }
          }
        }
      }
      &__image {
        width: min(100%, 515px);
        @media (max-width: 768px) {
          width: 100%;
        }
        img {
          width: 100%;
          height: auto;
          object-fit: fill;
        }
        &_desktop {
          @media (max-width: 768px) {
            display: none;
          }
        }
        &_tab {
          @media (min-width: 769px) {
            display: none;
          }
        }
      }
    }
  }
`;
