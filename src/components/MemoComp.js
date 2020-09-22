// like how PureComponent works for classes, we have Memo for Functions

import React from 'react';

function MemoComp(props){
    console.log('rendering')
    return(
        <div>
            Memo
        </div>
    )
}

// add React.memo to enable the PureComponent like function in this Function
// now if the props are not changing, this Component will not re-render
export default React.memo(MemoComp);