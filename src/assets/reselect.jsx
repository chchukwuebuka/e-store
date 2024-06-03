import { createSelector } from 'reselect';

const selectCartState = (state) => state.cart;

export const selectCartProduct = createSelector(
  [selectCartState],
  (cart) => cart.cartProduct || []
);

export const selectItems = createSelector(
  [selectCartState],
  (cart) => cart.items || []
);

export const selectQuantities = createSelector(
  [selectCartState],
  (cart) => cart.quantities || {}
);
