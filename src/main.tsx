import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SecondPage from "./pages/SecondPage.tsx";
import Tabs from "./pages/Tabs.tsx";
import NotFound from "./Not-found.tsx";
import Layout from "./components/Layout.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <App />
              </Layout>
            }
          />
          <Route path="/pages/secondPage" element={<SecondPage />} />
          <Route path="/pages/tabs" element={<Tabs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>
);
