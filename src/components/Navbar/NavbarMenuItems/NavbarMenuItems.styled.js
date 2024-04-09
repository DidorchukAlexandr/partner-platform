import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CategoryList = styled.li`
  display: flex;
  align-items: center;
  width: 250px;
  height: 40px;
  border-radius: 10px;
  background: rgb(255, 255, 255);
  padding: 5px 11px;
  margin-bottom: 7px;

  /* &:hover {
    width: 249px;
    height: 39px;
    transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  } */
`;
export const Image = styled.img`
  padding: 8px 10px;
`;
export const TitleNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: Public Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.43;
  color: rgb(163, 174, 208);
  padding: 5px 25px 5px 5px;

  &.active {
    font-weight: 600;
    font-size: 18px;
    color: #000000;
  }
`;
