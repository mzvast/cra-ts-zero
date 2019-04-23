/**
 * @file [AuthGuard]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-03-13 16:16:32
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */
export default {
    isAuthenticated: false,
    authenticate(cb?: Function) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb?: Function) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};
