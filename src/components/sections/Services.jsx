import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { Tilt } from "react-tilt";
import { Box, Button } from "@mui/material";

// 3D Sphere Component
const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 32, 32]} scale={1.5}>
      <meshStandardMaterial color="#4A90E2" />
    </Sphere>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: ${({ theme }) => theme.bg_secondary};
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 50px;
  justify-content: center;
`;

const ServiceCard = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  position: relative;
  overflow: visible;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const IconBox = styled(Box)`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  @media (max-width: 768px) {
    top: -40px;
    width: 80px;
    height: 80px;
  }
`;

const ServiceTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;

const ServiceDesc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  margin-bottom: 20px;
  text-align: center;
`;

const Services = () => {
  return (
    <Container id="Services">
      <Wrapper>
        <Title>Our Services</Title>
        <Desc>
          We offer a range of services to help your business thrive in the digital world.
        </Desc>

        <ServicesContainer>
          <Tilt>
            <ServiceCard>
              <IconBox>
                <Canvas>
                  <ambientLight />
                  <OrbitControls enableZoom={false} />
                  <AnimatedSphere />
                </Canvas>
              </IconBox>
              <ServiceTitle>Web Development</ServiceTitle>
              <ServiceDesc>
                We offer responsive and modern web development services to help your business thrive online.
              </ServiceDesc>
              <Button size="small" variant="contained" color="primary" sx={{ marginBottom: '10px' }}>
                Learn More
              </Button>
            </ServiceCard>
          </Tilt>

          <Tilt>
            <ServiceCard>
              <IconBox>
                <Canvas>
                  <ambientLight />
                  <OrbitControls enableZoom={false} />
                  <AnimatedSphere />
                </Canvas>
              </IconBox>
              <ServiceTitle>App Development</ServiceTitle>
              <ServiceDesc>
                We create user-friendly mobile applications for both iOS and Android platforms, customized to meet your business needs.
              </ServiceDesc>
              <Button size="small" variant="contained" color="primary" sx={{ marginBottom: '10px' }}>
                Learn More
              </Button>
            </ServiceCard>
          </Tilt>
        </ServicesContainer>
      </Wrapper>
    </Container>
  );
};

export default Services;
