import * as React from 'react';
import * as ghosts from './Ghosts';
import {get_ghost, get_ghosts_by_evidence, ghost_details} from "./Ghosts";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import {ExpandMoreRounded} from "@mui/icons-material";
import Typography from "@mui/material/Typography";

let ghost_list = [];
let collected_evidence = [];

function init_ghost_hunt() {
    ghost_list = (ghosts.get_all_ghosts());
}

//CRUD
function add_ghost_by_name(name) {
    let ghost = get_ghost(name);
    if (ghost) {
        ghost_list.push(ghost);
    }
}
export function manage_evidence_collection(evidence_id) {
    console.log("Found : " + evidence_id);
    if (collected_evidence.includes(evidence_id)) {
        const index = collected_evidence.indexOf(evidence_id);
        collected_evidence.splice(index, 1);
    }
    else {
        collected_evidence.push(evidence_id);
    }
    console.log("Evidence collected by now: " + collected_evidence);
    filter_ghosts_by_evidence()
}

function filter_ghosts_by_evidence() {
    ghost_list.forEach(function (ghost) {
        collected_evidence.forEach(function (evidence) {
            if (ghost.evidence.includes(evidence)) {
                ghost.possibility = 1;
            }
            else {
                ghost.possibility = 0;
            }
        });
        console.log("Checking ghost: " + ghost.name + " chance:" + ghost.possibility);
    });
}

function remove_ghost_by_name(name) {
    let ghost = get_ghost(name);
    if (ghost) {
        ghost_list.splice(ghost);
    }
}


const Ghosts = () => {

    const [expanded, setExpanded] = React.useState(false);
    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    init_ghost_hunt();
    console.log(ghost_list);

    return (
        <div>
            {ghost_list.map(function (ghost) {
                return (
                    <Accordion expanded={expanded === "panel"+(ghost.id)} onChange={handleAccordionChange("panel"+(ghost.id))}>
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
    )
}

export default Ghosts;
