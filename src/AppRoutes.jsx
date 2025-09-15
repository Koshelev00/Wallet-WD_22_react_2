import { Routes, Route } from 'react-router-dom';
import MainPage from './components/main/mainPage';
import Analysispage from './components/analysisPage/AnalysisPage';
import AuthForm from './components/login/AuthForm';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
function NotFoundPage() {
    return <h1>404 - Страница не найдена</h1>;
}

function AppRoutes() {
    
    const navigate = useNavigate()
    const [isCheckingAuth, setIsCheckingAuth] = useState(true)

    
    useEffect(() => {
        const checkAuth = () => {
            const userData = JSON.parse(localStorage.getItem('userInfo'))
            const currentPath = window.location.pathname
            const publicRoutes = ['/', '/signin', '/signup']

            if (!userData?.token && !publicRoutes.includes(currentPath)) {
                navigate('/signin')
            }
            
            if (userData?.token && publicRoutes.includes(currentPath)) {
                navigate('/my-expenses')
            }
            
            setIsCheckingAuth(false)
        }
        
        checkAuth()
    }, [navigate])

    if (isCheckingAuth) {
        return <div>Loading...</div>
    }

    return (
        <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/signin" element={<AuthForm />} />
        <Route path="/signup" element={<AuthForm />} />

        <Route path="/main" element={<MainPage />} />
        <Route path="/my-expenses" element={<MainPage />} />
        <Route path="/expense-analysis" element={<Analysispage />} />

        <Route path="/log-out" element={<AuthForm />} />

        <Route path="*" element={<NotFoundPage />} />
    </Routes>
    )
}
export default AppRoutes;