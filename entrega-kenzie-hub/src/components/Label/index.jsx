import { StyledLabel } from "./style"

export const Label = ({ htmlFor, textLabel }) =>{

    return(
        <StyledLabel htmlFor={htmlFor}>{textLabel}</StyledLabel>
    )
}