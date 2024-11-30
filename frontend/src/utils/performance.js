// frontend/src/utils/performance.js
import { lazy, Suspense } from 'react';

// Lazy loading components
export const TeachingStyleQuiz = lazy(() => 
  import('../components/quiz/TeachingStyleQuiz')
);

export const ModuleDesigner = lazy(() => 
  import('../components/module/ModuleDesigner')
);

// Image optimization
export const optimizeImage = (url, width = 800) => {
  return `${url}?w=${width}&q=75&auto=format`;
};

// Cache management
export const cacheConfig = {
  maxAge: 60 * 60 * 24, // 24 hours
  immutable: true,
  staleWhileRevalidate: true
};