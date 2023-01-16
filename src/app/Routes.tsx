import { lazy, Suspense } from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Loader from '../components/common/Loader';
// import ErrorBoundary from "../components/ErrorBoundary";
import Home from '@/pages/Home';
import MainLayout from '@/layouts/MainLayout';
import BlankLayout from '@/layouts/BlankLayout';
// import Logout from '@/pages/Logout';
// import Movies from '@/pages/Movies';
// import MovieDetails from '@/pages/MovieDetails';
// import Search from '@/pages/Search';
// import Popular from '@/pages/Popular';
// import Trending from '@/pages/Trending';
// import LoginForm from '@/pages/Login';
// import RegisterForm from '@/pages/Register';
// import Profile from '@/pages/Profile';
// import Feedbacks from '@/pages/Feedbacks';
// import NotFound from '@/pages/404';

const Movies = lazy(() => import('@/pages/Movies'));
const Feedbacks = lazy(() => import('@/pages/Feedbacks'));
const LoginForm = lazy(() => import('@/pages/Login'));
const Logout = lazy(() => import('@/pages/Logout'));
const MovieDetails = lazy(() => import('@/pages/MovieDetails'));
const NotFound = lazy(() => import('@/pages/404'));
const Popular = lazy(() => import('@/pages/Popular'));
const Profile = lazy(() => import('@/pages/Profile'));
const RegisterForm = lazy(() => import('@/pages/Register'));
const Search = lazy(() => import('@/pages/Search'));
const Trending = lazy(() => import('@/pages/Trending'));

export default function Routes() {
  return (
    <Suspense
      fallback={
        <div className="loading">
          <Loader size={40} />
        </div>
      }
    >
      <div className="w-full">
        <ReactRoutes>
          <Route path="/movies">
            <Route
              index
              element={
                <MainLayout>
                  <Movies />
                </MainLayout>
              }
            />
            <Route
              path=":id"
              element={
                <MainLayout>
                  <MovieDetails />
                </MainLayout>
              }
            />
          </Route>
          <Route
            path="/search"
            element={
              <MainLayout>
                <Search />
              </MainLayout>
            }
          />
          <Route
            path="/popular"
            element={
              <MainLayout>
                <Popular />
              </MainLayout>
            }
          />
          <Route
            path="/trending"
            element={
              <MainLayout>
                <Trending />
              </MainLayout>
            }
          />
          <Route
            path="/profile"
            element={
              <MainLayout>
                <Profile />
              </MainLayout>
            }
          />
          <Route
            path="/feedbacks"
            element={
              <MainLayout>
                <Feedbacks />
              </MainLayout>
            }
          />
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <BlankLayout>
                <LoginForm />
              </BlankLayout>
            }
          />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="*" element={<NotFound />} />
        </ReactRoutes>
      </div>
    </Suspense>
  );
}
