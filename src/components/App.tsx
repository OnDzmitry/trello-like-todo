import * as React from "react";
import { Logo } from './logo/logo';
import { Header } from './header/Header';

export interface AppProps { }
export interface AppState { }

export class App extends React.Component<AppProps, AppState> {
    render() {
        return <Header className={""}>
            <Logo classes={""}>Test</Logo>
            </Header>;
    }
}