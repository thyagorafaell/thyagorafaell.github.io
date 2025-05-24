import { ArrowRight, ChevronDown } from 'lucide-react';
import { useCallback } from 'react';

const Hero = () => {
    const scrollToAbout = useCallback(() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <section className={'min-h-screen flex flex-col justify-center items-center text-center relative'} >
            <div className={'space-y-8 animate-fade-in'}>
                <div className={'space-y-4'}>
                    <h1 className={'text-6xl lg:text-8xl font-light tracking-tight text-slate-900'}>
                        Thyago Rafael
                    </h1>
                    <p className={'text-xl lg:text-2xl text-slate-600 font-light max-w-2xl'}>
                        Full Stack Developer & UI/UX Designer
                    </p>
                </div>
                <div className={'space-y-6'}>
                    <p className={'text-lg text-slate-500 max-w-lg mx-auto leading-relaxed'}>
                        Crafting digital experiences that blend beautiful design with robust functionality
                    </p>
                    <button
                        onClick={scrollToAbout} className={'group inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all duration-300 hover:scale-105'}>
                        Explore My Work
                        <ArrowRight className={'w-4 h-4 group-hover:translate-x-1 transition-transform'} />
                    </button>
                </div>
            </div>
            <button onClick={scrollToAbout} className={'absolute bottom-8 animate-bounce'}>
                <ChevronDown className={'w-6 h-6 text-slate-400'} />
            </button>
        </section>
    );
};

export default Hero;
