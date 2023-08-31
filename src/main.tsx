import ReactDOM from 'react-dom/client'
import './index.css'

import {
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom'

import HomePage from '@/pages/home.tsx'
import DemoPage from '@/pages/demo.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    { path: '/demo', element: <DemoPage /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />,
)
