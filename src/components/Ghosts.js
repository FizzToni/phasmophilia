import * as React from 'react';
import {Chip} from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ghostsData from '../data/ghostsData.json';
import { getEvidenceIcons } from './EvidenceIcons';

// Transform JSON data into ghost objects with evidence icons
function createGhostObjects() {
    return ghostsData.ghosts.map(ghostData => ({
        ...ghostData,
        evidences_icons: getEvidenceIcons(ghostData.evidence),
        possibility: 0
    }));
}

// Ghost List
const ghost_list = createGhostObjects();

// Functions
export function get_all_ghosts() {
    return ghost_list;
}

export function get_ghost(name) {
    let ghost = ghost_list.find(function(ghost) {
        return ghost.name.toUpperCase() === name.toUpperCase();
    });
    return(
        ghost
    );
}

export function get_ghosts_by_evidence(evidence) {
    let ghosts = ghost_list.filter(function(ghost) {
        return ghost.evidence.includes(evidence);
    });
    return(
        ghosts
    );

}

export function ghost_details(ghost) {
    let info = [];

    for (let i = 0; i < ghost.tags.length; i++) {
        info.push(
            <Divider key={`divider-${i}`}><Chip label={ghost.tags[i].toUpperCase()}/></Divider>,
            <Typography key={`behavior-${i}`}>{ghost.behaviour[i]}</Typography>
        )
    }
    return info;
}

export function reset_possibilities() {
    for (let i = 0; i < ghost_list.length; i++) {
        ghost_list[i].possibility = 0;
    }
}