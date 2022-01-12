import { FC } from "react";
import { IButton } from "./interface";
import { StyledButton } from "./styles";


 const Button: FC<IButton> = (props) => {
    return <StyledButton {...props}/>;
  };


export default Button;