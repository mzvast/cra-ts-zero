/**
 * @file [AuthGuard]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-03-13 16:16:32
 */
/* eslint-disable max-len,operator-linebreak,space-before-function-paren */
export default {
    isAuthenticated: false,
    authenticate(cb?: () => void) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb?: () => void) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};
