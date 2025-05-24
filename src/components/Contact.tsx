
import { Mail, Github, Linkedin, Send } from 'lucide-react';

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
                <p className={'text-lg text-slate-600 max-w-2xl mx-auto'}>
                    Ready to bring your ideas to life? Let's discuss your next project.
                </p>
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
                        <form className={'space-y-6'}>
                            <div className={'grid md:grid-cols-2 gap-6'}>
                                <div>
                                    <label className={'block text-sm font-medium text-slate-700 mb-2'}>
                                        Name
                                    </label>
                                    <input
                                        type={'text'}
                                        className={'w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'}
                                        placeholder={'Your name'}
                                    />
                                </div>
                                <div>
                                    <label className={'block text-sm font-medium text-slate-700 mb-2'}>
                                        Email
                                    </label>
                                    <input
                                        type={'email'}
                                        className={'w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'}
                                        placeholder={'your@email.com'}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={'block text-sm font-medium text-slate-700 mb-2'}>
                                    Message
                                </label>
                                <textarea
                                    rows={6}
                                    className={'w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none'}
                                    placeholder={'Tell me about your project...'}
                                ></textarea>
                            </div>

                            <button
                                type={'submit'}
                                className={'group w-full flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-300 hover:scale-[1.02]'}
                            >
                                Send Message
                                <Send className={'w-4 h-4 group-hover:translate-x-1 transition-transform'} />
                            </button>
                        </form>
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
