import RowGenerator from "./RowGenerator";

const GradesTable = () => {
  return (
    <table className="w-full">
      <thead className="border-t-2 border-t-yellow-10 border-b-2 border-b-secondary-20">
        <tr className="text-productive-03 text-dark-10">
          <th className="text-left pl-[6px] pt-[18px] pb-[10px]">
            <div class="h-[50px] w-[" style={{ height: "50px" }}>School Name</div>
          </th>
          <th className="text-left pt-[18px] pb-[10px]">
            <div style={{ height: "50px" }}>Applicant List</div>
          </th>
          <th className="pt-[18px]">
            <div style={{ height: "57px" }} >
              Current Status
              <div className="flex gap-4 justify-center items-cente mt-[6px]">
                <div className="flex items-center gap-1">
                  <div className="h-[12px] w-[12px] border border-black bg-tertiary-a-10 rounded-full" />
                  <div className="text-03 text-dark-10">Accepts</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-[12px] w-[12px] border border-black bg-tertiary-e-10 rounded-full" />
                  <div className="text-03 text-dark-10">Pending</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-[12px] w-[12px] border border-black bg-secondary-30 rounded-full" />
                  <div className="text-03 text-dark-10">Open</div>
                </div>
              </div>
            </div>
          </th>
          <th className="pt-[18px] pb-[10px] pl-[29px]">
            <div style={{ height: "50px" }}>Open Seats</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b-2 border-b-secondary-20">
          <div className="text-heading-5 text-dark-10 pt-[28px] pb-[16px]">
            Grade 8
          </div>
        </tr>
        <RowGenerator />
      </tbody>
    </table>
  );
};

export default GradesTable;
