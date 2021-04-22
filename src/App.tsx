import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '~/components/Navigation';
import 'normalize.css';
import AppRouter from '~/components/AppRouter';
import { useActions } from '~/hooks/useActions';
import { useTypedSelector } from '~/hooks/useTypedSelector';

const App: React.FC = () => {
    const { fetchUsers } = useActions();
    const { usersLimit, usersPage } = useTypedSelector((state) => state.users);

    useEffect(() => {
        fetchUsers(usersLimit, usersPage);
    }, [usersPage]);

    return (
        <BrowserRouter>
            {/*<Navigation />*/}
            <AppRouter />
        </BrowserRouter>
    );
};

export default App;
