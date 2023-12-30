import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id,img,price,title} = service
    console.log(service);
    return (
        <div className="">
        <div 
          className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
            <img className="w-full h-60"
              src={img}
              alt="ui/ux review check"
            />
          </div>
          <div className="p-6">
            <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {title}
            </h4>
            <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
              {price}
            </p>
          </div>
          <div className="mb-10 mx-auto">
            <Link to={`/services/${_id}`}><button className="text-white bg-red-400 rounded-lg px-7 py-4">See Details</button></Link>
          </div>
  
        </div>
      </div>
    );
};

export default ServiceCard;