'use client';

import { useEffect, Suspense } from 'react';
export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='text-center mt-10'>
        <h1>Something went wrong. Please try again later.</h1>
        <button className='hover:text-amber-600' onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </Suspense>
  );
}