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

const ghostList = createGhostObjects();

// Functions
export function getAllGhosts() {
    return ghostList.map((ghost) => ({
        ...ghost,
        evidence: [...ghost.evidence],
        tags: [...ghost.tags],
        behaviour: [...ghost.behaviour],
        possibility: 0,
    }));
}

export function getGhost(name) {
    const ghost = ghostList.find(function(ghost) {
        return ghost.name.toUpperCase() === name.toUpperCase();
    });
    return(
        ghost
    );
}

export function getGhostsByEvidence(evidence) {
    const ghosts = ghostList.filter(function(ghost) {
        return ghost.evidence.includes(evidence);
    });
    return(
        ghosts
    );

}

export function getGhostDetails(ghost) {
    const info = [];

    for (let i = 0; i < ghost.tags.length; i++) {
        info.push(
            <Divider key={`divider-${i}`}><Chip label={ghost.tags[i].toUpperCase()}/></Divider>,
            <Typography key={`behavior-${i}`}>{ghost.behaviour[i]}</Typography>
        )
    }
    return info;
}

export function reset_possibilities() {
    for (let i = 0; i < ghostList.length; i++) {
        ghostList[i].possibility = 0;
    }
}

// Legacy exports for backward compatibility
export const get_all_ghosts = getAllGhosts;
export const get_ghost = getGhost;
export const get_ghosts_by_evidence = getGhostsByEvidence;
export const ghost_details = getGhostDetails;
