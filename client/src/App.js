import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RoutesWeb } from "./route";
import DefaultLayout from "./components/DefaultLayout";
import { useEffect, useState } from "react";
import Loading from "./Loading";

function App() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, [show]);
  return (
    <Router>
      <div className="App">
        <Routes>
          {RoutesWeb.map((r, i) => {
            let Pages = r.component;
            const Layout = DefaultLayout;
            return (
              <Route
                path={r.path}
                element={
                  show ? (
                    <Loading />
                  ) : (
                    <Layout>
                      <Pages />
                    </Layout>
                  )
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
