
import * as types from '../constants/ActionTypes'
const defaultState=[
    {
        'id': '1',
        'name':'aplusautomation',
        'image':'aplusautomation.jpg',
        'description':'This is product 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa unde aperiam ipsam atque temporibus. Magnam quia nam distinctio earum sint.',
        'price':13,
        'sellable':true
    },
    {
        'id': '2',
        'name':'aplus-media',
        'image':'aplus-media.jpg',
        'description':'This is product 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa unde aperiam ipsam atque temporibus. Magnam quia nam distinctio earum sint.',
        'price':90,
        'sellable':true
    },
    {
        'id': '3',
        'name':'robo_fig_combo',
        'image':'robo_fig_combo.jpg',
        'description':'This is product 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa unde aperiam ipsam atque temporibus. Magnam quia nam distinctio earum sint.',
        'price':85,
        'sellable':false
    },
    {
        'id': '4',
        'name':'target-leap-frog',
        'image':'target-leap-frog.jpg',
        'description':'This is product 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa unde aperiam ipsam atque temporibus. Magnam quia nam distinctio earum sint.',
        'price':158,
        'sellable':true
    }
];

const listOfProduct = (state=defaultState, action) => {
    switch (action.type) {
        case types.CLOSE_FORM:
            return state = false
        default:
            return state;
    }
    
}
export default listOfProduct; 