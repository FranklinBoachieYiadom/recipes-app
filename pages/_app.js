import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import axios from 'axios';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Layout from '../components/layout/Layout';
import '../styles/app.css';
import '../styles/global.css';
import { getSingleMeal } from './meals/[id]';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1 * 60 * 60 * 1000,
      staleTime: 1 * 60 * 60 * 1000,
    },
  },
});

axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1/';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    if (localStorage.getItem('savedMeals')) {
      const savedMeals = JSON.parse(localStorage.getItem('savedMeals'));
      savedMeals.forEach((mealId) => {
        queryClient.prefetchQuery(['singleMeal', mealId], getSingleMeal);
      });
    } else {
      localStorage.setItem('savedMeals', JSON.stringify([]));
    }
  }, []);

  return (
      <SessionProvider>
        <Head>
          <title>Frace Recipe</title>
          <meta
            name="description"
            content="Frace Recipes is a listing website of meal recipe"
          />
        </Head>
        <QueryClientProvider client={queryClient}>
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                fontSize: '1.4rem',
              },
            }}
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </SessionProvider>
  );
}

export default MyApp;