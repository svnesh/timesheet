export const LoginStart = (userCredentials)=>({
    type: "LOGIN_START"
});

export const LoginSuccess = (userinfo)=>({
    type: "LOGIN_SUCCESS",
    payload: userinfo
});

export const LoginFailure = ()=>({
    type: "LOGIN_FAILURE"
});

export const Logout = ()=>({
    type: "LOGOUT"
});