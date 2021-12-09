import {Role} from 'types/role';
import AuthGuard from 'utils/AuthGuard';
import {browserHistory} from 'utils/browserHistory';

const useLogin = () => {
    return {
        isLoggedIn: AuthGuard.authenticate,
        loginAsVisitor,
        loginAsDeveloper
    };

    async function loginAsVisitor() {
        await AuthGuard.authenticate(Role.Visitor);
        browserHistory.goBack();
    }

    async function loginAsDeveloper() {
        await AuthGuard.authenticate(Role.Developer);
        browserHistory.goBack();
    }
};

export default useLogin;
