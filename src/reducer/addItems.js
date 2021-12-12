const addItem = [];

const addItems = (state = addItem, action) => {
    switch (action.type) {
        case "ADDITEM":
            return [
                ...state,
                action.product
        ]
        break;

        case "DELITEM":
            return state = state.filter((x) => {
                return x.id !== action.product.id
            })
            break;

        default: return state;
        break;
    }
}

export default addItems;
