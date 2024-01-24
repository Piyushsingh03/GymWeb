import Button from "../Components/Button"
import { trainer } from "../assets/images"


const SuperQuality = () => {
    return (
        <section id="about_us"
            className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container "
        >
            <div className="flex flex-1 flex-col">

                <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
                    Unleash your best self with Our <span className="text-coral-red">
                        Expert Gym Trainers.</span>
                </h2>

                <p className="mt-4 lg:max-w-lg info-text">Elevate Your Fitness, Ignite Your Potential, Where Excellence Meets Personal Transformation!</p>
                <div className="mt-11">

                    <Button label='Join now' />
                </div>
            </div>

            <div className="flex flex-1 justify-center items-center">
                <img
                    src={trainer}
                    alt="trainer"
                    width={570}
                    height={522}
                    className="object-contain mb-10"
                />
            </div>
        </section>
    )
}

export default SuperQuality