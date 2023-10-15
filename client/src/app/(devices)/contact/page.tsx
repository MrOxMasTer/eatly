import { ContactForm } from '@/features/ContactForm';
import SvgArrowContact from '@/shared/assets/svg/SvgArrowContact';

// TODO: Доделать функционал отправки

export default function Contact() {
    return (
        <main>
            <div className="container pb-[100px]">
                <div className="flow relative mt-[51px] grid min-h-[150px] bg-primary text-pureWhite">
                    <div className="mt-6 text-center font-poppins text-2xl font-semibold">
                        Contact Us
                    </div>
                    <SvgArrowContact className="absolute translate-y-5" />
                </div>

                <ContactForm />
            </div>
        </main>
    );
}
