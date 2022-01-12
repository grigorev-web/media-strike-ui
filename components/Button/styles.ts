import styled from "styled-components";
import {
  buttonBackgroundColor,
  buttonBackgroundColorActive,
  buttonBackgroundColorHover,
  buttonTextColor,
} from "./colors";
import { IButton } from "./interface";
import SegoUIBold from '../../Fonts/SegoeUIBold.ttf'

export const StyledButton = styled.div`
position: relative;
outline: none;
display: inline-block;
font-weight: 500;
font-size: 15px;
padding: 0.375rem 0.75rem;
line-height: 1.4;

color: ${(props: IButton) => {
  return buttonTextColor[props.variant];
}}};
text-align: center;
vertical-align: middle;
user-select: none;
background-color: ${(props: IButton) => {
  if (props.outline) return "transparent";
  if (props.disabled) return buttonBackgroundColor[props.variant] + 'a8';
  return buttonBackgroundColor[props.variant];
}};
border: 1px solid transparent;
border-color: ${(props: IButton) =>{
  if (props.disabled) return buttonBackgroundColor[props.variant] + 'a8';
  return buttonBackgroundColor[props.variant]
  }};

border-radius: 0.25rem;
transition: color 0.15s, background-color 0.15s, border-color 0.15s,
  box-shadow 0.15s;
-webkit-appearance: button;
text-transform: none;
overflow: visible;
/* font-family: inherit; */
text-indent: 0px;
text-shadow: none;
margin: 3px;
cursor: pointer;
width:fit-content;
min-width:50px;


&:hover {
  background-color: ${(props: IButton) => {
    if (props.outline) return "transparent";
    return buttonBackgroundColorHover[props.variant];
  }};
  text-decoration: ${(props: IButton) => { return props.variant === 'link' ? 'underline' : 'none'}};
}

&:active {
  background-color: ${(props: IButton) => {
    if (props.outline) return "transparent";
    return buttonBackgroundColorActive[props.variant];
  }};
}
`;
