import { Label } from "../Label";
import { StyledInput } from "./styles";

export const Input = ({ type, placeholder, id, textLabel, register, defaultValue }) => {
  return (
    <StyledInput>
      <Label htmlFor={id} textLabel={textLabel}/>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        defaultValue={defaultValue}
      />
    </StyledInput>
  );
};
