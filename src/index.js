import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

import './index.css'
import { ContextProvider } from "./contexts/ContextProvider";
import Loading from './components/Loading';
const App = lazy(() => import('./App'));

ReactDOM.render
    (
        <ContextProvider>
            <Suspense fallback={<Loading />}>
                <App/>
            </Suspense>
        </ContextProvider>,
        document.getElementById('root')
    );