import React from 'react';
import {Routes, Route, Navigate } from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../router ";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth);

    return (
        isAuth?
        <Routes>
            {privateRoutes.map(route =>
                <Route
                    path={route.path}
                    element={<route.element/>}
                    key={route.path}
                />
            )}
            <Route path="/*" element={<Navigate to={RouteNames.EVENT} replace />} />
        </Routes>
            :
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    path={route.path}
                    element={<route.element/>}
                    key={route.path}
                />
            )}
            <Route path="/*" element={<Navigate to={RouteNames.LOGIN} replace />} />
        </Routes>

    );
};

export default AppRouter;