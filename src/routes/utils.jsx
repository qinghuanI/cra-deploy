import { Suspense, lazy } from 'react';

export const load = (view) => {
  const Component = lazy(() => import(`../pages/${view}`));

  return (
    <Suspense fallback={<>Loading...</>}>
      <Component />
    </Suspense>
  );
};
