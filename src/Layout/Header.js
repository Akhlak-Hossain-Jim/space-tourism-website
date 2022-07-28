import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const [activeNav, setActiveNav] = useState(0);
  const [HamStat, setHamStat] = useState(false);

  const Links = [
    { name: "Home", link: "" },
    { name: "Destination", link: "" },
    { name: "Crew", link: "" },
    { name: "Technology", link: "" },
  ];

  const activeNavQuery = {
    home: 0,
    destination: 1,
    crew: 2,
    technology: 3,
  };

  useEffect(() => {
    let path = window.location.pathname.toLowerCase();
    path === "/" || path === "/home"
      ? setActiveNav(0)
      : setActiveNav(activeNavQuery[path.replace("/", "")]);
  }, []);

  return (
    <Container>
      <Link to="/" className="header_logo">
        <img src="/images/logo.svg" alt="Space tourism logo" />
      </Link>
      <div className="header_divider"></div>
      <nav className={`header_nav ${HamStat ? "active" : ""}`}>
        <div className="header_nav__items">
          {React.Children.toArray(
            Links.map((data, index) => (
              <Link
                className={`header_nav__items_link nav-text ${
                  activeNav === index ? "active" : ""
                }`}
                to={`/${
                  data.name.toLowerCase() === "home"
                    ? ""
                    : data.name.toLowerCase()
                }`}
                onClick={() => setActiveNav(index)}
              >
                <span>0{index}</span>
                {data.name}
              </Link>
            ))
          )}
        </div>
      </nav>
      <div
        className={`header_ham ${HamStat ? "active" : ""}`}
        onClick={() => setHamStat(!HamStat)}
      >
        <div className="header_ham__icon"></div>
      </div>
    </Container>
  );
}
const Container = styled.header`
  position: absolute;
  width: min(1440px, 100%);
  padding-top: 40px;
  display: flex;
  align-items: center;
  z-index: 100;
  @media (max-width: 768px) {
    padding-top: 0;
    gap: 40px;
    justify-content: space-between;
  }
  @media (max-width: 548px) {
    padding-top: 24px;
  }
  .header {
    &_logo {
      margin-left: 65px;
      width: 48px;
      @media (max-width: 768px) {
        margin-left: 39px;
      }
      @media (max-width: 548px) {
        margin-left: 24px;
      }
      img {
        width: 100%;
        height: auto;
        object-fit: fill;
      }
    }
    &_divider {
      flex: 1;
      width: calc(100% + 30px);
      transform: translateX(30px);
      height: 1px;
      margin-left: 34px;
      background-color: var(--light);
      z-index: 10;
      @media (max-width: 768px) {
        display: none;
      }
    }
    &_nav {
      width: min(100%, 830px);
      background-color: var(--nav-bg);
      backdrop-filter: blur(81.5485px);
      @media (max-width: 768px) {
        padding-top: 0;
        width: min(100%, 450px);
      }
      @media (max-width: 548px) {
        display: none;
        &.active {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          width: 70vw;
          @media (max-width: 300px) {
            width: 100vw;
          }
          .header_nav__items {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding-top: 113px;
            gap: 32px;
            &_link {
              width: 100%;
              padding: 0 32px;
              &:after {
                height: 100%;
                width: 3px;
                right: 0;
              }
            }
          }
        }
      }
      &__items {
        display: flex;
        justify-content: space-between;
        max-width: 582px;
        padding-right: 42px;
        margin: 0 auto;
        @media (max-width: 768px) {
          max-width: 358px;
          padding-right: 2px;
        }
        &_link {
          position: relative;
          display: flex;
          align-items: center;
          gap: 11px;
          color: var(--light);
          text-decoration: none;
          padding: 39px 0 38px;

          & > span {
            font-weight: 700;
            @media (max-width: 768px) {
              display: none;
            }
            @media (max-width: 548px) {
              display: inline;
            }
          }
          &::after {
            content: "";
            background-color: var(--light);
            position: absolute;
            width: 100%;
            height: 3px;
            bottom: 0;
            transform: scale(0);
          }
          &:hover::after {
            transform: scale(1);
            opacity: 0.5;
          }
          &.active::after {
            opacity: 1;
            transform: scale(1);
          }
        }
      }
    }
    &_ham {
      display: none;
      @media (max-width: 548px) {
        display: inline-block;
        margin-right: 24px;
        width: 24px;
        height: 3px;
        position: relative;
        background: var(--light-purple);
        z-index: 50;

        &:before,
        &:after {
          content: "";
          position: absolute;
          bottom: -9px;
          width: 24px;
          height: 3px;
          background: var(--light-purple);
        }
        &:before {
          top: -9px;
        }
        &.active {
          background: transparent;

          &:after {
            top: 0;
            transform-origin: center;
            transform: rotate(45deg);
          }
          &:before {
            top: 0px;
            transform-origin: center;
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
`;
