const initState = {
    themeId: 1,
}
export type InitialStateType = {
    themeId: number
}

export const themeReducer = (state: InitialStateType = initState, action: changeThemeIdType): InitialStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}
//type changeThemeIdType = ReturnType<typeof changeThemeId>

type changeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}
export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id })  // fix any
