const genres = [
  "Movie",
  "Action",
  "Adventure",
  "Comedy",
  "Demons",
  "Drama",
  "Ec*hi",
  "Fantasy",
  "Game",
  "Harem",
  "Historical",
  "Horror",
  "Josei",
  "Magic",
  "Martial Arts",
  "Mecha",
  "Military",
  "Music",
  "Mystery",
  "Psychological",
  "Parody",
  "Police",
  "Romance",
  "Samurai",
  "School",
  "Sci-Fi",
  "Seinen",
  "Shoujo Ai",
  "Shounen",
  "Slice of Life",
  "Sports",
  "Space",
  "Super Power",
  "Supernatural",
  "Thriller",
  "Vampire",
];

const Genres = () => {
  return (
    <div className="w-full flex flex-wrap">
      <h3 className="w-full text-white font-bold text-2xl mb-4 px-6">Genre</h3>
      <div className="w-full flex gap-x-4 hide-scrollbar overflow-auto px-6">
        {genres.map((genre) => (
          <h3
            key={genre}
            className="text-secondary font-bold bg-third py-3 px-4 min-w-max rounded-lg"
          >
            {genre}
          </h3>
        ))}
      </div>
    </div>
  );
};
export default Genres;
