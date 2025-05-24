
const About = () => (
    <section id={'about'} className={'py-24'}>
        <div className={'grid lg:grid-cols-2 gap-16 items-center'}>
            <div className={'space-y-8'}>
                <div>
                    <h2 className={'text-4xl lg:text-5xl font-light text-slate-900 mb-6'}>
                        About Me
                    </h2>
                    <div className={'w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'}></div>
                </div>
                <div className={'space-y-6 text-slate-600 leading-relaxed'}>
                    <p className={'text-lg'}>
                        I'm a passionate developer with a keen eye for design and a love for creating
                        seamless digital experiences. With expertise spanning from frontend development
                        to backend architecture, I bring ideas to life through clean, efficient code.
                    </p>
                    <p>
                        My journey in tech has led me to work with diverse technologies and collaborate
                        with teams worldwide. I believe in the power of well-crafted software to solve
                        real-world problems and enhance user experiences.
                    </p>
                    <p>
                        When I'm not coding, you'll find me exploring new technologies, contributing to
                        open-source projects, or sharing knowledge with the developer community.
                    </p>
                </div>
            </div>
            <div className={'relative'}>
                <div className={'aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center'}>
                    <div className={'w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20'}></div>
                </div>
                <div className={'absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-white/30 rounded-2xl'}></div>
            </div>
        </div>
    </section>
);

export default About;
