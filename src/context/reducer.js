const Reducer = (state, action) => {
    switch(action.type){
        case "LOGIN_START":
            return {
                userinfo: null,
                isfetching: true,
                error: false
            }
        case "LOGIN_SUCCESS":
            return {
                userinfo: action.payload,
                isfetching: false,
                error: false
            }
        case "LOGIN_FAILURE":
            return {
                userinfo: null,
                isfetching: false,
                error: true
            }
        case "LOGOUT":
            return {
                userinfo: null,
                isfetching: false,
                error: false
            }
        default:
            return state;
    }
};

export default Reducer;