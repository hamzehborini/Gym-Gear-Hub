import { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product } from '../data/products';

export interface CartItem {
  id: string; // unique cart item id based on product + flavor + size
  product: Product;
  flavor: string;
  size: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'id'> }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_OPEN'; payload: boolean };

const initialState: CartState = {
  items: [],
  isOpen: false,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, flavor, size, quantity } = action.payload;
      const id = `${product.id}-${flavor}-${size}`;
      const existingItemIndex = state.items.findIndex(item => item.id === id);

      if (existingItemIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingItemIndex].quantity += quantity;
        return { ...state, items: newItems };
      }

      return {
        ...state,
        items: [...state.items, { id, product, flavor, size, quantity }],
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'SET_OPEN':
      return { ...state, isOpen: action.payload };
    default:
      return state;
  }
}

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  totalItems: number;
  subtotal: number;
} | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const totalItems = state.items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = state.items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ state, dispatch, totalItems, subtotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
