import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Quiz from "../components/Quiz";
import Blog from "../components/Blog";
import Statistics from "../components/Statistics";


const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("../components/Root");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/quiz/:id',
                element: <Quiz></Quiz>,
                loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blog />
            },
            {
                path: '/statistics',
                element: <Statistics />
            }
        ]
    }
])

export default router;