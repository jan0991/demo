import dynamic from "next/dynamic";
const ResponsiveBar = dynamic(
  () => import("@nivo/bar").then((m) => m.ResponsiveBar),
  { ssr: false }
);

const colorMapping: { [key: string]: string } = {
  accepts: "#66BB6A",
  pending: "#FF9100",
  open: "#C6D0DB",
};
type GraphBarProps = {
  total: number;
  valueA: number;
  valueB: number;
  valueC: number;
  percentageA: number;
  percentageB: number;
  percentageC: number;
};

const GraphBar: React.FC<GraphBarProps> = ({
  total,
  valueA,
  valueB,
  valueC,
  percentageA,
  percentageB,
  percentageC,
}) => {
  return (
    <div className="flex flex-col px-2">
      {total > 0 && (
        <div className="h-[24px] w-full">
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
        </div>
      )}
      {total > 0 && (
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
      )}
    </div>
  );
};

export default GraphBar;
