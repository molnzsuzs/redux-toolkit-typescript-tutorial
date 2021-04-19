import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

/**
 * Each slice file should define a type for its initial state value, so that createSlice can correctly infer
 * the type of state in each case reducer.
 *
 * All generated actions should be defined using the PayloadAction<T> type from Redux Toolkit, which takes the type
 * of the action.payload field as its generic argument.
 *
 * You can safely import the RootState type from the store file here. It's a circular import, but the TypeScript
 * compiler can correctly handle that for types. This may be needed for use cases like writing selector functions.
 */

// ennek segítségével fogja tudni a createSlice jól inferelni a type-ot
interface CounterState {
  value: number
}

const initialState: CounterState = {value: 0};
// ha ez nem megy:
/*In some cases, TypeScript may unnecessarily tighten the type of the initial state.
 If that happens, you can work around it by casting the initial state using as, instead of declaring the type of the variable:

// Workaround: cast state instead of declaring variable type
  const initialState = {
    value: 0,
  } as CounterState
  */

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// we can create named selectors too
// export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;