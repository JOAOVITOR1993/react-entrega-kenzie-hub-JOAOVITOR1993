import { StyledForm } from "./styles"


export const Form = ({ onSubmit, children }) =>{
    return(
        <StyledForm onSubmit={onSubmit} noValidate>{children}</StyledForm>
    )
}
