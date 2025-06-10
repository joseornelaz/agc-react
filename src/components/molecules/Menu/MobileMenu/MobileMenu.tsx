import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Typography } from "../../../atoms/Typography/Typography";

export const MobileMenu: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const menuOpen = Boolean(anchorEl);
    const menuItems = ["Plan de Estudios", "Cursos Activos", "Calendario", "Calificaciones", "Cursos y certificaciones", "Sala de conversación", "Videos y lecturas de interes"];

    // const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorEl(event.currentTarget);
    // };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <Menu
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleMenuClose}
            slotProps={{
            paper: {
                sx: { width: '100%', maxWidth: 335, margin: 'auto', mt: 1, padding: '8px', borderRadius: '20px' }
            }
            }}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Typography component="h3" variant="h3" sxProps={{ px: 2, py: 1, fontWeight: 'bold', color: 'primary.main', textAlign: 'center' }}>
                TU PLATAFORMA
            </Typography>
            {
                menuItems.map((text, index) => (
                    <MenuItem 
                        key={index} 
                        onClick={handleMenuClose} 
                        sx={{ 
                            justifyContent: 'center',
                            border: '1px solid #AAB1B6',
                            borderRadius: '15px',
                            mt: index === 0 ? 0 : 2,
                        }}
                    >
                        {text}
                    </MenuItem>
                ))
            }
        </Menu>
    );
}