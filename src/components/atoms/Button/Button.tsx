import Button from '@mui/material/Button';

type DSButtonProps = {
    color?: 'primary' | 'success' | 'error' | 'info' | 'warning'
    disabled?: boolean;
    variant?: 'text' | 'outlined' | 'contained';
    size?: 'small' | 'medium' | 'large'    
    children: React.ReactNode;
};

const DSButton = ({ color = 'primary', variant = 'text', size = 'medium', children, disabled }: DSButtonProps) => {
    return (
        <Button 
            disabled={disabled}
            color={color}
            variant={variant} 
            size={size}
        >{children}</Button>
    );
}

export default DSButton;