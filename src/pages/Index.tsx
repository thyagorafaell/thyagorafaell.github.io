
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
            <div className={"fixed inset-0 -z-10 overflow-hidden"}>
                <div className={"absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"}></div>
                <div className={"absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-green-100 to-blue-100 rounded-full blur-3xl opacity-30"}></div>
            </div>
        </div>
    );
};

export default Index;
