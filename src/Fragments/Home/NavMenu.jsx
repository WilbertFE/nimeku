const NavMenu = () => {
  return (
    <div className="w-full flex flex-wrap px-6">
      <div className="w-full flex justify-between mb-6">
        <div className="flex flex-col">
          <h3 className="text-secondary font-bold text-2xl mb-1">Anime</h3>
          <div className="w-4/5 h-[4px] bg-secondary mx-auto rounded-full"></div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-white font-bold text-2xl mb-1">Berita</h3>
          <div className="hidden w-4/5 h-[4px] bg-secondary mx-auto rounded-full"></div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-white font-bold text-2xl mb-1">Musik</h3>
          <div className="hidden w-4/5 h-[4px] bg-secondary mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
