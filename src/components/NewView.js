import * as React from 'react';
import * as ghosts from './Ghosts';
import {ghost_list} from "./Ghosts";

const Ghosts = () => {



    return (
        <div>
            <h1>Hello Ghosthunter</h1>
            <div>
                {ghosts.get_ghost('goryo')}
            </div>
        </div>
    )
}

export default Ghosts;
