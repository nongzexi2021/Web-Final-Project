export const addCart = (product) => {
    return {
        type:'add',
        product
    }
}

export const delCart = (product) => {
    return {
        type: 'delete',
        product
    }
}