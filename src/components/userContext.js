/*
    Context
        - Content provides a way to pass data through the component tree without
          having to pass props down manually at every level

    3 Steps
        1. create context
        2. provide a context value
        3. consume the context value in necesary component

        another way to use context is using context type
            limitations
                - can only be used in classes
                - can only subscribe to a single context using context type
                
*/

import React from 'react'

// step 1 -> create context
// the value in .createContext() is the default value and is only displayed if there's no matching provider to override it

const UserContext = React.createContext('Guest')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
export default UserContext