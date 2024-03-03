import Github from "../Fragments/Github";
import BottomBar from "../Fragments/Home/Main/BottomBar";

const Date = () => {
  return (
    <section id="date" className="bg-primary min-h-screen">
      <div className="container p-4">
        <div className="flex flex-wrap">
          <div className="w-full flex justify-center">
            <span className="text-white text-xl mr-2 block relative -bottom-[3px]">
              <ion-icon name="calendar-outline"></ion-icon>
            </span>
            <h1 className="text-white text-xl">Jadwal Tayang</h1>
          </div>
          <div className="w-full flex text-white fixed top-1/2 -translate-y-1/2 justify-center right-[2px]">
            Halaman ini akan segera hadir
          </div>
          <BottomBar onActive={1} />
          <Github />
        </div>
      </div>
    </section>
  );
};
export default Date;
