import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Redirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/ethcloudwallet');
  }, [router]);

  return null;
};

export default Redirect;