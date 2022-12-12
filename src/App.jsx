import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import PopularMovies from "./pages/PopularMovies";
import theme from "./theme";

// redux
import { Provider } from "react-redux";
import { store } from "./store";
import PrivateRoute from "./pages/PrivateRoute";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route
              path='/popular'
              element={
                <PrivateRoute>
                  <PopularMovies />
                </PrivateRoute>
              }
            />
          </Routes>
        </Provider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
