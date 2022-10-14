import React, { useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

import HeroSection from '../components/home/HeroSection';
import About from '../components/home/About';

function HomePage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== 'authenticated') {
      router.push('/login');
    }
  }, [status]);

  return (
    <div>
      
      <HeroSection />
      <About />
    </div>
  );
}

export default HomePage;
