import { star } from "../assets/icons"


const PopularPackCard = ({ imgURL, name, slogan, price }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
                src={imgURL}
                className="w-full"
                alt={name}

            />
            <div className="mt-8 flex justify-start gap-2.5">
                <img
                    src={star} alt="rating"
                    width={24}
                    height={24}
                    className="ml-5"
                />
                <p className="font-montserrat text-xl leading-normal text-slate-gray ">(4.5)</p>
            </div>
            <h3 className="mt-2 leading-normal text-2xl font-semibold font-palanquin text-coral-red mb-4 ml-5">{name}</h3>
            <p className="font-montserrat leading-normal text-xl text-slate-gray mb-5 ml-5">{slogan}</p>
            <p className="font-montserrat leading-normal text-2xl ml-5 mb-5">{price}</p>
        </div>
    )
}

export default PopularPackCard