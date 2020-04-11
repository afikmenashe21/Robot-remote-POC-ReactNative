import createDataContext from './createDataContext';

const SemiRudecer = (state, action) => {
    switch (action.type) {
        case 'set_brush_speed':
            return { ...state, brushSpeed: action.payload }
        case 'set_vel_speed':
            return { ...state, velSpeed: action.payload }
        default:
            return state
    }
}

const setBrushSpeed = dispatch => /*async*/(value) => {
    dispatch({ type: 'set_brush_speed', payload: value })
};

const setVelSpeed = dispatch => /*async*/(value) => {
    dispatch({ type: 'set_vel_speed', payload: value })
};


export const { Provider,Context } = createDataContext(
    SemiRudecer,
    { setVelSpeed, setBrushSpeed},
    { velSpeed: 0, brushSpeed: 0 }
)