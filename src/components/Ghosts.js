import * as React from 'react';

import {
    AcUnitOutlined, BlurOnOutlined, ExpandMoreRounded,
    MenuBookOutlined,
    MicOffOutlined,
    PanToolOutlined,
    ScatterPlotOutlined, SpeakerPhoneOutlined
} from "@mui/icons-material";
import {Accordion, AccordionDetails, AccordionSummary, Chip} from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

// Evidence Icons
const ghostWriting = <MenuBookOutlined/>;
const fingerPrints = <PanToolOutlined/>;
const freezingTemp = <AcUnitOutlined/>;
const spiritBox    = <MicOffOutlined/>;
const ghostOrbs    = <ScatterPlotOutlined/>;
const emf5         = <SpeakerPhoneOutlined/>;
const dots         = <BlurOnOutlined/>;


// Associated Evidence
const banshee_evidences     = [fingerPrints,    ghostOrbs,      dots];
const demon_evidences       = [fingerPrints,    freezingTemp,    ghostWriting];
const goryo_evidences       = [fingerPrints,    dots,           emf5];
const hantu_evidences       = [fingerPrints,    freezingTemp,   ghostOrbs];
const jinn_evidences        = [fingerPrints,    freezingTemp,   emf5];
const mare_evidences        = [ghostWriting,    ghostOrbs,      spiritBox];
const myling_evidences      = [fingerPrints,    ghostWriting,   emf5];
const obake_evidences       = [fingerPrints,    ghostOrbs,      emf5];
const oni_evidences         = [freezingTemp,    dots,           emf5];
const onryo_evidences       = [fingerPrints,    ghostOrbs,      spiritBox];
const phantom_evidences     = [fingerPrints,    spiritBox,      dots];
const poltergeist_evidences = [fingerPrints,    ghostWriting,   spiritBox];
const raiju_evidences       = [ghostOrbs,       dots,           emf5];
const revenant_evidences    = [ghostWriting,    freezingTemp,   ghostOrbs];
const shade_evidences       = [ghostWriting,    spiritBox,      emf5];
const spirit_evidences      = [ghostWriting,    spiritBox,      emf5];
const the_mimic_evidences   = [fingerPrints,    freezingTemp,   spiritBox];
const the_twins_evidences   = [freezingTemp,    spiritBox,      emf5];
const wraith_evidences      = [spiritBox,       dots,           emf5];
const yokai_evidences       = [ghostOrbs,       spiritBox,      dots];
const yurei_evidences       = [freezingTemp,    ghostOrbs,      dots];


// Ghost Info
const banshee = new Object();
banshee.name = 'Banshee';
banshee.evidences = banshee_evidences;
banshee.tags = ['obsession', 'sanity', 'roaming', 'singing', 'shriek'];
banshee.behaviour = [
    "During hunts, a Banshee can only notice, chase, or kill one person at a time. If a hunting ghost seems to ignore nearby players to look for or chase a distant player, then the ghost is likely a Banshee; if it passes through one or more players without killing them while not under the effect of Smudge Sticks, a Banshee can be confirmed outright.\n If the Banshee's main target is not in the investigation area, it will chase and attempt to kill anyone it sees.",
    "Banshees will only check their target's sanity level to initiate a hunt as opposed to the team's average sanity. A ghost being excessively aggressive (hunting often) despite a relatively high average sanity level, and vice-versa, might indicate a Banshee.",
    "Banshees tend to roam towards the target player outside of hunts; ghost activity occuring more often than usual near a specific player and away from the ghost room is a good sign of a Banshee.",
    "A Banshee is more likely to perform ghost events where it sings over other types of ghost events.",
    "Banshees have a chance of emitting a unique type of shriek-like paranormal sounds on the parabolic microphone. Any player can consider taking one and aiming it in the general area of the ghost."
];

const demon = new Object();
demon.name = 'Demon';
demon.evidences = demon_evidences;
demon.tags = ['early hunter', 'hunt cooldown', 'crucifix', 'smudging'];
demon.behaviour = [
    "Demons can begin hunting below an average sanity of 70%, compared to most other ghosts at 50%, with no pre-requisites to this threshold. Demons also have a rare ability to hunt at any sanity level.",
    "Demons also have a minimum hunt cooldown of 20 seconds, as opposed to the standard 25 seconds of other ghosts.",
    "Crucifixes have an effective range of 5 meters instead of the standard 3 meters. Having a lazily placed crucifix burn when the ghost would normally not have used it may indicate a Demon, though this strategy is flawed by the fact that ghosts may happen to wander out of their room and into the crucifix's range.",
    "Smudging a Demon will prevent it from hunting for only 60 seconds, as opposed to 90 seconds with most other ghosts."
];

const goryo = new Object();
goryo.name = 'Goryo';
goryo.evidences = goryo_evidences;
goryo.tags = ['D.O.T.S.', 'roaming', 'nightmare'];
goryo.behaviour = [
    "You will only be able to see the Goryo produce a D.O.T.S Projector-based silhouette through a video camera, and if there are no people in the ghost room. If a player sees the ghost interact with the projector on the camera or on the Video Feed, but the players at the location do not see it, then the ghost is likely a Goryo. Standing outside of the ghost room will suffice for allowing the ghost to appear through the projector. Note that its power does not apply to physical manifestations during a ghost event or a hunt; Goryos can physically manifest and be fully visible in this manner like any other ghost.",
    "When not hunting, Goryo are less likely to roam around, and consequently stay in its ghost room more often. If the ghost tends to remain in its ghost room, including at the start of ghost events and hunts, with interactions mainly confined to the area in and around the ghost room, then it could be a Goryo. ",
    "On Nightmare difficulty, the Goryo will always provide D.O.T.S projector as one of its two evidences. Not obtaining this piece of evidence in Nightmare rules the ghost out."
];

const hantu = new Object();
hantu.name = 'Hantu';
hantu.evidences = hantu_evidences;
hantu.tags = ['speed', 'fuse', 'breath', 'nightmare'];
hantu.behaviour = [
    "During a hunt, the Hantu has different speeds in rooms of different temperatures; it is fastest in cold rooms below 3°C (37.4°F) and slowest in warm rooms above 15°C (59°F). Additionally, the Hantu does not accelerate with line-of-sight, unlike most other ghosts. This may make it easy to identify in an extended chase, asides from possibly making it easier to escape if the room is warm enough. If you can easily loop the ghost without crouching in a warm room around a large furniture piece such as a kitchen counter, then the ghost is most likely a Hantu.",
    "Hantu are twice more likely to turn off the fuse box; frequent outages might be a sign of a Hantu. On the other hand, Hantu will not turn the fuse box on; having the ghost turn the fuse box on eliminates Hantu as a possibility.",
    "Hantu will also emit freezing breath in rooms below 3°C (37.4°F) when it manifests during a hunt. Note that this breath is visible only when the ghost is also physically visible, making it harder to see as the breath may be partially obscured by the ghost model.",
    "On Nightmare difficulty, the Hantu will always provide Freezing Temperatures as one of its two evidences. Not obtaining this piece of evidence in Nightmare rules the ghost out."
];

const jinn = new Object();
jinn.name = 'Jinn';
jinn.evidences = jinn_evidences;
jinn.tags = ['sanity', 'speed', 'fuse'];
jinn.behaviour = [
    "Jinns have an ability that when used, can instantly decrease the sanity of all players within 3 meters of it by 25%.",
    "If the breaker is on during a hunt and player is in the line of sight of the Jinn, it will chase the player at twice their regular speed until they are within about 2 meters of the player, thereafter chasing with the default speed. This can be tested by standing at the end of a long hallway or room, then waiting for the ghost to achieve line-of-sight from the other end. If its speed increases instantly and not over a period of time, then it is likely a Jinn. Be careful not to confuse this with the Revenant; the Jinn's speed is normal if it is not chasing a player, unlike the Revenant.",
    "Both of the abilities listed above can be disabled by turning off the breaker. Consequently, a Jinn never turns the fuse box off by itself, though the breaker can still be tripped by overloading it with lights. If the breaker is not turned off despite high ghost activity for a long period of time, the ghost could be a Jinn, though this should not be used as definitive proof. Conversely, if the ghost turns the breaker off directly, it cannot be a Jinn."
];


const mare = new Object();
mare.name = 'Mare';
mare.evidences = mare_evidences;
mare.tags = ['early hunter', 'lights', 'interactions', 'lights', 'shattering lights', 'roamer'];
mare.behaviour = [
    "Mares have an increased hunting threshold of 60% if the lights in its room are off. On the other hand, turning on the lights on in its room will decrease its sanity threshold to 40%.",
    "Mares have a chance of turning the lights off immediately if a player turns one on in the vicinity. Spamming the light switch will not trigger this interaction, so this is best utilized with some time between switching the lights on/off. This interaction will give off an EMF 2 reading. Note that any ghost can do so purely by coincidence. Ghost events do not count for this ability.",
    "Mares will have decreased interaction activity if its current room is lit.",
    "Mares never turn individual lights on; a ghost doing so confirms that it is not a Mare. Mares do not have any special mechanic regarding fuse boxes, and can turn them on or off.",
    "Mares are more likely to choose manifestation events where it shatters the lights, rendering them unusable.",
    "Mares have a high chance to roam long ranges if the lights are on in the room."
];

const myling = new Object();
myling.name = 'Myling';
myling.evidences = myling_evidences;
myling.tags = ['quiet hunter', 'frequent sounds'];
myling.behaviour = [
    "Mylings have quieter footsteps than other ghosts during a hunt. Throw any electronic equipment on the ground next to the player and listen; if footsteps can only be heard within the range that electronics begin to flicker (about 10 meters), then the ghost may be a Myling. This test only applies when the ghost is on the same floor as the player.",
    "Players can hear paranormal sounds, such as murmuring or growling, by pointing a Parabolic Microphone at an idle ghost. If these sounds are more frequent than usual, the ghost may be a Myling."
];

const obake = new Object();
obake.name = 'Obake';
obake.evidences = obake_evidences;
obake.tags = ['fingerprints', 'shape shifter', 'nightmare'];
obake.behaviour = [
    "When an Obake interacts with a surface that allows for fingerprints, there is a 75% chance that it will leave fingerprints, as opposed to the 100% chance for all other ghosts. Seperately, Obake may also use an ability that halves the remaining duration of existing fingerprints on the map, potentially causing them to disappear within seconds of appearing.",
    "In addition, there is a 16.6% chance that it will leave a special fingerprint not seen with other ghosts. These consist of having six-fingered handprints instead of five, two fingerprints on light switches instead of one, and five fingerprints on keyboards and Prison cell block gates instead of four.",
    "On Nightmare difficulty, the Obake will always provide Fingerprints as one of its two evidences. Not obtaining this piece of evidence in Nightmare rules the ghost out."
];

const oni = new Object();
oni.name = 'Oni';
oni.evidences = oni_evidences;
oni.tags = ['ghost events', 'interactions', 'ghost events'];
oni.behaviour = [
    "Oni are more active and will cause frequent ghost events and interactions to happen. In the smallest maps such as Tanglewood Street House, if the ghost performs ghost events almost as if it were all around the house, it may be an Oni.",
    "Oni have an ability that, when used, allows it to throw an item at a higher speed and with more height.",
    "An Oni will also never cause ghost events where it appears as a smoke and hisses at a player. An Oni can be ruled out if the ghost does such an event. The Oni can still hiss as part of a manifestation ghost event."
];

const onryo = new Object();
onryo.name = 'Onryo';
onryo.evidences = onryo_evidences;
onryo.tags = ['early hunter', 'sanity', 'crucifix'];
onryo.behaviour = [
    "The Onryo has a 60% hunt sanity threshold if there are no flames near it.",
    "Onryo have a 50%verify chance of hunting regardless of sanity when any flame is extinguished by the ghost. For every dead player, this chance increases; the chance is almost 100% when two people are dead.",
    "An Onryo will prioritize blowing out a flame instead of using a crucifix. This can be tested for by placing a crucifix down, and multiple lit candles in close proximity; if the candles repeatedly go out without the ghost ever hunting nor the crucifix ever burning, even at low average sanity, the ghost may be an Onryo. On the other hand, if the crucifix burns without any nearby candle being extinguished, the ghost is not an Onryo."
];

const phantom = new Object();
phantom.name = 'Phantom';
phantom.evidences = phantom_evidences;
phantom.tags = ['photo', 'flickering', 'teleport'];
phantom.behaviour = [
    "Taking a photo of a Phantom will make it instantly and temporarily disappear for that specific instance that it appears. This will not stop a manifestation nor a hunt if one is already in progress. In a ghost event, if the ghost disappeared as the picture was taken but his footsteps and vocalizations can still be heard, it means that it is a Phantom.\n" +
    "Journal\n" +
    "\n" +
    "The ghost's physical image will not be visible in the picture found in the journal, but will be labelled as a \"Ghost\" picture. Additionally, the image will appear without any electronic interference. However, any ghost can have the same effect if the photo is taken right at the end of a ghost event; be sure that the ghost event is still ongoing even when the ghost has disappeared.",
    "During a hunt, a Phantom will flash visible every 1 to 2 seconds as opposed to every 0.3 to 1 seconds for other ghosts. Watch for the ghost's flickering rate; if it is invisible for longer periods of time, it is likely a Phantom.",
    "The Phantom also has an ability very similar to the Wraith's, which it can use (not during a manifestation) to walk to a random player's location regardless of distance. After this, the Phantom will continue normal activity."
];

const poltergeist = new Object();
poltergeist.name = 'Poltergeist';
poltergeist.evidences = poltergeist_evidences;
poltergeist.tags = ['interactions', 'multi-throw'];
poltergeist.behaviour = [
    "Poltergeists tend to interact with objects much more frequently than other ghosts.",
    "Poltergeists can also move multiple objects at once, which will decrease nearby players' sanity; the decrease is by 2% times the number of objects moved."
];

const raiju = new Object();
raiju.name = 'Raiju';
raiju.evidences = raiju_evidences;
raiju.tags = ['early hunter', 'speed', 'electronics'];
raiju.behaviour = [
    "Rajius can hunt from an average sanity of 65% if there are active electronics near it.",
    "The presence of any active electronics near the Raiju will also cause it to gain significant speed during a hunt, almost equal to that of a Revenant. Having a ghost that is moving quickly visually and audially in the presence of electronics and even while not chasing someone may indicate that the ghost is a Raiju.",
    "During ghost events and hunts, the Raiju will interfere with electronics at a longer range than the average 10 meters for every other ghost. This distance only applies to electronics that are on the same floor as the ghost."
];

const revenant = new Object();
revenant.name = 'Revenant';
revenant.evidences = revenant_evidences;
revenant.tags = ['speed', 'footsteps'];
revenant.behaviour = [
    "During a hunt, if any player is in the LoS of the Revenant, it will move at approximately twice the standard ghost speed. If nobody is in LoS, it will move at approximately half the standard speed.",
    "Players can listen to its footstep sounds when hiding from the ghost; if it is comparatively slow, then it may be a Revenant. Note that footstep sounds are approximately synced with ghost speed, so players should be listening for footstep sounds that occur approximately half as often."
];

const shade = new Object();
shade.name = 'Shade';
shade.evidences = shade_evidences;
shade.tags = ['interactions', 'shy hunter', 'late hunter', 'ghost events', 'summoning circle'];
shade.behaviour = [
    "Shades will perform little to no activity in the presence of players in its room. Additionally, the chance of ghost events is tied to average sanity; the success rate of ghost events will increase gradually as sanity decays, capping at 50% where an attempted ghost event will always succeed.",
    "Shades will not hunt in the presence of at least one player in the same room as it. A ghost not hunting with players in the same room may be a Shade, though it is possible for the Shade to wander out of its room, before hunting.",
    "Shades have a very low hunting sanity threshold, which is at only 35%. If the average sanity of the team is very low but hunts remain relatively sparse or do not occur at all, it might be a sign that the ghost is a Shade.",
    "Shades tend to prefer the mist-type \"hissing\" ghost event over manifesting. If it does manifest, it will prefer (though not always have) the shadow-type ghost form.",
    "If summoned by a Summoning Circle, a Shade has a chance[verify]will appear as a shadow in the circle instead of a fully visible form."
];

const spirit = new Object();
spirit.name = 'Spirit';
spirit.evidences = spirit_evidences;
spirit.tags = ['smudging'];
spirit.behaviour = [
    "When smudged, spirits will not hunt for 180 seconds, as opposed to the standard 90 seconds. When testing for a Spirit, ensure that your average sanity is below 50% by reading it off the sanity monitor, or checking that it has hunted (or attempted to hunt) at least once. Then, smudge the ghost and count for 180 seconds. If the ghost hunts within 90 to 180 seconds, then it is not a Spirit. If it only hunts after the 180 seconds are up, then it is likely be a Spirit. To ensure that the smudge does not fail (causing the ghost to hunt much earlier than 90 seconds), wait for it to first use the crucifix, interact with an object, or use a motion sensor to locate it, then smudge the surrounding area."
];


const the_mimic = new Object();
the_mimic.name = 'The Mimic';
the_mimic.evidences = the_mimic_evidences;
the_mimic.tags = ['evidence', 'abilities', 'mimic'];
the_mimic.behaviour = [
    "The Mimic presents Ghost Orbs as a fourth evidence (or third evidence in Nightmare difficulty). Conclusively identifying two of The Mimic's main evidences plus Ghost Orbs in Nightmare difficulty confirms that the ghost is The Mimic. On the contrary, if you managed to obtain only one or two (depending on difficulty) of The Mimic's primary evidences and a Ghost Orb, be sure that the ghost doesn't give off another piece of evidence to safely rule out The Mimic.",
    "The Mimic also has the ability to replicate other ghosts' abilities, such as the Obake's six-fingered handprint, or hunting sanity thresholds. This could be used against it if it presents an ability while also showing contradicting evidence (such as leaving a six-fingered handprint but creating freezing temperatures, which the Obake does not provide as evidence).",
    "The Mimic will occasionally change the ghost it decides to impersonate during the mission. This might betray The Mimic if the player notices the ghost demonstrating two completely different traits (such as noticing the ghost flickering slower like a Phantom during a hunt, when it was not doing so earlier). Note that the Mimic cannot switch traits during a hunt."
];

const the_twins = new Object();
the_twins.name = 'The Twins';
the_twins.evidences = the_twins_evidences;
the_twins.tags = ['evidence', 'interactions', 'hunt start', 'speed'];
the_twins.behaviour = [
    "As the name implies, The Twins effectively functions as two separate entities, though code-wise it is only one. The \"main\" Twin can provide all three pieces of evidence, while the \"decoy\" Twin can only give EMF Level 5, and cannot be detected with motion sensors. Noticing multiple disturbances far away from the ghost room but failing to get any response on the Spirit Box or reading any significant temperature drop in the vicinity is a likely indicator of the decoy Twin causing disturbances.\n" +
    "Tip\n" +
    "\n" +
    "Similarly, if there are motion sensors nearby, noticing interactions or even a ghost event occuring in the area but without the motion sensor ever being set off is a potential sign that it is the decoy Twin.\n" +
    "Tip\n" +
    "\n" +
    "Note that interactions for all ghosts happen in a radius confined to the same floor. This means that any ghost could interact through the wall. Having two interactions at reasonably different times in adjacent rooms does not necessarily indicate that the ghost is The Twins.",
    "The Twins have a chance of interacting with the environment almost simultaneously; noticing two interactions occuring in very quick succession at two separate locations, and this happening relatively frequently, is a very strong sign of The Twins. However, this may easily go unnoticed if players are strictly focused on investigating in or around the ghost room, as the decoy Twin could possibly be far away from the \"main\" Twin. Leaving an active EMF reader inside the ghost room while doing something else might potentially help players identify Twins if an interaction is noticed somewhere and the EMF reader is heard going off inside the ghost room at the same time.\n" +
    "Tip\n" +
    "\n" +
    "If Twins are suspected, searching around the building for items that have been displaced or thrown on the floor or lights that have been unexpectedly turned on far away for the ghost room might help narrow down the ghost type. Note that this is more useful before the ghost has had the chance to hunt; ghosts can throw objects during hunts, so be careful not to be misled.",
    "When The Twins attempt to initate a hunt, there is a 50% chance of it to occur at the main Twin, and a 50% chance for it to occur from the Twin that last interacted with the environment. This means that Twins can hunt while they are far from one another. Noticing a hunt starting unusually far away from the ghost room or multiple hunts each occuring in vastly different locations might be a sign of The Twins.\n" +
    "Tip\n" +
    "\n" +
    "Note that crucifixes will only check for the main Twin when blocking hunts, regardless of which Twin attempted hunting. A hunt starting close to a working crucifix is a strong sign that it is the second Twin of the pair hunting.",
    "Each Twin has a different moving speed during hunts. The main Twin will be 10% slower than the standard ghost speed while the secondary Twin will be 10% faster. Noticing a subtle change in speed from one hunt to another might narrow down the ghost type."
];

const wraith = new Object();
wraith.name = 'Wraith';
wraith.evidences = wraith_evidences;
wraith.tags = ['no footprints', 'interactions', 'teleport'];
wraith.behaviour = [
    "Wraiths do not leave UV footprints when walking through salt, though they will still leave an imprint in the salt pile and can still create footstep sounds. After the ghost has stepped in salt, if it creates multiple footstep sounds but not prints, then it is very likely a Wraith.",
    "The Wraith stepping in salt also temporarily increases the average rate of interactions.",
    "Wraiths can teleport to a player outside hunts, generating an EMF Level 2 or 5 reading. If there is no other interaction nearby that would have caused an EMF 2/5 reading, it is possible that the ghost is a Wraith."
];

const yokai = new Object();
yokai.name = 'Yokai';
yokai.evidences = yokai_evidences;
yokai.tags = ['early hunter', 'senseless', 'interactions'];
yokai.behaviour = [
    "While players are talking near the Yokai, its hunt sanity threshold will be increased to 80%, else it will have the normal 50% threshold.",
    "During hunts, a Yokai can only sense voices and electronics within a 2-meter range. On Nightmare difficulty, this can be tested by standing into a room with a smudge stick handy (ideally far away from the door) and talking into the microphone or holding an active electronic equipment. If the ghost is nearby with no line-of-sight but does not enter the player's room despite the potential attraction, it is a good sign that it might be a Yokai. Be aware though that the ghost might also simply walk into the room by pure chance when roaming; multiple attempts might be needed to conclusively confirm or rule out the type of ghost.",
    "Continuously talking near a Yokai will increase the chance of interactions taking place."
];

const yurei = new Object();
yurei.name = 'Yurei';
yurei.evidences = yurei_evidences;
yurei.tags = ['door closing', 'ghost event', 'smudging'];
yurei.behaviour = [
    "The Yurei has a special ability where it will drop all the sanity of all players within 7.5 meters of it by 13%, while also closing a door sharply at the same time. Noticing a door sharply close from being fully open is a very strong sign of a Yurei. Keep in mind that this ability does not count as an actual ghost event and Yurei can still perform regular ghost events like any other ghost.",
    "The Yurei prefers ghost events where it hisses over other types of ghost events.",
    "Using a smudge stick near the Yurei will prevent the ghost from wandering out of its ghost room for 90 seconds. Players can try placing a Motion Sensor at the doorway, and proceed to smudge the ghost. If the motion sensor is never set off by the ghost within the next 90 seconds, then the ghost could be a Yurei."
];

// Ghost List
export const ghost_list = [banshee, demon, goryo, hantu, jinn, mare, myling, obake, oni, onryo, phantom, poltergeist, raiju, revenant, shade, spirit, the_mimic, the_twins, wraith, yokai, yurei];

// Functions

export function get_ghost(name) {
    let ghost = ghost_list.find(function(ghost) {
        return ghost.name.toUpperCase() === name.toUpperCase();
    });
    return(
        <Accordion expanded={true}>
            <AccordionSummary
                expandIcon={<ExpandMoreRounded />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
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
    );
}

export function ghost_details(ghost) {
    let info = [];

    for (var i = 0; i < ghost.tags.length; i++) {
        info.push(
            <Divider><Chip label={ghost.tags[i].toUpperCase()}/></Divider>,
            <Typography>{ghost.behaviour[i]}</Typography>
        )
    }
    return info;
}