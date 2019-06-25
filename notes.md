# Unit Testing II

## Testing Front End

See [https://testing-library.com/docs/dom-testing-library/intro] for documentation.

### First of all, make sure your package.json has:

    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    "dependencies": {
        "react": "^16.8.6",
        "react-dom": "^16.8.6",
        "react-scripts": "3.0.1"
    },
    "devDependencies": {
        "@testing-library/react": "^8.0.1"
    },

### Then, import render into your test file:

    import React from 'react';
    import ReactDOM from 'react-dom';
    import { render } from '@testing-library/react';
    import '@testing-library/react/cleanup-after-each';

    import App from './App';

    describe('<App />', () => {
        it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<App />, div);
            ReactDOM.unmountComponentAtNode(div);
        });

        it('renders without errors', () => {
            const queries = render(<App />);
    
        });

        it('renders hello world', () => {
            const { getByText } = render(<App />);

            getByText(/hello world/i);
        });

        describe('Greet Button', () => {
            it('says hello developers', () => {
                const { getByText, queryByText } = render(<App />);

                //find the button
                const button = getByText(/greet/i);

                //click it
                fireEvent.click(button);

                //confirm that "hello developers" is there
                expect(queryByText(/hello developers/i)).toBeTruthy();
            });
        });
    });

