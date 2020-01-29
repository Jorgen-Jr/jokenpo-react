import * as GameRules from './../../controller/gameRules';

export function handleUserPick(user_pick, active_component) {
    const house_pick = GameRules.pickHouseOption();

    const winner = GameRules.evaluateResult(user_pick, house_pick);
    
    return {
        type: 'HANDLE_USER_PICK',
        user_pick, house_pick, winner, active_component,
    };
}