import RowGenerator from "./RowGenerator";

const GradesTable = () => {
  return (
    <table className="w-full">
      <thead className="border-t-2 border-t-yellow-10 border-b-2 border-b-secondary-20">
        <tr className="text-productive-03">
          <th className="text-left py-[16px]">
            <div style={{ height: "50px" }}>School Name</div>
          </th>
          <th className="text-left py-[16px]">
            <div style={{ height: "50px" }}>Applicant List</div>
          </th>
          <th className="py-[16px]">
            <div style={{ height: "50px" }}>
              Current Status
              <div className="flex gap-6 justify-center items-center">
                <div className="flex items-center gap-1">
                  <div className="h-[12px] w-[12px] border border-black bg-tertiary-a-10 rounded-full" />
                  <div className="text-03 text-dark-10">accepts</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-[12px] w-[12px] border border-black bg-tertiary-e-10 rounded-full" />
                  <div className="text-03 text-dark-10">pending</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-[12px] w-[12px] border border-black bg-secondary-30 rounded-full" />
                  <div className="text-03 text-dark-10">open</div>
                </div>
              </div>
            </div>
          </th>
          <th className="py-[16px] pl-[29px]">
            <div style={{ height: "50px" }}>Open Seats</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b-2 border-b-secondary-20">
          <div className="text-heading-5 text-dark-10 pt-[32px] pb-[16px]">
            Grade 8
          </div>
        </tr>
        <RowGenerator />
      </tbody>
    </table>
  );
};

export default GradesTable;
