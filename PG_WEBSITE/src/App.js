import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Careers from './components/Jobs/Careers';
import MainLayout from './layouts/MainLayout';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Contactus from './components/pages/Contactus';
import Aboutus from './components/pages/Aboutus';
import News from './components/pages/News';
// admin part
import AdminLayout from './layouts/AdminLayout';
import Adminloginpage from "./admin/Adminloginpage"
import Admindashboard from './admin/Admindashboard';
import NewsLayout from './layouts/NewsLayout';

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "careers",
          element: <Careers />,
        },
        {
          path: "",
          element: <Home />
        },
        {
          path: "contact-us",
          element: <Contactus />
        },
        {
          path: "about-us",
          element: <Aboutus />
        },
        {
          path: "services",
          element: <Services />
        }
      ]
    },
    {
      path: "news",
      element: <NewsLayout />,
      children: [
        {
          path: "",
          element: <News />
        }
      ]
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "",
          element: <Adminloginpage />
        },
        {
          path: "dashboard",
          element: <Admindashboard />
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routes}>
      </RouterProvider>
    </>
  );
}

export default App;
