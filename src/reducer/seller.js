let emptySeller = {}
const initialState = {
    user: emptySeller
}

const seller = (state = initialState, action) =>{
    switch (action.type){
        case 'fetch-current-user':
            console.log(action.user, "the type of action.seller is", typeof (action.user));
            state = { user:  { ...state.user , ...action.user} }
            return state
        case "create-new-product":
            state = { user:  { ...state.user , ...action.user} }
            return state
        default:
            return(state);
    }
};

export default seller;