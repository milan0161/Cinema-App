import { AnimatePresence } from 'framer-motion';
import AuthForm from '../../common/components/form/AuthForm';

const LoginPage = () => {
  return (
    <div className="min-h-screen">
      <AnimatePresence>
        <AuthForm />
      </AnimatePresence>
    </div>
  );
};

export default LoginPage;
