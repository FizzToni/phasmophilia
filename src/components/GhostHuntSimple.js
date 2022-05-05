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

        console.log("You found " + ev_id);
        if (!ev_state) {
            ev_state = true;
        } else {
            ev_state = false;
        }
        setPossibleGhost(ev_state);
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
                        onClick={() => handleEvidenceSelection( 1)}
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

                <Accordion expanded={expanded === 'panel00'} onChange={handleAccordionChange('panel00')}>
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

                <Accordion expanded={expanded === 'panel01'} onChange={handleAccordionChange('panel01')}>
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

                <Accordion expanded={expanded === 'panel02'} onChange={handleAccordionChange('panel02')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ flexShrink: 0 }}>Goryo</Typography>
                        <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                            {goryo}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Divider><Chip label="D.O.T.S."/></Divider>
                        <Typography>
                            You will only be able to see the Goryo produce a D.O.T.S Projector-based silhouette through a video camera, and if there are no people in the ghost room. If a player sees the ghost interact with the projector on the camera or on the Video Feed, but the players at the location do not see it, then the ghost is likely a Goryo.

                            Standing outside of the ghost room will suffice for allowing the ghost to appear through the projector.
                            Note that its power does not apply to physical manifestations during a ghost event or a hunt; Goryos can physically manifest and be fully visible in this manner like any other ghost.
                        </Typography>
                        <Divider><Chip label="Roaming"/></Divider>
                        <Typography>
                            When not hunting, Goryo are less likely to roam around, and consequently stay in its ghost room more often. If the ghost tends to remain in its ghost room, including at the start of ghost events and hunts, with interactions mainly confined to the area in and around the ghost room, then it could be a Goryo.                        </Typography>
                        <Divider><Chip label="Nightmare"/></Divider>
                        <Typography>
                            On Nightmare difficulty, the Goryo will always provide D.O.T.S projector as one of its two evidences. Not obtaining this piece of evidence in Nightmare rules the ghost out.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel03'} onChange={handleAccordionChange('panel03')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ flexShrink: 0 }}>Hantu</Typography>
                        <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                            {hantu}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Divider><Chip label="Speed"/></Divider>
                        <Typography>
                            During a hunt, the Hantu has different speeds in rooms of different temperatures; it is fastest in cold rooms below 3°C (37.4°F) and slowest in warm rooms above 15°C (59°F). Additionally, the Hantu does not accelerate with line-of-sight, unlike most other ghosts. This may make it easy to identify in an extended chase, asides from possibly making it easier to escape if the room is warm enough. If you can easily loop the ghost without crouching in a warm room around a large furniture piece such as a kitchen counter, then the ghost is most likely a Hantu.
                        </Typography>
                        <Divider><Chip label="Fuse"/></Divider>
                        <Typography>
                            Hantu are twice more likely to turn off the fuse box; frequent outages might be a sign of a Hantu. On the other hand, Hantu will not turn the fuse box on; having the ghost turn the fuse box on eliminates Hantu as a possibility.
                        </Typography>
                        <Divider><Chip label="Breath"/></Divider>
                        <Typography>
                            Hantu will also emit freezing breath in rooms below 3°C (37.4°F) when it manifests during a hunt. Note that this breath is visible only when the ghost is also physically visible, making it harder to see as the breath may be partially obscured by the ghost model.
                        </Typography>
                        <Divider><Chip label="Nightmare"/></Divider>
                        <Typography>
                            On Nightmare difficulty, the Hantu will always provide Freezing Temperatures as one of its two evidences. Not obtaining this piece of evidence in Nightmare rules the ghost out.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel04'} onChange={handleAccordionChange('panel04')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ flexShrink: 0 }}>Jinn</Typography>
                        <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                            {jinn}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Divider><Chip label="Sanity"/></Divider>
                        <Typography>
                            Jinns have an ability that when used, can instantly decrease the sanity of all players within 3 meters of it by 25%.
                        </Typography>
                        <Divider><Chip label="Speed"/></Divider>
                        <Typography>
                            If the breaker is on during a hunt and player is in the line of sight of the Jinn, it will chase the player at twice their regular speed until they are within about 2 meters of the player, thereafter chasing with the default speed. This can be tested by standing at the end of a long hallway or room, then waiting for the ghost to achieve line-of-sight from the other end. If its speed increases instantly and not over a period of time, then it is likely a Jinn. Be careful not to confuse this with the Revenant; the Jinn's speed is normal if it is not chasing a player, unlike the Revenant.
                        </Typography>
                        <Divider><Chip label="Breaker"/></Divider>
                        <Typography>
                            Both of the abilities listed above can be disabled by turning off the breaker. Consequently, a Jinn never turns the fuse box off by itself, though the breaker can still be tripped by overloading it with lights. If the breaker is not turned off despite high ghost activity for a long period of time, the ghost could be a Jinn, though this should not be used as definitive proof. Conversely, if the ghost turns the breaker off directly, it cannot be a Jinn.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel05'} onChange={handleAccordionChange('panel05')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ flexShrink: 0 }}>Mare</Typography>
                        <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                            {mare}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Divider><Chip label="Early Hunter"/></Divider>
                        <Typography>
                            Mares have an increased hunting threshold of 60% if the lights in its room are off. On the other hand, turning on the lights on in its room will decrease its sanity threshold to 40%.
                        </Typography>
                        <Divider><Chip label="Lights"/></Divider>
                        <Typography>
                            Mares have a chance of turning the lights off immediately if a player turns one on in the vicinity. Spamming the light switch will not trigger this interaction, so this is best utilized with some time between switching the lights on/off. This interaction will give off an EMF 2 reading. Note that any ghost can do so purely by coincidence. Ghost events do not count for this ability.
                        </Typography>
                        <Divider><Chip label="Interactions"/></Divider>
                        <Typography>
                            Mares will have decreased interaction activity if its current room is lit.
                        </Typography>
                        <Divider><Chip label="Lights"/></Divider>
                        <Typography>
                            Mares never turn individual lights on; a ghost doing so confirms that it is not a Mare. Mares do not have any special mechanic regarding fuse boxes, and can turn them on or off.
                        </Typography>
                        <Divider><Chip label="Shattering Lights"/></Divider>
                        <Typography>
                            Mares are more likely to choose manifestation events where it shatters the lights, rendering them unusable.
                        </Typography>
                        <Divider><Chip label="Roamer"/></Divider>
                        <Typography>
                            Mares have a high chance to roam long ranges if the lights are on in the room.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel06'} onChange={handleAccordionChange('panel06')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ flexShrink: 0 }}>Myling</Typography>
                        <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                            {myling}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Divider><Chip label="Quiet Hunter"/></Divider>
                        <Typography>
                            Mylings have quieter footsteps than other ghosts during a hunt. Throw any electronic equipment on the ground next to the player and listen; if footsteps can only be heard within the range that electronics begin to flicker (about 10 meters), then the ghost may be a Myling. This test only applies when the ghost is on the same floor as the player.
                        </Typography>
                        <Divider><Chip label="Frequent Sounds"/></Divider>
                        <Typography>
                            Players can hear paranormal sounds, such as murmuring or growling, by pointing a Parabolic Microphone at an idle ghost. If these sounds are more frequent than usual, the ghost may be a Myling.
                        </Typography>

                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel07'} onChange={handleAccordionChange('panel07')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ flexShrink: 0 }}>Obake</Typography>
                        <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                            {obake}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Divider><Chip label="Fingerprints"/></Divider>
                        <Typography>
                            When an Obake interacts with a surface that allows for fingerprints, there is a 75% chance that it will leave fingerprints, as opposed to the 100% chance for all other ghosts. Seperately, Obake may also use an ability that halves the remaining duration of existing fingerprints on the map, potentially causing them to disappear within seconds of appearing.
                        </Typography>
                        <Divider><Chip label="Shape Shift"/></Divider>
                        <Typography>
                            In addition, there is a 16.6% chance that it will leave a special fingerprint not seen with other ghosts. These consist of having six-fingered handprints instead of five, two fingerprints on light switches instead of one, and five fingerprints on keyboards and Prison cell block gates instead of four.
                        </Typography>
                        <Divider><Chip label="Nightmare"/></Divider>
                        <Typography>
                            On Nightmare difficulty, the Obake will always provide Fingerprints as one of its two evidences. Not obtaining this piece of evidence in Nightmare rules the ghost out.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel08'} onChange={handleAccordionChange('panel08')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ flexShrink: 0 }}>Oni</Typography>
                        <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                            {oni}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Divider><Chip label="Ghost Events"/></Divider>
                        <Typography>
                            Oni are more active and will cause frequent ghost events and interactions to happen. In the smallest maps such as Tanglewood Street House, if the ghost performs ghost events almost as if it were all around the house, it may be an Oni.
                        </Typography>
                        <Divider><Chip label="Interactions"/></Divider>
                        <Typography>
                            Oni have an ability that, when used, allows it to throw an item at a higher speed and with more height.
                        </Typography>
                        <Divider><Chip label="Ghost Events"/></Divider>
                        <Typography>
                            An Oni will also never cause ghost events where it appears as a smoke and hisses at a player. An Oni can be ruled out if the ghost does such an event. The Oni can still hiss as part of a manifestation ghost event.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel09'} onChange={handleAccordionChange('panel09')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ flexShrink: 0 }}>Onryo</Typography>
                        <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                            {onryo}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Divider><Chip label="Early Hunter"/></Divider>
                        <Typography>
                            The Onryo has a 60% hunt sanity threshold if there are no flames near it.
                        </Typography>
                        <Divider><Chip label="Sanity"/></Divider>
                        <Typography>
                            Onryo have a 50%<Typography variant={"caption text"}>verify</Typography> chance of hunting regardless of sanity when any flame is extinguished by the ghost. For every dead player, this chance increases; the chance is almost 100% when two people are dead.
                        </Typography>
                        <Divider><Chip label="Crucifix"/></Divider>
                        <Typography>
                            An Onryo will prioritize blowing out a flame instead of using a crucifix. This can be tested for by placing a crucifix down, and multiple lit candles in close proximity; if the candles repeatedly go out without the ghost ever hunting nor the crucifix ever burning, even at low average sanity, the ghost may be an Onryo. On the other hand, if the crucifix burns without any nearby candle being extinguished, the ghost is not an Onryo.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel10'} onChange={handleAccordionChange('panel10')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ flexShrink: 0 }}>Phantom</Typography>
                        <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                            {phantom}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Divider><Chip label="Photo"/></Divider>
                        <Typography>
                            Taking a photo of a Phantom will make it instantly and temporarily disappear for that specific instance that it appears. This will not stop a manifestation nor a hunt if one is already in progress. In a ghost event, if the ghost disappeared as the picture was taken but his footsteps and vocalizations can still be heard, it means that it is a Phantom.
                        </Typography>
                        <Divider textAlign={"left"}>Journal</Divider>
                        <Typography>
                            The ghost's physical image will not be visible in the picture found in the journal, but will be labelled as a "Ghost" picture. Additionally, the image will appear without any electronic interference. However, any ghost can have the same effect if the photo is taken right at the end of a ghost event; be sure that the ghost event is still ongoing even when the ghost has disappeared.
                        </Typography>
                        <Divider><Chip label="Flickering"/></Divider>
                        <Typography>
                            During a hunt, a Phantom will flash visible every 1 to 2 seconds as opposed to every 0.3 to 1 seconds for other ghosts. Watch for the ghost's flickering rate; if it is invisible for longer periods of time, it is likely a Phantom.
                        </Typography>
                        <Divider><Chip label="Teleport"/></Divider>
                        <Typography>
                            The Phantom also has an ability very similar to the Wraith's, which it can use (not during a manifestation) to walk to a random player's location regardless of distance. After this, the Phantom will continue normal activity.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel11'} onChange={handleAccordionChange('panel11')}>
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

                <Accordion expanded={expanded === 'panel12'} onChange={handleAccordionChange('panel12')}>
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

                <Accordion expanded={expanded === 'panel13'} onChange={handleAccordionChange('panel13')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ flexShrink: 0 }}>Raiju</Typography>
                        <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                            {raiju}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Divider><Chip label="Early Hunter"/></Divider>
                        <Typography>
                            Rajius can hunt from an average sanity of 65% if there are active electronics near it.
                        </Typography>
                        <Divider><Chip label="Speed"/></Divider>
                        <Typography>
                            The presence of any active electronics near the Raiju will also cause it to gain significant speed during a hunt, almost equal to that of a Revenant. Having a ghost that is moving quickly visually and audially in the presence of electronics and even while not chasing someone may indicate that the ghost is a Raiju.
                        </Typography>
                        <Divider><Chip label="Electronics"/></Divider>
                        <Typography>
                            During ghost events and hunts, the Raiju will interfere with electronics at a longer range than the average 10 meters for every other ghost. This distance only applies to electronics that are on the same floor as the ghost.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel14'} onChange={handleAccordionChange('panel14')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ flexShrink: 0 }}>Shade</Typography>
                        <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                            {shade}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Divider><Chip label="Interactions"/></Divider>
                        <Typography>
                            Shades will perform little to no activity in the presence of players in its room. Additionally, the chance of ghost events is tied to average sanity; the success rate of ghost events will increase gradually as sanity decays, capping at 50% where an attempted ghost event will always succeed.
                        </Typography>
                        <Divider><Chip label="Shy Hunter"/></Divider>
                        <Typography>
                            Shades will not hunt in the presence of at least one player in the same room as it. A ghost not hunting with players in the same room may be a Shade, though it is possible for the Shade to wander out of its room, before hunting.
                        </Typography>
                        <Divider><Chip label="Late Hunter"/></Divider>
                        <Typography>
                            Shades have a very low hunting sanity threshold, which is at only 35%. If the average sanity of the team is very low but hunts remain relatively sparse or do not occur at all, it might be a sign that the ghost is a Shade.
                        </Typography>
                        <Divider><Chip label="Ghost Event"/></Divider>
                        <Typography>
                            Shades tend to prefer the mist-type "hissing" ghost event over manifesting. If it does manifest, it will prefer (though not always have) the shadow-type ghost form.
                        </Typography>
                        <Divider><Chip label="Summoning Circle"/></Divider>
                        <Typography>
                            If summoned by a Summoning Circle, a Shade has a chance[verify]will appear as a shadow in the circle instead of a fully visible form.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel15'} onChange={handleAccordionChange('panel15')} hidden={possibleGhost}>
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
                        <Divider><Chip label="Smudging"/></Divider>
                        <Typography>
                            When smudged, spirits will not hunt for 180 seconds, as opposed to the standard 90 seconds. When testing for a Spirit, ensure that your average sanity is below 50% by reading it off the sanity monitor, or checking that it has hunted (or attempted to hunt) at least once. Then, smudge the ghost and count for 180 seconds. If the ghost hunts within 90 to 180 seconds, then it is not a Spirit. If it only hunts after the 180 seconds are up, then it is likely be a Spirit. To ensure that the smudge does not fail (causing the ghost to hunt much earlier than 90 seconds), wait for it to first use the crucifix, interact with an object, or use a motion sensor to locate it, then smudge the surrounding area.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel16'} onChange={handleAccordionChange('panel16')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ flexShrink: 0 }}>The Mimic</Typography>
                        <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                            {the_mimic}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Divider><Chip label="Evidence"/></Divider>
                        <Typography>
                            The Mimic presents Ghost Orbs as a fourth evidence (or third evidence in Nightmare difficulty). Conclusively identifying two of The Mimic's main evidences plus Ghost Orbs in Nightmare difficulty confirms that the ghost is The Mimic. On the contrary, if you managed to obtain only one or two (depending on difficulty) of The Mimic's primary evidences and a Ghost Orb, be sure that the ghost doesn't give off another piece of evidence to safely rule out The Mimic.
                        </Typography>
                        <Divider><Chip label="Abilities"/></Divider>
                        <Typography>
                            The Mimic also has the ability to replicate other ghosts' abilities, such as the Obake's six-fingered handprint, or hunting sanity thresholds. This could be used against it if it presents an ability while also showing contradicting evidence (such as leaving a six-fingered handprint but creating freezing temperatures, which the Obake does not provide as evidence).
                        </Typography>
                        <Divider><Chip label="Mimic"/></Divider>
                        <Typography>
                            The Mimic will occasionally change the ghost it decides to impersonate during the mission. This might betray The Mimic if the player notices the ghost demonstrating two completely different traits (such as noticing the ghost flickering slower like a Phantom during a hunt, when it was not doing so earlier). Note that the Mimic cannot switch traits during a hunt.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel17'} onChange={handleAccordionChange('panel17')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ flexShrink: 0 }}>The Twins</Typography>
                        <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                            {the_twins}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Divider><Chip label="Evidence"/></Divider>
                        <Typography>
                            As the name implies, The Twins effectively functions as two separate entities, though code-wise it is only one. The "main" Twin can provide all three pieces of evidence, while the "decoy" Twin can only give EMF Level 5, and cannot be detected with motion sensors. Noticing multiple disturbances far away from the ghost room but failing to get any response on the Spirit Box or reading any significant temperature drop in the vicinity is a likely indicator of the decoy Twin causing disturbances.
                        </Typography>
                        <Divider textAlign={"left"}>Tip</Divider>
                        <Typography>
                            Similarly, if there are motion sensors nearby, noticing interactions or even a ghost event occuring in the area but without the motion sensor ever being set off is a potential sign that it is the decoy Twin.
                        </Typography>
                        <Divider textAlign={"left"}>Tip</Divider>
                        <Typography>
                            Note that interactions for all ghosts happen in a radius confined to the same floor. This means that any ghost could interact through the wall. Having two interactions at reasonably different times in adjacent rooms does not necessarily indicate that the ghost is The Twins.
                        </Typography>
                        <Divider><Chip label="Interactions"/></Divider>
                        <Typography>
                            The Twins have a chance of interacting with the environment almost simultaneously; noticing two interactions occuring in very quick succession at two separate locations, and this happening relatively frequently, is a very strong sign of The Twins. However, this may easily go unnoticed if players are strictly focused on investigating in or around the ghost room, as the decoy Twin could possibly be far away from the "main" Twin. Leaving an active EMF reader inside the ghost room while doing something else might potentially help players identify Twins if an interaction is noticed somewhere and the EMF reader is heard going off inside the ghost room at the same time.
                        </Typography>
                        <Divider textAlign={"left"}>Tip</Divider>
                        <Typography>
                            If Twins are suspected, searching around the building for items that have been displaced or thrown on the floor or lights that have been unexpectedly turned on far away for the ghost room might help narrow down the ghost type. Note that this is more useful before the ghost has had the chance to hunt; ghosts can throw objects during hunts, so be careful not to be misled.
                        </Typography>
                        <Divider><Chip label="Hunt Start"/></Divider>
                        <Typography>
                            When The Twins attempt to initate a hunt, there is a 50% chance of it to occur at the main Twin, and a 50% chance for it to occur from the Twin that last interacted with the environment. This means that Twins can hunt while they are far from one another. Noticing a hunt starting unusually far away from the ghost room or multiple hunts each occuring in vastly different locations might be a sign of The Twins.
                        </Typography>
                        <Divider textAlign={"left"}>Tip</Divider>
                        <Typography>
                            Note that crucifixes will only check for the main Twin when blocking hunts, regardless of which Twin attempted hunting. A hunt starting close to a working crucifix is a strong sign that it is the second Twin of the pair hunting.
                        </Typography>
                        <Divider><Chip label="Speed"/></Divider>
                        <Typography>
                            Each Twin has a different moving speed during hunts. The main Twin will be 10% slower than the standard ghost speed while the secondary Twin will be 10% faster. Noticing a subtle change in speed from one hunt to another might narrow down the ghost type.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel18'} onChange={handleAccordionChange('panel18')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ flexShrink: 0 }}>Wraith</Typography>
                        <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                            {wraith}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Divider><Chip label="No Footprints"/></Divider>
                        <Typography>
                            Wraiths do not leave UV footprints when walking through salt, though they will still leave an imprint in the salt pile and can still create footstep sounds. After the ghost has stepped in salt, if it creates multiple footstep sounds but not prints, then it is very likely a Wraith.
                        </Typography>
                        <Divider><Chip label="Interactions"/></Divider>
                        <Typography>
                            The Wraith stepping in salt also temporarily increases the average rate of interactions.
                        </Typography>
                        <Divider><Chip label="Teleport"/></Divider>
                        <Typography>
                            Wraiths can teleport to a player outside hunts, generating an EMF Level 2 or 5 reading. If there is no other interaction nearby that would have caused an EMF 2/5 reading, it is possible that the ghost is a Wraith.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel19'} onChange={handleAccordionChange('panel19')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ flexShrink: 0 }}>Yokai</Typography>
                        <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                            {yokai}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Divider><Chip label="Early Hunter"/></Divider>
                        <Typography>
                            While players are talking near the Yokai, its hunt sanity threshold will be increased to 80%, else it will have the normal 50% threshold.
                        </Typography>
                        <Divider><Chip label="Senseless"/></Divider>
                        <Typography>
                            During hunts, a Yokai can only sense voices and electronics within a 2-meter range. On Nightmare difficulty, this can be tested by standing into a room with a smudge stick handy (ideally far away from the door) and talking into the microphone or holding an active electronic equipment. If the ghost is nearby with no line-of-sight but does not enter the player's room despite the potential attraction, it is a good sign that it might be a Yokai. Be aware though that the ghost might also simply walk into the room by pure chance when roaming; multiple attempts might be needed to conclusively confirm or rule out the type of ghost.
                        </Typography>
                        <Divider><Chip label="Interactions"/></Divider>
                        <Typography>
                            Continuously talking near a Yokai will increase the chance of interactions taking place.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel20'} onChange={handleAccordionChange('panel20')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ flexShrink: 0 }}>Yurei</Typography>
                        <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                            {yurei}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Divider><Chip label="Door Closing"/></Divider>
                        <Typography>
                            The Yurei has a special ability where it will drop all the sanity of all players within 7.5 meters of it by 13%, while also closing a door sharply at the same time. Noticing a door sharply close from being fully open is a very strong sign of a Yurei.
                            Keep in mind that this ability does not count as an actual ghost event and Yurei can still perform regular ghost events like any other ghost.
                        </Typography>
                        <Divider><Chip label="Ghost Event"/></Divider>
                        <Typography>
                            The Yurei prefers ghost events where it hisses over other types of ghost events.
                        </Typography>
                        <Divider><Chip label="Smudging"/></Divider>
                        <Typography>
                            Using a smudge stick near the Yurei will prevent the ghost from wandering out of its ghost room for 90 seconds. Players can try placing a Motion Sensor at the doorway, and proceed to smudge the ghost. If the motion sensor is never set off by the ghost within the next 90 seconds, then the ghost could be a Yurei.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </Box>
        </Box>
    );
}
