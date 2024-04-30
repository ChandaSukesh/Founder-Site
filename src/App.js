import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Leads, EmptyPage } from "./components.const";

import Sidebar from "./Layout/Sidebar";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Inter serif",
      textTransform: "none",
      fontSize: 16,
    },
  },
});

const routesList = [
  { name: "Leads", path: "/", component: Leads },
  { name: "My Workspace", path: "/workspace", component: EmptyPage },
  { name: "POI Alerts", path: "/poi", component: EmptyPage },
  { name: "Funds Tracking", path: "/funds", component: EmptyPage },
  { name: "My meetings", path: "/meetings", component: EmptyPage },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
      <Router>
        <Routes>
          {routesList.map((route, idx) => (
            <Route
              index={route.index}
              key={`route1-${idx}`}
              name={route.name}
              path={route.path}
              element={
                <Suspense>
                  <route.component />
                </Suspense>
              }
            />
          ))}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
