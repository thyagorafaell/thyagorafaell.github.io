
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Skills from '../components/Skills';

const Index = () => {
    return (
        <div className={"min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100"}>
            <div className={"max-w-6xl mx-auto px-6 lg:px-8"}>
                <Hero />
                <About />
                <Skills />
                <Contact />
            </div>
        </div>
    );
};

export default Index;
