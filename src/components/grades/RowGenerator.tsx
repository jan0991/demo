import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import PencilIcon from "../icons/Pencil";
const ResponsiveBar = dynamic(
  () => import("@nivo/bar").then((m) => m.ResponsiveBar),
  { ssr: false }
);

const colorMapping: { [key: string]: string } = {
  accepts: "#66BB6A",
  pending: "#FF9100",
  open: "#C6D0DB",
};

const RowGenerator = () => {
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

  const handleInputChange = (inputSetter) => (event) => {
    const val = parseInt(event.target.value, 10);
    if (isNaN(val) || val < 0) {
      inputSetter(0);
    } else {
      inputSetter(val);
    }
  };

  return (
    <tr>
      <td className="w-[167px]">
        <h6 className="text-heading-6">Default</h6>
      </td>
      <td className="w-[157px]">809</td>
      <td className="w-[534px] ">
        <div className="h-8">
          <ResponsiveBar
            data={[{ accepts: valueA, pending: valueB, open: valueC }]}
            keys={["accepts", "pending", "open"]}
            padding={0.3}
            layout="horizontal"
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={(bar) => colorMapping[bar.id as string]}
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={null}
            labelSkipWidth={12}
            labelSkipHeight={12}
            enableLabel={false} // hide labels on the bars
            tooltip={() => null} // hide tooltips on hover
          />
          <div className="flex gap-6 justify-center items-center">
            <div className="flex items-center gap-2">
              <div className="h-[12px] w-[12px] border border-black bg-tertiary-a-10 rounded-full" />
              <div className="text-03 text-dark-10">
                {valueA} accepts <br /> {percentageA.toFixed(0)}%
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-[12px] w-[12px] border border-black bg-tertiary-e-10 rounded-full" />
              <div className="text-03 text-dark-10">
                {valueB} pending <br /> {percentageB.toFixed(0)}%
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-[12px] w-[12px] border border-black bg-secondary-30 rounded-full" />
              <div className="text-03 text-dark-10">
                {valueC} open <br /> {percentageC.toFixed(0)}%
              </div>
            </div>
          </div>
        </div>
      </td>
      <td className="pl-[29px] w-[270px] pt-[24px]">
        <div>
          <div className="flex justify-around">
            <div className="w-auto flex gap-[10px] flex-row pl-8 text-03 text-dark-20">
              <div className="flex flex-col gap-[25px]">
                <div>A: {percentageA.toFixed(0)}%</div>
                <div>B: {percentageB.toFixed(0)}%</div>
                <div>C: {percentageC.toFixed(0)}%</div>
              </div>

              <div className="flex flex-col gap-[10px]">
                <div className="relative">
                  <input
                    className="rounded-md border border-secondary-30 w-[65px] px-4 py-1"
                    value={valueA}
                    onChange={handleInputChange(setValueA)}
                  />
                  <PencilIcon className="absolute right-2 top-1/2 transform -translate-y-1/2" />
                </div>

                <div className="relative">
                  <input
                    className="rounded-md border border-secondary-30 w-[65px] px-4 py-1"
                    value={valueB}
                    onChange={handleInputChange(setValueB)}
                  />
                  <PencilIcon className="absolute right-2 top-1/2 transform -translate-y-1/2" />
                </div>

                <div className="relative">
                  <input
                    className="rounded-md border border-secondary-30 w-[65px] px-4 py-1"
                    value={valueC}
                    onChange={handleInputChange(setValueC)}
                  />
                  <PencilIcon className="absolute right-2 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>
            </div>

            <div
              className="w-[54px]
        bg-secondary-20 rounded-lg flex justify-center items-center text-productive-01"
            >
              {total}
            </div>
          </div>
        </div>
        <div className="py-[8px]">
          <button
            className={` ${
              saveActive ? "bg-gray-200" : "cursor-not-allowed bg-gray-10"
            }  rounded-lg w-full text-gray-40 text-productive-02 py-[6px]`}
            disabled={!saveActive}
          >
            Save
          </button>
        </div>
      </td>
    </tr>
  );
};

export default RowGenerator;
