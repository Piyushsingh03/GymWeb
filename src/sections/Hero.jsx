import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import { gym, trainer, treadmill, treadmill2, weightlifting } from "../assets/images"

const Hero = () => {
    return (
        <section
            id='home'
            className='w-full flex flex-1 xl:flex-row flex-col justify-start min-h-screen gap-10 max-container'
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p className="text-xl text-coral-red">Exprience the difference</p>

                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">Unleash Your </span>
                    <br />
                    <span className="text-coral-red inline-block mt-3">Potential with </span> FITFLEX
                </h1>

                <p className="text-slate-gray mt-6 mb-14 font-montserrat leading-8 text-lg sm:max-w-sm">Transform your body, empower your mind. Join FitFlex for a fitness experience like no other. From state-of-the-art equipment to expert guidance, we are here to sculpt a stronger, healthier you.</p>

                <Button label="Join Now" iconURL={arrowRight} />
            </div>


            <div className="relative flex flex-1 justify-center xl:min-h-screen max-xl:py-40  bg-cover bg-center">
                <img
                    src={weightlifting}
                    alt="img"
                    width={610}
                    height={502}
                    className="object-contain relative z-10 "
                />

            </div>
        </section>
    )
}

export default Hero