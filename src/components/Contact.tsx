
import { Github, Linkedin, Mail } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
    const year = new Date().getFullYear();

    const socialLinks = [{
        icon: Github,
        label: 'GitHub',
        href: 'https://github.com/thyagorafaell',
        color: 'hover:text-gray-900'
    }, {
        icon: Linkedin,
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/thyagorafael',
        color: 'hover:text-blue-600'
    }, {
        icon: Mail,
        label: 'Email',
        href: 'mailto:trsconsultoriaedesenvolvimento@gmail.com',
        color: 'hover:text-red-500'
    }];

    return (
        <section className={'py-24'}>
            <div className={'text-center mb-16'}>
                <h2 className={'text-4xl lg:text-5xl font-light text-slate-900 mb-6'}>
                    Let's Connect
                </h2>
                <div className={'w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8'}></div>
            </div>
            <div className={'max-w-4xl mx-auto'}>
                { /* if (state.succeeded) {
                    return (
                        <div>
                            <p>Thanks!</p>;<button onClick={reset}>Reset</button>
                        </div>
                    );
                } */ }
            </div>
            <div className={'max-w-4xl mx-auto'}>
                <div className={'grid lg:grid-cols-2 gap-16'}>
                    <div className={'space-y-8'}>
                        <div>
                            <h3 className={'text-2xl font-medium text-slate-900 mb-4'}>
                                Get in Touch
                            </h3>
                            <p className={'text-slate-600 leading-relaxed'}>
                                I'm always open to discussing new opportunities, creative projects,
                                or potential collaborations. Feel free to reach out!
                            </p>
                        </div>
                        <div className={'flex gap-6'}>
                            {
                                socialLinks.map(link => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className={`group p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${link.color}`}
                                        aria-label={link.label}
                                    >
                                        <link.icon className={'w-6 h-6 text-slate-600 group-hover:scale-110 transition-transform duration-300'} />
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div className={'bg-white rounded-2xl p-8 shadow-sm'}>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <div className={'text-center mt-16 pt-8 border-t border-slate-200'}>
                <p className={'text-slate-500'}>
                    © {year} Thyago Rafael
                </p>
            </div>
        </section>
    );
};

export default Contact;
