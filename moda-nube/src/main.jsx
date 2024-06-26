import React from 'react'
import ReactDOM from 'react-dom/client'
import { CatalogApp } from './CatalogApp'
import { store } from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <CatalogApp/>
    </React.StrictMode>
  </Provider>
)
