import styled from "styled-components";
import { breakpoints, colors, fonts } from "./theme";
import {
  Form as FormFormik,
  Field as FieldFormik,
  ErrorMessage as ErrorMessageFormik,
} from "formik";

export const Button = styled.button`
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

export const Form = styled(FormFormik)``;

export const FormRow = styled.div`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
`;

export const Field = styled(FieldFormik)`
  border: 1px solid ${colors.textSecondary};
  border-radius: 6px;
  width: 100%;
  line-height: 50px;
  height: 50px;
  padding: 0 12px;
  outline: none;
  font-size: 14px;
  font-family: ${fonts.primary};

  &:focus {
    border-color: ${colors.textPrimary};
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const ErrorMessage = styled(ErrorMessageFormik)`
  font-size: 14px;
  color: ${colors.primary};
  padding-top: 8px;
`;
