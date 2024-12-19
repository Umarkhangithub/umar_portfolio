import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/Home/HomePage";
import AboutPage from "./components/About/AboutPage";
import ServicePage from "./components/Services/ServicePage";
import ContactPage from "./components/Contact/ContactPage";
import EducationPage from "./components/Education/EducationPage";
import ProjectList from "./components/Add-project/ProjectList";
import UserAuth from "./components/User/UserAuth";

const App = () => (
  <Router className="backdrop-blur-md">
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projectlist" element={<ProjectList />} />
        <Route path="/userauth/*" element={<UserAuth />} />

        <Route
          path="*"
          element={
            <div
              className="grid justify-center mt-[-100px]
         h-screen w-full place-items-center"
            >
           
              <h1 className=" grid place-items-center place-content-center text-4xl text-white font-bold mt-20">
                Page Not Found... 404
              </h1>
            </div>
          }
        />
      </Routes>
    </Layout>
  </Router>
);

export default App;
