import ErrorPage from "../components/ErrorPage";

const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("../components/Root");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />
    }
])

export default router;