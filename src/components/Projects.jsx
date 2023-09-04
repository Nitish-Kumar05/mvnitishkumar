import WorkImg from '../assets/projects/workimg.jpeg'
import BlogSynth from '../assets/projects/BlogSynth.png'
import tvpedia from '../assets/projects/tvpedia.png'
import minesweeper from '../assets/projects/minesweeper.png'

const Projects = () => {
    return (
        <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#17181d]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#e09145]'>
                        Work
                    </p>
                    <p className='py-6'>
                        // Check out some of my recent works
                    </p>
                </div>

                {/* GRID CONTAINER */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* CARD CONTAINER */}
                    <div style={{ backgroundImage: `url(${BlogSynth})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* HOVER EFFECTS AND PROJECT 1 */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                AI summarizer
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://blog-synth-ai-summarizer.vercel.app/" target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/Nitish-Kumar05/BlogSynth-AI-summarizer.git" target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${tvpedia})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* HOVER EFFECTS AND PROJECT 2 */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                TV-shows search app
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://tv-pedia.vercel.app/" target='_blank' >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/Nitish-Kumar05/cinema-pedia.git" target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${minesweeper})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* HOVER EFFECTS */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Minesweeper - vanilla JS
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://minesweeper-olive-psi.vercel.app/" target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/Nitish-Kumar05/minesweeper.git" target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects