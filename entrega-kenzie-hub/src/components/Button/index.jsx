import { StyledButton } from "./styles"

export const Button = ( {type, onClick, name } ) =>{
    return(
        <StyledButton type={type} onClick={onClick}>{name}</StyledButton>
    )
}