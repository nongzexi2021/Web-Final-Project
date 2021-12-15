const myCart = [];

const cart = (state = myCart, action) => {
    const product = action.product;
    switch (action.type) {
        case 'add':
            return product
        case 'delete':
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            } else {
                return state.map((x) =>
                x.id === product.id ? {...x, qty: x.qty - 1} : x);
            }
            break;

        case 'put-to-order':
            console.log("reducer put-to-order： ", action.user.asBuyer)
            return action.user.asBuyer;

        default:
            return state;
            break;
    }
}

export default cart;