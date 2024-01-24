import PopularPackCard from "../Components/PopularPackCard"
import { products } from "../Constants"


const PopularPacks = () => {
    return (
        <section id="product" className="max-container max-sm:mt-12">

            <div className="flex justify-start gap-5 flex-col">
                <h2 className="text-4xl font-palanquin font-bold">Popular <span className="text-coral-red"> Fitness </span>Packs</h2>
                <p className="lg:max-w-lg mt-2 font-montserrat">Unlock peak performance with our Fitness Packs: curated for success, featuring top-notch gear, and expert guidance. Your path to a stronger, fitter you begins now!</p>
            </div>

            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 sm:gap-4 gap-14 cursor-pointer">


                {products.map((product) => (
                    <PopularPackCard key={product.name} {...product} />
                ))}
            </div>
        </section>
    )
}

export default PopularPacks