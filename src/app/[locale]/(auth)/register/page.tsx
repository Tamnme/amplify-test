'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { RegisterForm } from '@/features/auth/components/register-form';

// export const metadata = {
//   title: 'Register your account',
//   description: 'Register your account',
// };

const RegisterPage = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const redirectTo = searchParams?.get('redirectTo');

  const [chooseTeam, setChooseTeam] = useState(false);

  return (
    <RegisterForm
      onSuccess={() =>
        router.replace(`${redirectTo ? `${redirectTo}` : '/app'}`)
      }
      chooseTeam={chooseTeam}
      setChooseTeam={() => setChooseTeam(!chooseTeam)}
    />
  );
};

export default RegisterPage;
