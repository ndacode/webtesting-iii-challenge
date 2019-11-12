// Test away

// shows the controls and display
<Display locked={locked} closed={closed} />
<Controls
          locked={locked}
          closed={closed}
          toggleLocked={this.toggleLocked}
          toggleClosed={this.toggleClosed}
        />
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-testing-library';





// it('renders "sucess" text', () => {
//     const { getByText, findByText } = (<App/>);
//     act(() => {
//         fireEvent.click(getByText("Get message!"));
//     });
//     findByText(/success/i)
// })

