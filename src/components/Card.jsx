const Card = ({ title, description, imageUrl, url }) => {
    return (
      <div className="bg-[#04071D] my-5 lg:w-3/12 sm:w-full border border-[#1E2034] rounded-lg shadow-lg p-6 ml-4 ">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
        )}
        <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-gray-400">{description}</p>
        <button className="btn text-blue-400 border-white"><a href={url}>Read More</a></button>
      </div>
    );
  };
  
  export default Card;
  