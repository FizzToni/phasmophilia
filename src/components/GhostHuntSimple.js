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
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import {
    AcUnitOutlined, BlurOnOutlined, ErrorOutline, ErrorOutlined, MenuBookOutlined,
    MicOffOutlined, PanTool,
    PanToolOutlined,
    PersonSearch, RestartAltRounded,
    ScatterPlotOutlined, SmokeFreeOutlined,
    SpeakerPhoneOutlined, ExpandMoreRounded
} from "@mui/icons-material";

import {Accordion, ListSubheader, AccordionSummary, AccordionDetails, Chip} from "@mui/material";

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
                <Accordion expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ flexShrink: 0 }}>Spirit</Typography>
                        <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                            {spirit}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <Divider><Chip label="Smudging"/></Divider>
                            When smudged, spirits will not hunt for 180 seconds, as opposed to the standard 90 seconds. When testing for a Spirit, ensure that your average sanity is below 50% by reading it off the sanity monitor, or checking that it has hunted (or attempted to hunt) at least once. Then, smudge the ghost and count for 180 seconds. If the ghost hunts within 90 to 180 seconds, then it is not a Spirit. If it only hunts after the 180 seconds are up, then it is likely be a Spirit. To ensure that the smudge does not fail (causing the ghost to hunt much earlier than 90 seconds), wait for it to first use the crucifix, interact with an object, or use a motion sensor to locate it, then smudge the surrounding area.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ flexShrink: 0 }}>Demon</Typography>
                        <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                            {demon}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Divider><Chip label="Early Hunter"/></Divider>
                        <Typography>
                            Demons can begin hunting below an average sanity of 70%, compared to most other ghosts at 50%, with no pre-requisites to this threshold. Demons also have a rare ability to hunt at any sanity level.
                        </Typography>
                        <Divider><Chip label="Hunt Cooldown"/></Divider>
                        <Typography>
                            Demons also have a minimum hunt cooldown of 20 seconds, as opposed to the standard 25 seconds of other ghosts.
                        </Typography>
                        <Divider><Chip label="Crucifix"/></Divider>
                        <Typography>
                            Crucifixes have an effective range of 5 meters instead of the standard 3 meters. Having a lazily placed crucifix burn when the ghost would normally not have used it may indicate a Demon, though this strategy is flawed by the fact that ghosts may happen to wander out of their room and into the crucifix's range.
                        </Typography>
                        <Divider><Chip label="Smudging"/></Divider>
                        <Typography>
                            Smudging a Demon will prevent it from hunting for only 60 seconds, as opposed to 90 seconds with most other ghosts
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ flexShrink: 0 }}>Revenant</Typography>
                        <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                            {revenant}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Divider><Chip label="Speed"/></Divider>
                        <Typography>
                            During a hunt, if any player is in the LoS of the Revenant, it will move at approximately twice the standard ghost speed. If nobody is in LoS, it will move at approximately half the standard speed.
                        </Typography>
                        <Divider><Chip label="Footsteps"/></Divider>
                        <Typography>
                            Players can listen to its footstep sounds when hiding from the ghost; if it is comparatively slow, then it may be a Revenant. Note that footstep sounds are approximately synced with ghost speed, so players should be listening for footstep sounds that occur approximately half as often.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ flexShrink: 0 }}>Poltergeist</Typography>
                        <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                            {poltergeist}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Divider><Chip label="Interactions"/></Divider>
                        <Typography>
                            Poltergeists tend to interact with objects much more frequently than other ghosts.
                        </Typography>
                        <Divider><Chip label="Multi-throw"/></Divider>
                        <Typography>
                            Poltergeists can also move multiple objects at once, which will decrease nearby players' sanity; the decrease is by 2% times the number of objects moved.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ flexShrink: 0 }}>Banshee</Typography>
                        <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                            {banshee}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Divider><Chip label="Obsession"/></Divider>
                        <Typography>
                            During hunts, a Banshee can only notice, chase, or kill one person at a time. If a hunting ghost seems to ignore nearby players to look for or chase a distant player, then the ghost is likely a Banshee; if it passes through one or more players without killing them while not under the effect of Smudge Sticks, a Banshee can be confirmed outright.
                            <br/>
                            If the Banshee's main target is not in the investigation area, it will chase and attempt to kill anyone it sees.
                        </Typography>
                        <Divider><Chip label="Sanity Level"/></Divider>
                        <Typography>
                            Banshees will only check their target's sanity level to initiate a hunt as opposed to the team's average sanity. A ghost being excessively aggressive (hunting often) despite a relatively high average sanity level, and vice-versa, might indicate a Banshee.
                        </Typography>
                        <Divider><Chip label="Roaming"/></Divider>
                        <Typography>
                            Banshees tend to roam towards the target player outside of hunts; ghost activity occuring more often than usual near a specific player and away from the ghost room is a good sign of a Banshee.
                        </Typography>
                        <Divider><Chip label="Singing"/></Divider>
                        <Typography>
                            A Banshee is more likely to perform ghost events where it sings over other types of ghost events.
                        </Typography>
                        <Divider><Chip label="Shriek"/></Divider>
                        <Typography>
                            Banshees have a chance of emitting a unique type of shriek-like paranormal sounds on the parabolic microphone. Any player can consider taking one and aiming it in the general area of the ghost.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </Box>
        </Box>
    );
}
