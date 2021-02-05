import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/resume" component={ResumePage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
