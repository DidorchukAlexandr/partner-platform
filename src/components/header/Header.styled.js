import styled from "styled-components";

export const Item = styled.ul`
  display: flex;
  height: 108px;
  margin-bottom: 30px;
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 108px;
  border-radius: 10px;
  background: rgb(255, 255, 255);
  cursor: pointer;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

export const Title = styled.h2`
  color: rgb(0, 0, 0);
  font-family: DM Sans;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.25;
  padding-right: 25px;
`;

export const Image = styled.img`
  width: 35px;
  height: 42px;
`;

export const ContentWrapper = styled.div`
  display: flex;

  height: 148px;
  margin: 0;
  /* height: 100vh; */
  /* max-width: 1px; */
`;
