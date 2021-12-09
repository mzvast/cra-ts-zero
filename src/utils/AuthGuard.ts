/**
 * @file [AuthGuard]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-03-13 16:16:32
 */

import {Role} from 'types/role';

export default {
    isAuthenticated: false,
    _role: Role.NoRole, // todo: 可能做一些get set的处理，暂时不需要
    authenticate(role: Role) {
        this._role = role;
        this.isAuthenticated = true;
        return Promise.resolve();
    },
    signout() {
        this._role = Role.NoRole;
        this.isAuthenticated = false;
        return Promise.resolve();
    },
    hasRole(requiredRole: number | undefined) {
        // console.log('ddt::hasRole', requiredRole);
        if (requiredRole === void 0) return true; // 不需要权限
        //! 如果requiredRole=== NoRole 则所有已登录的用户都可以访问
        return (this._role & requiredRole) === requiredRole;
    }
};
