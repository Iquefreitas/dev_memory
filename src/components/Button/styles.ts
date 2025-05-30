
import styled from "styled-components";

export const Container = styled.div`
    width: 200px;
    height: 50px;
    display: flex;
    background-color: #3795C1;
    border-radius: 10px;
    cursor: pointer;
    opacity: 1;
    transition: all ease .3s;

    &:hover {
        opacity: .8;
    }
`;

export const IconArea = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255, 255, 255 .2);
    padding: 0 10px;

`;

export const Icon = styled.img`
    height: 40px;
    color: #FFF;
`;

export const Label = styled.div`
    height: inherit;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 0 20px;
`;