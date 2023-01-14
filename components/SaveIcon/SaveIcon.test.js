import * as React from 'react';
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import SaveIcon from './index';

it('checkTitleRender', () => {
  const { queryByTitle } = render(<SaveIcon />);
  const btn = queryByTitle('save to collection');
  expect(btn).toBeTruthy();
});

// describe('clickButton', () => {
//   it('onClick', () => {
//     const { queryByTitle } = render(<SaveIcon />);
//     const btn = queryByTitle('save to collection');
//     expect(btn.innerHTML).toBe(' ');
//     fireEvent.click(btn);
//   });
// });