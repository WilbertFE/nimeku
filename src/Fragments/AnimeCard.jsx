/* eslint-disable react/prop-types */
import { IoMdPerson } from "react-icons/io";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";

const AnimeCard = (props) => {
  const { children } = props;
  return children;
};

const CardHeader = (props) => {
  const { anime, isNew } = props;
  return (
    <div className="w-full relative h-[150px] bg- rounded-md mb-2 bg-cover overflow-hidden">
      {isNew && (
        <span className="text-primary absolute left-0 top-0 bg-secondary text-xs font-bold p-1 rounded-br-lg">
          New
        </span>
      )}
      <span className="flex absolute top-0 right-0 items-center bg-primary px-2 py-1 rounded-tr-lg">
        <IoStarSharp className="text-white w-3 h-3 mr-1" />
        <p className="text-white text-xs">{anime.score}</p>
      </span>
      <h3 className="text-secondary font-bold absolute bottom-0 left-0 text-xs bg-primary px-2 py-1 rounded-bl-lg">
        {anime.episodes} Eps
      </h3>
      <img
        src={anime.images.webp.large_image_url}
        alt={anime.title}
        loading="lazy"
        className="block w-full h-full object-cover text-white text-xs text-center"
      />
    </div>
  );
};

const CardBody = (props) => {
  const { isPopular, anime } = props;
  return (
    <div className="flex gap-x-1">
      <IoMdPerson className="text-white/70 w-4 h-4 mb-1" />
      <p className="text-[11px] text-white/90 flex-1">
        {Math.round(anime.scored_by / 1000)}K
      </p>
      {isPopular && (
        <>
          <FaFireFlameCurved className="text-red-600 w-4 h-4" />
          <p className="font-bold text-white text-[12px]">Rame</p>
        </>
      )}
    </div>
  );
};

const CardFooter = (props) => {
  const { anime } = props;
  return <h3 className="text-white text-xs line-clamp-2">{anime.title}</h3>;
};

AnimeCard.Header = CardHeader;
AnimeCard.Body = CardBody;
AnimeCard.Footer = CardFooter;

export default AnimeCard;
