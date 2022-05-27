import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import {
    AcUnitOutlined, BlurOnOutlined, ErrorOutline, MenuBookOutlined, MicOffOutlined, PanToolOutlined, RestartAltRounded,
    ScatterPlotOutlined, SmokeFreeOutlined, SpeakerPhoneOutlined, ExpandMoreRounded, HistoryEduTwoTone
} from "@mui/icons-material";
import {Accordion, ListSubheader, AccordionSummary, AccordionDetails} from "@mui/material";

import {ghost_details} from "./Ghosts";
import * as ghosts from "./Ghosts";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const themeDark = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#212121',
        },
        secondary: {
            main: '#ff0000',
        },
        background: {
            default: '#5f0000',
            paper: '#3a3a3a',
        },
        text: {
            primary: '#ffffff',
        },
        warning: {
            main: '#d70000',
        },
        action: {
            main: '#8b8b8b',
        }
    },
});


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);




let ghost_list = [];
let collected_evidence = [];

export function init_ghost_hunt() {
    ghost_list = (ghosts.get_all_ghosts());
}

export function manage_evidence_collection(evidence_id) {
    if (collected_evidence.includes(evidence_id)) {
        const index = collected_evidence.indexOf(evidence_id);
        collected_evidence.splice(index, 1);
    }
    else {
        collected_evidence.push(evidence_id);
    }
    console.clear();
    console.log("collected evidence: " + collected_evidence + "\ncollected_evidence.length: " + collected_evidence.length);
    ghost_list.forEach(function (ghost) {
        ghost.possibility = 0;
        collected_evidence.forEach(function (evidence) {
            if (ghost.evidence.includes(evidence)) {
                ghost.possibility++;
            }
        });
        console.log(ghost.name + ": " + ghost.possibility);
    });
}

export default function MiniDrawer() {
    init_ghost_hunt();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [expanded, setExpanded] = React.useState(false);
    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [chance, setChance] = React.useState(0);
    const handleEvidenceSelection = (ev_id) => {
        if (nightmare) {
            if (collected_evidence.length === 2) {
                return;
            }
        }
        manage_evidence_collection(ev_id);
        setChance(collected_evidence.length);
    };

    const [nightmare, setNightmare] = React.useState(false);
    const handleNightmare = () => {
        setNightmare(!nightmare);
        console.log("Nightmare mode: " + !nightmare);
    }

    const handleReset = () => {
        window.location.reload();
    }

    return (
        <ThemeProvider theme={themeDark}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                ...(open && { display: 'none' }),
                            }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Quick Hunt
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                {open ?  'Evidences' : 'EV'}
                            </ListSubheader>
                        }>
                        <ListItemButton
                            onClick={() => handleEvidenceSelection( 0)}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}>
                            <PanToolOutlined color={collected_evidence.includes(0) ? 'warning' : 'action'}
                                sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}/>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}  primary="Fingerprints"/>
                        </ListItemButton>

                        <ListItemButton
                            onClick={() => handleEvidenceSelection( 1)}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}>
                            <AcUnitOutlined color={collected_evidence.includes(1) ? 'warning' : 'action'}
                                sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}/>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}  primary="Freezing Temperatures"/>
                        </ListItemButton>

                        <ListItemButton
                            onClick={() => handleEvidenceSelection( 2)}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}>
                            <ScatterPlotOutlined color={collected_evidence.includes(2) ? 'warning' : 'action'}
                                sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}/>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}  primary="Ghost Orbs"/>
                        </ListItemButton>

                        <ListItemButton
                            onClick={() => handleEvidenceSelection( 3)}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}>
                            <SpeakerPhoneOutlined color={collected_evidence.includes(3) ? 'warning' : 'action'}
                                sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}/>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}  primary="EMF 5"/>
                        </ListItemButton>

                        <ListItemButton
                            onClick={() => handleEvidenceSelection( 4)}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}>
                            <BlurOnOutlined color={collected_evidence.includes(4) ? 'warning' : 'action'}
                                sx={{
                                marginRight: 24,
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}/>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}  primary="D.O.T.S."/>
                        </ListItemButton>

                        <ListItemButton
                            onClick={() => handleEvidenceSelection( 5)}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}>
                            <MenuBookOutlined color={collected_evidence.includes(5) ? 'warning' : 'action'}
                                sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}/>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}  primary="Ghost Writings"/>
                        </ListItemButton>

                        <ListItemButton
                            onClick={() => handleEvidenceSelection( 6)}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}>
                            <MicOffOutlined color={collected_evidence.includes(6) ? 'warning' : 'action'}
                                sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}/>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}  primary="Spirit Box"/>
                        </ListItemButton>

                    </List>
                    <Divider/>
                    <List
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                {open ?  'Tools' : 'T'}
                            </ListSubheader>
                        }>

                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}>
                            <HistoryEduTwoTone
                                sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}/>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}  primary="Tools"/>
                        </ListItemButton>

                        <Divider/>

                        <ListItemButton
                            onClick={handleNightmare}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}>
                            <ErrorOutline color={nightmare ? 'warning' : 'text'}
                                sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}/>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}  primary="Nightmare Mode"/>
                        </ListItemButton>

                        <Divider/>

                        <ListItemButton
                            onClick={() => handleReset()}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}>
                            <RestartAltRounded
                                sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}/>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}  primary="Restart"/>
                        </ListItemButton>

                    </List>
                </Drawer>

                <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
                    <DrawerHeader/>

                    <div>
                        {ghost_list.map(function (ghost) {
                            // noinspection JSValidateTypes
                            return (
                                <Accordion expanded={expanded === "panel"+(ghost.id)} hidden={!(chance === ghost.possibility)} onChange={handleAccordionChange("panel"+(ghost.id))}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreRounded />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header">

                                        <Typography sx={{ flexShrink: 0, minWidth: 100, textAlign: 'left' }}>{ghost.name}</Typography>
                                        <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                                            {ghost.evidences_icons}
                                        </Typography>
                                    </AccordionSummary>

                                    <AccordionDetails>
                                        {ghost_details(ghost).map(function(detail, idx){
                                            return (
                                                <div key={idx}>
                                                    {detail}
                                                </div>
                                            )
                                        })}
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}
                    </div>

                </Box>
            </Box>
        </ThemeProvider>
    );
}
