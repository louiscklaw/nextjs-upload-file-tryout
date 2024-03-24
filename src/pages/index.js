import Home from './Home';
import { setup } from 'lib/csrf';

export const getServerSideProps = setup(async ({ req, res }) => {
  return {
    props: {},
  };
});

export default function Index() {
  return <Home />;
}
