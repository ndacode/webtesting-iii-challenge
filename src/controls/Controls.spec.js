// Test away!
import React from 'react';
import Controls from './Controls'
import { render, fireEvent } from '@testing-library/react';

// provide buttons to toggle the closed and locked states. 

// testing whether the buttons provide both of these states

// is 'disabled' true? 

it('provides button that toggle closed and locked states ', () => {
    const { getByText, queryByDisplayValue } = render(<Controls />)

   fireEvent.click(getByText(/Close Gate/i));
                expect(queryByDisplayValue(/Open /i)).toBeFalsy;
            })


// it('renders "sucess" text', () => {
//     const { getByText, findByText } = (<App/>);
//     act(() => {
//         fireEvent.click(getByText("Get message!"));
//     });
//     findByText(/success/i)
// })

{/* <button/> disabled={!closed} onClick={toggleLocked} className="toggle-btn">
        {locked ? 'Unlock Gate' : 'Lock Gate'}
      </button>
      <button disabled={locked} onClick={toggleClosed} className="toggle-btn">
        {closed ? 'Open Gate' : 'Close Gate'}
      </button> */}

// buttons' text changes to reflect the state the door will be in if clicked


// the closed toggle button is disabled if the gate is locked


// the locked toggle button is disabled if the gate is open