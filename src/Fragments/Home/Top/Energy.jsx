import { AiFillThunderbolt } from "react-icons/ai";

const Energy = () => {
  return (
    <div className="w-full flex mb-12 justify-end">
      <div className="flex bg-third p-3 rounded-lg">
        <AiFillThunderbolt className="text-secondary text-2xl" />
        <p className="text-white font-bold ml-2">0 / 2</p>
      </div>
    </div>
  );
};

export default Energy;
