/**
 * In component files, import the pre-typed hooks instead of the standard hooks from React-Redux.
 */
import { useTypedDispatch, useTypedSelector } from '../store/hooks';
// import { selectCount } from '../store/counterSlice';

const Counter = () => {

  const dispatch = useTypedDispatch();
  // const count = useTypedSelector(selectCount);

  /*Így is lehetne, csak akkor mi a fasznak csináltuk volna a selectort a sliceos fileba:
    const countt = useTypedSelector(state => state.counter.value);*/

};

export default Counter;