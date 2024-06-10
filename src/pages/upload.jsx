import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default () => {
  let router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, []);
  return <>redirecting...</>;
};
