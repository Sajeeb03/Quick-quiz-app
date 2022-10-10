import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("../components/Root");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            }
        ]
    }
])

export default router;