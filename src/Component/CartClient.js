export const addCart = (product) => {
    console.log(product)
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