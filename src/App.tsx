import { Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import './index.css';

// Lazy load heavy sections
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));

// Loading Spinner Component
const PageLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-10 h-10 border-4 border-light-primary/30 border-t-light-primary dark:border-dark-primary/30 dark:border-t-dark-primary rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden custom-scrollbar">
        <ScrollProgress />
        <Navigation />
        <main>
          <Hero />
          <About />
          <Suspense fallback={<PageLoader />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<PageLoader />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<PageLoader />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<PageLoader />}>
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
