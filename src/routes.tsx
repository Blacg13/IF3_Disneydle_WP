import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import QuizMenu from './Components/QuizMenu/QuizMenu';
import QuizzCharacters from './Components/Quizz/QuizzCharacters';
import QuizzQuotes from './Components/Quizz/QuizzQuotes';
import QuizzSongs from './Components/Quizz/QuizzSongs';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <QuizMenu />
            },
            {
                path: "/characters",
                element: <QuizzCharacters />
            },
            {
                path: "/quotes",
                element: <QuizzQuotes />
            },
            {
                path: "/songs",
                element: <QuizzSongs />
            }
        ]
    },
])

export default routes;