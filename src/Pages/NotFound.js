import React from "react";
import styled from "styled-components";

export default function NotFound() {
  return (
    <Container>
      <div className="notFound_container">
        <img src="/images/astra-cat.png" alt="a cat with an astronaut suite" />
        <h2>Page doesn't exist</h2>
      </div>
    </Container>
  );
}

const Container = styled.main`
  background-image: url("/images/not-found-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 900px;
  display: flex;
  @media (max-width: 768px) {
    min-height: 100vh;
    background-image: url("/images/not-found-bg-tab.png");
  }
  .notFound_container {
    margin: auto;
    margin-top: 212px;
    margin-bottom: 101px;
    width: min(100%, calc(473px + 64px));
    padding: 0 32px;
    @media (max-width: 768px) {
      margin-top: 136px;
      margin-bottom: 97px;
    }
    @media (max-width: 548px) {
      padding: 24px;
      margin-top: 88px;
      margin-bottom: 81px;
    }
    & > img {
      width: 100%;
      height: auto;
      object-position: bottom;
    }
    & > h2 {
      margin-top: -25px;
      text-transform: uppercase;
      text-align: center;
      @media (max-width: 389px) {
        margin-top: -10px;
        font-size: calc(20px + 10vmin);
        word-wrap: break-word;
      }
    }
  }
`;
