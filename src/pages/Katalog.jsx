import Github from "../Fragments/Github";
import BottomBar from "../Fragments/Home/Main/BottomBar";

const Katalog = () => {
  return (
    <section id="katalog" className="bg-primary min-h-screen">
      <div className="container p-4">
        <div className="flex flex-wrap">
          <div className="w-full flex justify-center">
            <span className="text-white text-xl mr-2 block relative -bottom-[3px]">
              <ion-icon name="list-outline"></ion-icon>
            </span>
            <h1 className="text-white text-xl">Katalog Anime</h1>
          </div>
          <div className="w-full flex text-white fixed top-1/2 -translate-y-1/2 justify-center right-[2px]">
            Halaman ini akan segera hadir
          </div>
          <BottomBar onActive={2} />
          <Github />
        </div>
      </div>
    </section>
  );
};
export default Katalog;
