import {Container, Fab, Grid, IconButton} from "@mui/material";
import {
    AcUnitOutlined, BlurOnOutlined, MenuBookOutlined,
    MicOffOutlined,
    PanToolOutlined,
    PersonSearch,
    ScatterPlotOutlined,
    SpeakerPhoneOutlined
} from "@mui/icons-material";

const collected_evidence = [];
const demon = ['demon', 1,2,6];
const jinn  = ['jinn', 1,2,5];
const hantu = ['hantu', 1,2,4];
const onryo = ['onryo', 2,3,4];
const ghosts = [demon, jinn, hantu, onryo];

const handleClick = (that, ev_id) => {
    console.log("You found " + that, ev_id);
    if (collected_evidence.length < 3) {
        if (!collected_evidence.includes(ev_id)) {
            collected_evidence.push(ev_id);
            collected_evidence.sort();
        }
    }
    checkGhost();

};

const checkGhost = () => {
    console.log("Currently collected evidence: " + collected_evidence);


    console.log("before: " + ghosts);

    //TODO: make check to pop the ghosts, that do not suit the evidence

    for (var i = 1; i < 8; i++) {
        for (const ghost of ghosts) {
            if (collected_evidence.includes(i) && !ghost.includes(i)){
                ghosts.pop(ghost);
                console.log("Removed " + ghost[0] + " from list.");
            }
        }
    }
    console.log("after: " + ghosts);
};


const GhostHunt = () => {
    return (
        <div>
            <h1>Hello Ghosthunter</h1>
            <Fab color="error" aria-label="add" variant="extended">
                <PersonSearch/>
                Start new Hunt
            </Fab>

            <Container className={"evidence_selector"}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <IconButton className={"evidence"} onClick={() => handleClick('Fingerprints', 1)}>
                            <PanToolOutlined fontSize={"large"}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={4}>
                        <IconButton className={"evidence"} onClick={() => handleClick('Freezing Temperatures', 2)}>
                            <AcUnitOutlined fontSize={"large"}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={4}>
                        <IconButton className={"evidence"} onClick={() => handleClick('Spirit Box',3)}>
                            <MicOffOutlined fontSize={"large"}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={4}>
                        <IconButton className={"evidence"} onClick={() => handleClick('Ghost Orbs',4)}>
                            <ScatterPlotOutlined fontSize={"large"}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={4}>
                        <IconButton className={"evidence"} onClick={() => handleClick('EMF 5',5)}>
                            <SpeakerPhoneOutlined fontSize={"large"}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={4}>
                        <IconButton className={"evidence"} onClick={() => handleClick('Ghost Writings',6)}>
                            <MenuBookOutlined fontSize={"large"}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={12}>
                        <IconButton className={"evidence"} onClick={() => handleClick('D.O.T.S.',7)}>
                            <BlurOnOutlined fontSize={"large"}/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Container>

            <Container>
                <h2>Maybe</h2>
            </Container>
        </div>
    )
}

export default GhostHunt;
