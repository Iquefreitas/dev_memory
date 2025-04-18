import styled from "styled-components";

type ContainerProps = {
    showBackground: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${props => props.showBackground ? '#3694C1' : '#C6DEE4'};
  height: 100px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center; // <-- aqui!
  cursor: pointer;
`;

type IconProps = {
    opacity?: number;
}
export const Icon = styled.img<IconProps>`
  width: 50%;
  height: 50%;
  object-fit: contain;
  fill: white;
  opacity: ${props => props.opacity ?? 1};
`;