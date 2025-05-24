import { ArrowRight, ChevronDown } from 'lucide-react';

const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
        behavior: 'smooth'
    });
};

const Hero = () => (
    <section className={'min-h-screen flex flex-col justify-center items-center text-center relative'} >
        <div className={'space-y-8 animate-fade-in'}>
            <div className={'space-y-4'}>
                <h1 className={'text-6xl lg:text-8xl font-light tracking-tight text-slate-900'}>
                    Thyago Rafael
                </h1>
                <p className={'text-xl lg:text-2xl text-slate-600 font-light max-w-2xl'}>
                    Software Engineer & Tech Lead
                </p>
            </div>
        </div>
        <button onClick={scrollToAbout} className={'absolute bottom-8 animate-bounce'}>
            <ChevronDown className={'w-6 h-6 text-slate-400'} />
        </button>
    </section>
);

export default Hero;
