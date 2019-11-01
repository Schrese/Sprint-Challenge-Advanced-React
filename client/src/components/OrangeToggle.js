import React from 'react';
import {useOrangeMode} from './useOrangeMode';

export const OrangeToggle = () => {
    const [orangeMode, setOrangeMode] = useOrangeMode(false);

    const toggler = e => {
        console.log('button clicked!!!!!! hurayyyyyyy')
        setOrangeMode(!orangeMode);
    };

    return(
        <div>
            <button
                onClick = {toggler}
                className = 'orange'
            >Orange
            </button>
            {/* <button>testing</button> */}
        </div>
    )
}

// export default OrangeToggle;