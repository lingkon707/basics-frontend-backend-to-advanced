'use client';
import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.items;

export const selectItemsCount = createSelector(
  [selectItems],
  items => items.length
);
