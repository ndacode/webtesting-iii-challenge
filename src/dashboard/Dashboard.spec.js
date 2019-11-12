// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
// shows the controls and display

describe('<Dashboard/>', () => {
    it ('renders correctly', () => {
        const tree = render
        .create(<Dashboard/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
});


// describe('<Display/>', () => {
//     it ('shows the controls and display', () => {
//         const {getByText, findByText } = {<Display/>};
//         expect(tree).toMatchSnapshot();
//     });
// });