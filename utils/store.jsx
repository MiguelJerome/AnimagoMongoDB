import React, { createContext, useContext } from 'react';
import { useProductReducer } from './store';

const StoreContext = createContext();
const { Provider } = StoreContext;

export default function StoreProvider({ value = [], ...props }) {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
}

export function useStoreContext() {
  return useContext(StoreContext);
}
