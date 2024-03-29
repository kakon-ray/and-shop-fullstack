import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import '../css/app.css'
import { CartListProvider } from "../js/context/CartContext";
import { WishListProvider } from "../js/context/WishListContext";

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    return pages[`./Pages/${name}.jsx`]
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <Provider store={store}>
        <CartListProvider>
          <WishListProvider>
            <App {...props} />
          </WishListProvider>
        </CartListProvider>

      </Provider>

    )
  },
})