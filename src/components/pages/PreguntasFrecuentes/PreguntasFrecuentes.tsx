import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Divider,
  Menu,
  MenuItem
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const PreguntasFrecuentes = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (panel: string) => (_: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ pt: 7, pb: 7 }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ borderBottom: "1px solid #C7C7C7", bgcolor: "#fff" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar alt="Martin SM" src="" />
            <Typography variant="subtitle1" sx={{ ml: 1 }}>
              Martin SM
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <HelpOutlineIcon />
            </IconButton>
            <IconButton>
              <NotificationsNoneIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mt: 2,
            mb: 2,
          }}
        >
          <HelpOutlineIcon color="primary" />
          <Typography color="primary" fontWeight={600}>
            Déjanos tu mensaje y nos contactaremos a la brevedad posible.
          </Typography>
        </Box>

        <Divider textAlign="center" sx={{ my: 2 }}>
          <Typography color="primary">Generales</Typography>
        </Divider>

        {["1", "2", "3", "4"].map((item) => (
          <Accordion
            key={`general-${item}`}
            expanded={expanded === `panel-${item}`}
            onChange={handleChange(`panel-${item}`)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Pregunta Frecuente</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Aquí va la respuesta a la pregunta frecuente número {item}.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        <Divider textAlign="center" sx={{ my: 2 }}>
          <Typography color="primary">Requisitos</Typography>
        </Divider>

        {["5"].map((item) => (
          <Accordion
            key={`req-${item}`}
            expanded={expanded === `panel-${item}`}
            onChange={handleChange(`panel-${item}`)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Pregunta Frecuente</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Aquí va la respuesta a la pregunta frecuente número {item}.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>

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
        <Typography variant="h3" sx={{ px: 2, py: 1, fontWeight: 'bold', color: 'primary.main', textAlign: 'center' }}>
          TU PLATAFORMA
        </Typography>
        {["Plan de Estudios", "Cursos Activos", "Calendario", "Calificaciones", "Cursos y certificaciones", "Sala de conversación", "Videos y lecturas de interes"].map((text, index) => (
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
        ))}
      </Menu>

      <BottomNavigation
        showLabels
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          borderTop: "1px solid #ddd",
        }}
      >
        <BottomNavigationAction icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction
          icon={<AddCircleOutlineIcon sx={{ fontSize: 40 }} />}
          onClick={handleMenuClick}
        />
        <BottomNavigationAction icon={<HomeOutlinedIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default PreguntasFrecuentes;
