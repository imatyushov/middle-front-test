import React from "react";
import Login from "../pages /Login";
import Event from "../pages /Event";


export interface IRoutes {
    path: string,
    element: React.ComponentType
}

export enum RouteNames {
    LOGIN='login',
    EVENT='/'
}


export const publicRoutes:IRoutes[] = [
    {path: RouteNames.LOGIN, element: Login }
]

export const privateRoutes: IRoutes[] = [
    {path: RouteNames.EVENT, element: Event}
]