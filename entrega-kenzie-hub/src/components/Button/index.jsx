import { StyledButton } from "./styles"

export const Button = ( { className, type, onClick, name } ) =>{
    return(
        <StyledButton className={className}type={type} onClick={onClick}>{name}</StyledButton>
    )
}