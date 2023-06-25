import GradesTableHeader from "./GradesTableHeader";
import ArrowUpIcon from "../icons/Arrow-up";
import GraphBar from "./GraphBar";
import { useState, useEffect } from "react";
import GradesRowCalculator from "./GradesRowCalculator";

type SetStateAction<T> = T | ((prevState: T) => T);

const GradesSection = () => {
  const [valueA, setValueA] = useState<number>(0);
  const [valueB, setValueB] = useState<number>(0);
  const [valueC, setValueC] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [percentageA, setPercentageA] = useState<number>(0);
  const [percentageB, setPercentageB] = useState<number>(0);
  const [percentageC, setPercentageC] = useState<number>(0);
  const [saveActive, setSaveActive] = useState<boolean>(false);
  useEffect(() => {
    const newTotal = valueA + valueB + valueC;
    setTotal(newTotal);
    setPercentageA((valueA / newTotal) * 100 || 0);
    setPercentageB((valueB / newTotal) * 100 || 0);
    setPercentageC((valueC / newTotal) * 100 || 0);
    setSaveActive(newTotal !== 0);
  }, [valueA, valueB, valueC]);
  /* eslint-disable */
  const handleInputChange =
    (inputSetter: React.Dispatch<SetStateAction<number>>) =>
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const val = parseInt(event.target.value, 10);
      if (isNaN(val) || val < 0) {
        inputSetter(0);
      } else {
        inputSetter(val);
      }
    };
  /* eslint-enable */
  const secondRow = () => {
    return (
      <div className="border-b-2 border-b-secondary-20">
        <h5 className="text-heading-5 text-dark-10 pt-[29px] pb-[13px]">
          Grade 8
        </h5>
      </div>
    );
  };
  return (
    <>
      <div className="flex justify-between items-center text-dark-10 pb-[48px]">
        <h3 className="text-lg lg:text-heading-3">Grades</h3>

        <p className="text-03">Last Updated 1/24/22 at 10:31 am</p>
      </div>
      <GradesTableHeader />
      {secondRow()}

      <div className="flex items-center">
        <h6 className="w-[167px] text-heading-6 text-dark-10 pl-[4px]">
          Default
        </h6>
        <div className="w-[167px]">
          <div className="text-dark-20 text-body-01 ">
            <div className="flex justify-center gap-2">
              <span>809</span> <ArrowUpIcon />
            </div>
          </div>
        </div>
        <div className="w-[533px]">
          <GraphBar
            valueA={valueA}
            valueB={valueB}
            valueC={valueC}
            percentageA={percentageA}
            percentageB={percentageB}
            percentageC={percentageC}
            total={total}
          />
        </div>
        <GradesRowCalculator
          valueA={valueA}
          valueB={valueB}
          valueC={valueC}
          percentageA={percentageA}
          percentageB={percentageB}
          percentageC={percentageC}
          total={total}
          handleInputChange={handleInputChange}
          saveActive={saveActive}
          setValueA={setValueA}
          setValueB={setValueB}
          setValueC={setValueC}
        />
      </div>
      <div className="border-t-2 border-t-secondary-20 mt-[22px] flex justify-end">
        <span className="text-black text-productive-01 pt-[16px]">
          Grade 8 Total Open Seats: {total}
        </span>
      </div>
    </>
  );
};

export default GradesSection;
