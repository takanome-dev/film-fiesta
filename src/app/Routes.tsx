import { lazy, Suspense } from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Loader from '../components/common/Loader';
// import ErrorBoundary from "../components/ErrorBoundary";
import { Movies } from '../pages';
import MovieDetails from '@/pages/MovieDetails';

const Feedbacks = lazy(() => import('../pages/Feedbacks'));
const Login = lazy(() => import('../pages/Login'));
const Logout = lazy(() => import('../pages/Logout'));
// const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const NotFound = lazy(() => import('../pages/404'));
const Popular = lazy(() => import('../pages/Popular'));
const Profile = lazy(() => import('../pages/Profile'));
const Register = lazy(() => import('../pages/Register'));
const Search = lazy(() => import('../pages/Search'));
const Trending = lazy(() => import('../pages/Trending'));

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
          <Route path="/" element={<Movies />} />
          <Route path="movies" element={<Movies />}>
            <Route path=":id" element={<MovieDetails />} />
          </Route>
          <Route path="search" element={<Search />} />
          <Route path="popular" element={<Popular />} />
          <Route path="trending" element={<Trending />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="feedbacks" element={<Feedbacks />} />
          <Route path="not-found" element={<NotFound />} />
        </ReactRoutes>
      </div>
    </Suspense>
  );
}
