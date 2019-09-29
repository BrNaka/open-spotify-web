const INITIAL_STATE = { 
    section: "top",
    name: "Home",
    activeLink: 0
}

const reducer = function menu(state = INITIAL_STATE, action) { 
    switch (action.type) { 
        case "CHANGE_SECTION":
            return { ...action.changes };
        default: 
            return state
    }
}

export default reducer