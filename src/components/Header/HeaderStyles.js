import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as HamburgerIcon } from "../../assets/images/icon-hamburger.svg";
import { colors, breakpoints } from "../../utils/styles/theme";
import { Button } from "../../utils/styles/generalStyles";

export const HeaderWrapper = styled.header`
  position: absolute;
  left: 0;
  z-index: 100;
  width: 100%;
  padding: 32px;

  @media screen and (${breakpoints.desktop}) {
    padding: 32px 0;
  }

  ${(props) =>
    props.isSecondary &&
    `
    position: initial;
    background-color: ${colors.textPrimary}
    `}
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (${breakpoints.desktop}) {
    width: 960px;
    margin: 0 auto;
  }
  @media screen and (${breakpoints.desktopLarge}) {
    width: 1260px;
  }
`;

export const Hamburger = styled(HamburgerIcon)`
  width: 30px;
  height: 30px;

  @media screen and (${breakpoints.desktop}) {
    display: none;
  }

  path {
    fill: ${colors.bgSecondary};
  }
`;

export const Nav = styled.nav`
  display: none;

  @media screen and (${breakpoints.desktop}) {
    display: flex;
    align-items: center;
  }
`;

export const HeaderLink = styled(NavLink)`
  display: block;
  color: ${colors.secondary};
  text-decoration: none;
  letter-spacing: 1px;
  font-size: 16px;
  margin-right: 48px;
  transition: text-shadow 0.3s ease-out;

  &:hover {
    text-shadow: 0.7px 0 0 var(--color-secondary);
  }
`;

export const HeaderButton = styled(Button)`
  margin-right: 32px;

  &:last-child {
    margin-right: 0;
  }
`;