import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType) => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let newState = [...state]
            if(action.payload === 'up') {
                return newState.sort((a,b) => {
                    if(a.name > b.name) {return 1}
                    if(a.name < b.name) {return -1}
                    return 0
                })
            }
            if(action.payload === 'down') {
                return newState.sort((a,b) => {
                    if(a.name < b.name) return 1
                    if(a.name > b.name) return -1
                    return 0
                })
            }
            return newState // need to fix
        }
        case 'check': {
            let newState = [...state].map(user => user).filter((user:UserType) => user.age >= 18)
            return newState // need to fix
        }
        default:
            return state
    }
}
