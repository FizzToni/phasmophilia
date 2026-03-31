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
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import {
    AcUnitOutlined, BlurOnOutlined, MenuBookOutlined, MicOffOutlined, FingerprintOutlined, RestartAltRounded,
    RemoveRedEyeOutlined, RadioOutlined, ExpandMoreRounded, BuildOutlined, DarkModeOutlined, SearchRounded
} from "@mui/icons-material";
import {Accordion, ListSubheader, AccordionSummary, AccordionDetails, InputAdornment} from "@mui/material";

import { getAllGhosts, getGhostDetails } from "./Ghosts";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const themeDark = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1a1a2e',
            light: '#2a2a3e',
            dark: '#0f0f1a',
        },
        secondary: {
            main: '#e94560',
            light: '#ff6b7a',
            dark: '#b71c3c',
        },
        background: {
            default: '#0f0f23',
            paper: '#1a1a2e',
        },
        text: {
            primary: '#e8e8e8',
            secondary: '#b8b8b8',
        },
        warning: {
            main: '#f39c12',
            light: '#f5b041',
            dark: '#d68910',
        },
        success: {
            main: '#27ae60',
            light: '#58d68d',
            dark: '#1e8449',
        },
        info: {
            main: '#3498db',
            light: '#5dade2',
            dark: '#2980b9',
        },
        error: {
            main: '#e74c3c',
            light: '#ec7063',
            dark: '#c0392b',
        },
        action: {
            active: '#e8e8e8',
            hover: 'rgba(232, 232, 232, 0.08)',
            selected: 'rgba(233, 69, 96, 0.12)',
            disabled: 'rgba(232, 232, 232, 0.26)',
            disabledBackground: 'rgba(232, 232, 232, 0.12)',
        },
        divider: 'rgba(232, 232, 232, 0.12)',
    },
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
                    borderRight: '1px solid rgba(233, 69, 96, 0.2)',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: 'rgba(233, 69, 96, 0.08)',
                    },
                    '&.Mui-selected': {
                        backgroundColor: 'rgba(233, 69, 96, 0.12)',
                    },
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                    border: '1px solid rgba(233, 69, 96, 0.2)',
                    borderRadius: '8px !important',
                    margin: '8px 0',
                    '&:before': {
                        display: 'none',
                    },
                    '&.Mui-expanded': {
                        boxShadow: '0 4px 12px rgba(233, 69, 96, 0.2)',
                    },
                },
            },
        },
    },
});


const drawerWidth = 240;
const NIGHTMARE_MAX_EVIDENCE = 2;
const EVIDENCE_ITEMS = [
    { id: 0, label: 'Fingerprints', Icon: FingerprintOutlined },
    { id: 1, label: 'Freezing Temperatures', Icon: AcUnitOutlined },
    { id: 2, label: 'Ghost Orbs', Icon: RemoveRedEyeOutlined },
    { id: 3, label: 'EMF 5', Icon: RadioOutlined },
    { id: 4, label: 'D.O.T.S.', Icon: BlurOnOutlined },
    { id: 5, label: 'Ghost Writings', Icon: MenuBookOutlined },
    { id: 6, label: 'Spirit Box', Icon: MicOffOutlined },
];

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
export default function MiniDrawer() {
    const theme = useTheme();
    const searchInputRef = React.useRef(null);
    const [open, setOpen] = React.useState(false);
    const [ghostList, setGhostList] = React.useState([]);
    const [collectedEvidence, setCollectedEvidence] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');

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
    const updateGhostPossibilities = React.useCallback((selectedEvidence) => {
        setChance(selectedEvidence.length);
        if (selectedEvidence.length === 0) {
            setExpanded(false);
        }
        setGhostList((currentGhosts) => currentGhosts.map((ghost) => ({
            ...ghost,
            possibility: selectedEvidence.filter((evidenceId) => ghost.evidence.includes(evidenceId)).length
        })));
    }, []);

    React.useEffect(() => {
        setGhostList(getAllGhosts());
    }, []);

    React.useEffect(() => {
        const handleGlobalSearchFocus = (event) => {
            const targetTag = event.target?.tagName;
            const isTypingContext = targetTag === 'INPUT' || targetTag === 'TEXTAREA' || event.target?.isContentEditable;
            if (isTypingContext || event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) {
                return;
            }
            event.preventDefault();
            searchInputRef.current?.focus();
        };

        window.addEventListener('keydown', handleGlobalSearchFocus);
        return () => window.removeEventListener('keydown', handleGlobalSearchFocus);
    }, []);

    const manageEvidenceCollection = (evidenceId) => {
        const nextEvidence = collectedEvidence.includes(evidenceId)
            ? collectedEvidence.filter((id) => id !== evidenceId)
            : [...collectedEvidence, evidenceId];

        setCollectedEvidence(nextEvidence);
        updateGhostPossibilities(nextEvidence);
    };

    const handleEvidenceSelection = (evId) => {
        if (nightmare && !collectedEvidence.includes(evId) && collectedEvidence.length === NIGHTMARE_MAX_EVIDENCE) {
            return;
        }
        manageEvidenceCollection(evId);
    };

    const [nightmare, setNightmare] = React.useState(false);
    const handleNightmare = () => {
        const nextNightmare = !nightmare;
        setNightmare(nextNightmare);

        if (nextNightmare && collectedEvidence.length > NIGHTMARE_MAX_EVIDENCE) {
            const nextEvidence = collectedEvidence.slice(0, NIGHTMARE_MAX_EVIDENCE);
            setCollectedEvidence(nextEvidence);
            updateGhostPossibilities(nextEvidence);
        }
    };

    const handleReset = () => {
        setNightmare(false);
        setCollectedEvidence([]);
        setSearchTerm('');
        setChance(0);
        setExpanded(false);
        setGhostList(getAllGhosts());
    };

    const visibleGhosts = ghostList.filter((ghost) => {
        if (chance !== ghost.possibility) {
            return false;
        }
        if (!searchTerm.trim()) {
            return true;
        }

        const normalizedTerm = searchTerm.toLowerCase();
        return (
            ghost.name.toLowerCase().includes(normalizedTerm) ||
            ghost.tags.some((tag) => tag.toLowerCase().includes(normalizedTerm))
        );
    });

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
                        <Typography variant="h6" noWrap component="h1">
                            Quick Hunt
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader>
                        <IconButton
                            onClick={handleDrawerClose}
                            aria-label="Close navigation drawer"
                            sx={{ minWidth: 48, minHeight: 48, p: 1 }}>
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
                        {EVIDENCE_ITEMS.map(({ id, label, Icon }) => (
                            <ListItemButton
                                key={id}
                                onClick={() => handleEvidenceSelection(id)}
                                aria-label={`Toggle ${label}`}
                                aria-pressed={collectedEvidence.includes(id)}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}>
                                <Icon
                                    color={collectedEvidence.includes(id) ? 'success' : 'action'}
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}/>
                                <ListItemText sx={{ opacity: open ? 1 : 0 }} primary={label}/>
                            </ListItemButton>
                        ))}

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
                            <BuildOutlined
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
                            <DarkModeOutlined color={nightmare ? 'warning' : 'action'}
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

                    <Box sx={{ px: 2, pt: 1 }}>
                        <TextField
                            size="small"
                            fullWidth
                            label="Search ghosts"
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            inputRef={searchInputRef}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchRounded />
                                    </InputAdornment>
                                )
                            }}
                        />
                        <Typography
                            sx={{ mt: 1, color: 'text.secondary', textAlign: 'left' }}
                            aria-live="polite"
                            aria-label={`Visible ghosts count: ${visibleGhosts.length}`}>
                            Showing {visibleGhosts.length} ghost{visibleGhosts.length === 1 ? '' : 's'}
                        </Typography>
                    </Box>

                    <div>
                        {visibleGhosts.map((ghost) => (
                                <Accordion
                                    key={ghost.id}
                                    expanded={expanded === `panel${ghost.id}`}
                                    onChange={handleAccordionChange(`panel${ghost.id}`)}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreRounded />}
                                        aria-controls={`panel${ghost.id}-content`}
                                        id={`panel${ghost.id}-header`}
                                        aria-label={`${ghost.name} details`}>

                                        <Typography sx={{ flexShrink: 0, minWidth: 100, textAlign: 'left' }}>{ghost.name}</Typography>
                                        <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                                            {ghost.evidences_icons}
                                        </Typography>
                                    </AccordionSummary>

                                    <AccordionDetails>
                                        {getGhostDetails(ghost).map((detail, idx) => (
                                            <div key={idx}>
                                                {detail}
                                            </div>
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        {visibleGhosts.length === 0 && (
                            <Typography sx={{ p: 2, color: 'text.secondary', textAlign: 'left' }}>
                                No ghosts match your filters.
                            </Typography>
                        )}
                    </div>

                </Box>
            </Box>
        </ThemeProvider>
    );
}
