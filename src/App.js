import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Layout/Header";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";

export default function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`;
