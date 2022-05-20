import * as React from 'react';
import * as ghosts from './Ghosts';
import {get_ghost, get_ghosts_by_evidence, ghost_details} from "./Ghosts";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import {ExpandMoreRounded} from "@mui/icons-material";
import Typography from "@mui/material/Typography";

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
    console.log("Current evidence: " + collected_evidence);
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



const Ghosts = () => {

    const [expanded, setExpanded] = React.useState(false);
    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    init_ghost_hunt();

    return (
        <div>
            {ghost_list.map(function (ghost) {
                return (
                    <Accordion expanded={expanded === "panel"+(ghost.id)} hidden={ghost.possibility < collected_evidence.length} onChange={handleAccordionChange("panel"+(ghost.id))}>
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
