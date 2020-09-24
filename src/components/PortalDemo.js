/*
    In React all components are rendered in div with class='root' 

    Portal allows us to render component in DOM nodes other than the default one
    with class='root'
 */

import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo(){
    return ReactDOM.createPortal(
        <div>
            <h1>Portal Demo</h1>
        </div>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo