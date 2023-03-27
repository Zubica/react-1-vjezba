import styled from "styled-components";
import { breakpoints, colors } from "./theme";

export const Button = styled.Button`
  display: inline-block;
  width: 150px;
  line-height: 48px;
  font-size: 16px;
  background-color: var(--color-secondary);
  color: var(--color-primary);
  border-radius: 30px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease-out;

  &:hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  ${(props) =>
    props.isLanding &&
    `
    width: 220px;
    `}

  ${(props) =>
    props.isSecondary &&
    `
    background-color: var(--color-primary);
    color: var(--color-secondary);
    `}

    ${(props) =>
    props.isOutline &&
    `
    width: 200px;
    border: 1px solid var(--color-primary);
    `}
`;

export const SearchBar = styled.input`
  padding: 0 15px;
  line-height: 40px;
  border: 1px solid ${colors.textSecondary};
  border-radius: 6px;
  font-size: 14px;

  @media screen and (${breakpoints.tablet}) {
    font-size: 16px;
  }
`;
