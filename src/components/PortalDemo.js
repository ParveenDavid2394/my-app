/*
    In React all components are rendered in div with class='root' 

    Portal allows us to render component in divs other than the default one
    with class='root'
 */

import React from 'react'

function PortalDemo(){
    return React.createPortal(
        <div>
            Portal Demo
        </div>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo