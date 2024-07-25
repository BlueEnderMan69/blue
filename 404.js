import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Lost() {
  const router = useRouter();

  useEffect(() => {
    router.push('home.html');
  }, [router]);

  return null;
}
