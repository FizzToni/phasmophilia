import * as React from 'react';
import {
    AcUnitOutlined, 
    BlurOnOutlined,
    MenuBookOutlined,
    MicOffOutlined,
    FingerprintOutlined,
    RemoveRedEyeOutlined, 
    RadioOutlined
} from "@mui/icons-material";

// Evidence Icons
export const evidenceIcons = [
    <FingerprintOutlined key="fingerprints" />,      // 0: Fingerprints
    <AcUnitOutlined key="freezing" />,               // 1: Freezing Temperatures
    <RemoveRedEyeOutlined key="orbs" />,             // 2: Ghost Orbs
    <RadioOutlined key="emf" />,                     // 3: EMF Level 5
    <BlurOnOutlined key="dots" />,                   // 4: D.O.T.S Projector
    <MenuBookOutlined key="writing" />,              // 5: Ghost Writing
    <MicOffOutlined key="spirit" />,                 // 6: Spirit Box
];

// Helper function to get evidence icons for a ghost
export function getEvidenceIcons(evidenceIndices) {
    return evidenceIndices.map(index => evidenceIcons[index]);
}