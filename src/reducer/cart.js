const myCart = [];

const cart = (state = myCart, action) => {
    const product = action.product;
    switch (action.type) {
        case 'add':
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                return state.map((x) =>
                x.id === product.id ? {...x, qty: x.qty + 1} : x);
            } else {
                const product = action.product;
                return[
                    ...state,
                    {
                        ...product,
                        qty : 1,
                    }
                ]
            }
            break;

        case 'delete':
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            } else {
                return state.map((x) =>
                x.id === product.id ? {...x, qty: x.qty - 1} : x);
            }
            break;

        default:
            return state;
            break;
    }
}

export default cart;