import { TextField, type TextFieldVariants } from "@mui/material";
import type { InputTextProps } from "@constants";

export const InputText: React.FC<InputTextProps> = ({ id, label, value, onChange, placeholder, variant }) => {
    
    const textFieldVariant: TextFieldVariants = variant !== undefined ? variant : 'standard';

    return (
        <TextField 
            id={id} 
            label={label}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            autoComplete="new-password"
            fullWidth
            variant={textFieldVariant}
            size="small"
        />
    );
};