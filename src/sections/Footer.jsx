
import { footerLinks, socialMedia } from '../Constants'
import { copyrightSign } from '../assets/icons'
import { footerlogo } from '../assets/images'

const Footer = () => {
    return (
        <footer className='max-container'>
            <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
                <div className='flex flex-col items-start'>
                    <a href='/'>
                        <img
                            src={footerlogo}
                            width={140}
                            height={30}

                        />
                    </a>
                    <p className='text-base mt-6 font-montserrat leading-7 text-white-400 sm:max-w-sm'>Sweat, Smile, Repeat: The Gym is Where We Sculpt Dreams into Reality.</p>

                    <div className="flex items-center gap-5 mt-8">
                        {socialMedia.map((icon) => (
                            <div key={icon.alt} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                                <img
                                    src={icon.src}
                                    alt={icon.alt}
                                    width={24}
                                    height={24}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-1 justify-between flex-wrap lg:gap-10 gap-20">
                    {footerLinks.map((item) => (
                        <div key={item}>
                            <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6 ">{item.title}</h4>
                            <ul>
                                {item.links.map((link) => (
                                    <li key={link.name}
                                        className="mt-3 text-white-400 leading-normal text-base font-montserrat hover:text-slate-gray cursor-pointer "
                                    >
                                        <a>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>


            <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
                <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
                    <img
                        src={copyrightSign}
                        alt='copyright sign'
                        width={20}
                        height={20}
                        className='rounded-full m-0'
                    />
                    <p>Copyright. All rights reserved.</p>
                </div>
                <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
            </div>
        </footer>
    )
}

export default Footer