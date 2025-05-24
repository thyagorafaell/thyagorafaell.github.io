
const About = () => (
    <section id={'about'} className={'py-24'}>
        <div className={'text-center mb-16'}>
            <div className={'space-y-8'}>
                <div>
                    <h2 className={'text-4xl lg:text-5xl font-light text-slate-900 mb-6'}>
                        About me
                    </h2>
                    <div className={'w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8'}></div>
                </div>
                <div className={'space-y-6 text-slate-600 leading-relaxed'}>
                    <p className={'text-lg'}>
                        With a strong background in web development, I have led the design and development of complex analytics modules and scalable APIs.
                    </p>
                    <p className={'text-lg'}>
                        My experience spans frontend and backend development, including optimizing features or creating services from scratch, implementing efficient development workflows,
                        setting goals and deadlines, and ensuring high-quality code through testing and code reviews.
                    </p>
                    <p className={'text-lg'}>
                        Throughout my career, I have worked with technologies like React, Node.js, and PHP, and more recently, touching base with Cloud services and Artificial Intelligence applications.
                        Focusing in maintainability, performance, and scalability, I have been involved in all stages of the software development lifecycle,
                        from requirements gathering to deployment and maintenance.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default About;
