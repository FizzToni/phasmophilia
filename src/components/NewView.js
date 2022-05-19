import * as React from 'react';
import * as ghosts from './Ghosts';
import {ghost_details, ghost_list} from "./Ghosts";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import {
    AcUnitOutlined, BlurOnOutlined,
    ExpandMoreRounded,
    MenuBookOutlined,
    MicOffOutlined,
    PanToolOutlined, ScatterPlotOutlined, SpeakerPhoneOutlined
} from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const Ghosts = () => {

    const [expanded, setExpanded] = React.useState(false);
    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    let all = [];
    all = (ghosts.get_all_ghosts());
    console.log(all);

    console.log(ghosts.get_ghost_from_evidence('fingerPrints'));

    return (
        <div>
            <h1>Hello Ghosthunter</h1>
            <div>
                test
            </div>
            <div>
                {all.map(function (ghost) {
                    return (
                        <Accordion expanded={expanded === "panel"+(ghost.id)} onChange={handleAccordionChange("panel"+(ghost.id))}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreRounded />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header">

                            <Typography sx={{ flexShrink: 0 }}>{ghost.name}</Typography>
                            <Typography sx={{ flexGrow:1, color: 'text.secondary', textAlign: 'center'}}>
                                {ghost.evidences}
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
        </div>
    )
}

export default Ghosts;
