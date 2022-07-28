import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <div className="home_content">
        <div className="home_content__text">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button
          className="home_content__button"
          onClick={() => window.open("/destination", "_self")}
        >
          EXPLORE
        </button>
      </div>
    </Container>
  );
}

const Container = styled.main`
  background-image: url("/images/home.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 900px;
  display: flex;
  @media (max-width: 768px) {
    min-height: 100vh;
    background-image: url("/images/home-tab.png");
  }
  .home_content {
    width: min(1174px, 100%);
    padding: 0 32px;
    margin: auto;
    margin-bottom: 131px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 56px;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      justify-content: center;
      gap: 156px;
      margin-top: 220px;
      margin-bottom: 90px;
    }
    @media (max-width: 548px) {
      gap: 81px;
      margin-top: 112px;
      margin-bottom: 48px;
    }
    &__text {
      max-width: 450px;
      @media (max-width: 768px) {
        text-align: center;
      }
    }
    &__button {
      width: 274px;
      aspect-ratio: 1/1;
      border-radius: 50%;
      &:hover {
        box-shadow: 0 0 0 88px rgba(255, 255, 255, 0.1036);
      }
      @media (max-width: 768px) {
        width: 242px;
      }
      @media (max-width: 548px) {
        width: min(100%, 150px);
      }
    }
  }
`;
