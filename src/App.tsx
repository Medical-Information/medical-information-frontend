import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/main-page/MainPage';
import NewsPreviewPage from 'pages/news-preview-page/news-preview-page';
import { AuthorsPage } from 'pages/authors/authors';
import SignUpPage from 'pages/sign-up/sign-up';
import SignInPage from 'pages/sign-in/sign-in';
import ArticlesPreviewPage from 'pages/articles-preview-page/articles-preview-page';
import { NotFoundPage } from 'pages/error-page/notFoundPage';
import AboutPage from 'pages/about-page/about-page';
import routes from 'utils/routes';

function App() {
  // TODO: поправить роуты в develop на страничках?

  return (
    <Routes>
      <Route path={routes.home} element={<MainPage />} />
      <Route path={routes.news.route} element={<NewsPreviewPage />} />
      <Route path={routes.articles.route} element={<ArticlesPreviewPage />} />
      <Route path={routes.podcasts.route} element={<NotFoundPage />} />
      <Route path={routes.drugs.route} element={<NotFoundPage />} />
      <Route path={routes.doctorQuestion.route} element={<NotFoundPage />} />
      <Route path={routes.about.route} element={<AboutPage />} />
      <Route path={routes.authors} element={<AuthorsPage />} />

      <Route path={routes.signup} element={<SignUpPage />} />
      <Route path={routes.signin} element={<SignInPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
