import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from "react-redux";
import { RouterProvider } from 'react-router-dom'
// import App from "./App2"
// import App from "./App3"
// import App from "./UseRef"
// import App from "./useContext1"
import App from './App'
// import App from "./UseRef"
import store from './store/store';



class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.Fragment>
    <ErrorBoundary>
      <Provider store={store}>
        <App /> 
      </Provider>
    </ErrorBoundary>
  </React.Fragment>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
