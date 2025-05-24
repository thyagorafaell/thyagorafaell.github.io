
import { useForm, ValidationError } from '@formspree/react';
import { Send } from 'lucide-react';

const ContactForm = () => {
    const [formState, handleSubmit, reset] = useForm('xovdovnv');

    if (formState.succeeded) {
        return (
            <div className={'text-center'}>
                <h3 className={'text-2xl font-medium text-slate-900 mb-4'}>Thanks for reaching out!</h3>
                <p className={'text-slate-600'}>
                    I will get back to you as soon as possible.
                </p>
                <button
                    onClick={reset}
                    className={'gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-slate-800 hover:scale-[1.02]'}
                    type={'button'}
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <form className={'space-y-6'} onSubmit={handleSubmit}>
            <div className={'grid md:grid-cols-2 gap-6'}>
                <div>
                    <label className={'block text-sm font-medium text-slate-700 mb-2'} htmlFor={'name'}>
                        Name
                    </label>
                    <input
                        type={'text'}
                        className={'w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'}
                        placeholder={'Your name'}
                        name={'name'}
                        required
                    />
                    <ValidationError prefix={'Name'} field={'name'} errors={formState.errors} />
                </div>
                <div>
                    <label className={'block text-sm font-medium text-slate-700 mb-2'} htmlFor={'email'}>
                        Email
                    </label>
                    <input
                        type={'email'}
                        className={'w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'}
                        placeholder={'your@email.com'}
                        name={'email'}
                        required
                    />
                    <ValidationError prefix={'Email'} field={'email'} errors={formState.errors} />
                </div>
            </div>
            <div>
                <label className={'block text-sm font-medium text-slate-700 mb-2'} htmlFor={'message'}>
                    Message
                </label>
                <textarea
                    rows={6}
                    className={'w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none'}
                    placeholder={'Tell me about your project...'}
                    name={'message'}
                    required
                ></textarea>
                <ValidationError prefix={'Message'} field={'message'} errors={formState.errors} />
            </div>
            <button
                type={'submit'}
                className={'w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group hover:bg-slate-800 hover:scale-[1.02]'}
                disabled={formState.submitting}
                cursor-not-allowed
            >
                Send Message
                <Send className={'w-4 h-4 group-hover:translate-x-1 transition-transform'} />
            </button>
        </form>
    );
};

export default ContactForm;
