

const ServiceCard = ({ label, subtext }) => {
    return (
        <div className="flex-1 sm:w-[350px] sm:min-w-[350px] shadow-3xl px-10 py-16">
            <h3 className="mt-5 leading-normal font-palanquin text-3xl font-bold">{label}
            </h3>
            <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
        </div>
    )
}

export default ServiceCard