import React from 'react';
import Home from './Pages/Home';

import { ThemeProvider } from 'styled-components';
import theme from './components/styled/theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );
};

export default App;
