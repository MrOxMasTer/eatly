import { SignUpForm } from '@/features/auth/SignUpForm';
import Link from 'next/link';

export default function SignUp() {
    return (
        <main>
            <div className="container pb-[103px]">
                <h2 className="mt-[100px] text-center text-[1.75rem] font-semibold text-tuna">
                    Sing Up To eatly
                </h2>
                <div className="mt-[38px] flex justify-between gap-4">
                    <button className="w-full text-center">Google</button>
                    <button className="w-full text-center">Apple</button>
                </div>

                <div className="mt-[27px] text-center font-medium uppercase text-japaneseLaurel/30">
                    or
                </div>

                <SignUpForm />

                <div className="mt-[1.1875rem] text-center text-[0.9375rem]">
                    Already Have An Account?{' '}
                    <Link
                        className="font-bold text-primary"
                        href="/auth/signIn">
                        Log In
                    </Link>
                </div>
            </div>
        </main>
    );
}
