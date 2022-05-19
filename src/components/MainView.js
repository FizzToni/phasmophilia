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
    AcUnitOutlined, BlurOnOutlined, ErrorOutline, MenuBookOutlined,
    MicOffOutlined,
    PanToolOutlined, RestartAltRounded,
    ScatterPlotOutlined, SmokeFreeOutlined,
    SpeakerPhoneOutlined, ExpandMoreRounded
} from "@mui/icons-material";

import {Accordion, ListSubheader, AccordionSummary, AccordionDetails, Chip} from "@mui/material";
import GhostView, {manage_evidence_collection} from "./GhostView";

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

const ghostWriting = <MenuBookOutlined/>;
const fingerPrints = <PanToolOutlined/>;
const freezingTemp = <AcUnitOutlined/>;
const spiritBox    = <MicOffOutlined/>;
const ghostOrbs    = <ScatterPlotOutlined/>;
const emf5         = <SpeakerPhoneOutlined/>;
const dots         = <BlurOnOutlined/>;

const banshee = [dots, ghostOrbs, fingerPrints];
const demon = [ghostWriting, fingerPrints, freezingTemp];
const goryo = [dots, emf5, fingerPrints];
const hantu = [ghostOrbs, fingerPrints, freezingTemp];
const jinn = [emf5, fingerPrints, freezingTemp];
const mare = [ghostWriting, ghostOrbs, spiritBox];
const myling = [ghostWriting, emf5, fingerPrints];
const obake = [emf5, ghostOrbs, fingerPrints];
const oni = [dots, emf5, freezingTemp];
const onryo = [ghostOrbs, fingerPrints, spiritBox];
const phantom = [dots, fingerPrints, spiritBox];
const poltergeist = [ghostWriting, fingerPrints, spiritBox];
const raiju = [dots, emf5, ghostOrbs];
const revenant = [ghostWriting, ghostOrbs, freezingTemp];
const shade = [ghostWriting, emf5, spiritBox];
const spirit = [ghostWriting, emf5, spiritBox];
const the_mimic = [fingerPrints, freezingTemp, spiritBox];
const the_twins = [emf5, freezingTemp, spiritBox];
const wraith = [dots, emf5, spiritBox];
const yokai = [dots, ghostOrbs, spiritBox];
const yurei = [dots, ghostOrbs, freezingTemp];


export default function MiniDrawer() {
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

    let ev_state = false;
    const [possibleGhost, setPossibleGhost] = React.useState(false);
    const handleEvidenceSelection = (ev_id) => {
        console.log("Evidence id:" + ev_id);
        manage_evidence_collection(ev_id);
    };

    return (
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
                        }}
                    >
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
                        <PanToolOutlined sx={{
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
                        <AcUnitOutlined sx={{
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
                        <ScatterPlotOutlined sx={{
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
                        <SpeakerPhoneOutlined sx={{
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
                        <BlurOnOutlined sx={{
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
                        <MenuBookOutlined sx={{
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
                        <MicOffOutlined sx={{
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
                        <SmokeFreeOutlined sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}/>
                        <ListItemText sx={{ opacity: open ? 1 : 0 }}  primary="Smudge Timer"/>
                    </ListItemButton>
                    <Divider/>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}>
                        <ErrorOutline sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}/>
                        <ListItemText sx={{ opacity: open ? 1 : 0 }}  primary="Nightmare Mode"/>
                    </ListItemButton>
                    <Divider/>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}>
                        <RestartAltRounded sx={{
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

                <GhostView/>


            </Box>
        </Box>
    );
}
