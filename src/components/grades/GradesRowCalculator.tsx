import PencilIcon from "../icons/Pencil";

type GradesRowCalculatorProps = {
  total: number;
  valueA: number;
  valueB: number;
  valueC: number;
  percentageA: number;
  percentageB: number;
  percentageC: number;
  saveActive: boolean;
  setValueA: React.Dispatch<React.SetStateAction<number>>;
  setValueB: React.Dispatch<React.SetStateAction<number>>;
  setValueC: React.Dispatch<React.SetStateAction<number>>;
  handleInputChange: (
    inputSetter: React.Dispatch<React.SetStateAction<number>>
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const GradesRowCalculator: React.FC<GradesRowCalculatorProps> = ({
  total,
  valueA,
  valueB,
  valueC,
  percentageA,
  percentageB,
  percentageC,
  handleInputChange,
  saveActive,
  setValueA,
  setValueB,
  setValueC,
}) => {
  return (
    <div className="w-[333px] mt-[23px] pl-[10px]">
      <div className="w-[263px]">
        <div className=" w-full pl-[60px] flex justify-around">
          <div className="flex flex-col gap-[10px] w-full">
            <div className="flex justify-between items-center pr-[8px] w-full">
              <div className="text-03 text-gray-40">
                A: {percentageA.toFixed(0)}%
              </div>
              <div className="relative">
                <input
                  className=" text-productive-03 rounded-md border border-secondary-30 w-[65px]
                   px-4 py-[6px]"
                  value={valueA}
                  onChange={handleInputChange(setValueA)}
                />
                <PencilIcon className="absolute right-2 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
            <div className="flex justify-between items-center pr-[8px] w-full">
              <div className="text-03 text-gray-40">
                B: {percentageB.toFixed(0)}%
              </div>
              <div className="relative">
                <input
                  className="rounded-md border border-secondary-30 w-[65px] px-4 py-[6px]
                  text-productive-03
                  "
                  value={valueB}
                  onChange={handleInputChange(setValueB)}
                />
                <PencilIcon className="absolute right-2 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
            <div className="flex justify-between items-center pr-[8px] w-full">
              <div className="text-03 text-gray-40">
                C: {percentageC.toFixed(0)}%
              </div>
              <div className="relative">
                <input
                  className="rounded-md border border-secondary-30 w-[65px] px-4 py-[6px]
                  text-productive-03
                  "
                  value={valueC}
                  onChange={handleInputChange(setValueC)}
                />
                <PencilIcon className="absolute right-2 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>

          <div
            className="w-[54px] shrink-0 grow-0 text-dark-20
        bg-secondary-20 rounded-lg flex justify-center items-center text-productive-01"
          >
            {total}
          </div>
        </div>
        <div className="mt-[8px] pl-[47px]">
          <button
            className={` ${
              saveActive
                ? "bg-blue-10 text-white"
                : "cursor-not-allowed bg-gray-10"
            }  rounded-lg w-full text-gray-40 text-productive-02 py-[6px]`}
            disabled={!saveActive}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default GradesRowCalculator;
