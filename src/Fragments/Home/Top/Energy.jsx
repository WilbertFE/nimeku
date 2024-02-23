import { AiFillThunderbolt } from "react-icons/ai";

const Energy = () => {
  return (
    <div className="w-full flex mb-12 justify-end px-4">
      <div className="flex bg-third p-2 rounded-lg">
        <AiFillThunderbolt className="text-secondary w-[30px] h-[30px]" />
        <p className="text-white font-bold ml-2">0 / 2</p>
      </div>
    </div>
  );
};

export default Energy;
