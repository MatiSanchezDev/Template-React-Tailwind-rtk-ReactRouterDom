import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Mac from "./Mac";
import styled from "styled-components";

const Desc = styled.div`
  width: 240px;
  height: auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
  color: black;
  font-size: 14px;
  font-weight: 300;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Development = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Mac />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <Desc>
        Elaboro productos con un fuerte enfoque tanto en el diseño de clase
        mundial como en garantizar que su producto sea un éxito en el mercado.
      </Desc>
    </>
  );
};
