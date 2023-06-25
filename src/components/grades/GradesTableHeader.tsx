const GradesTableHeader = () => {
  return (
    <div
      className="border-t-2 border-t-yellow-10 border-b-2 border-b-secondary-20 flex 
  text-productive-03 text-dark-10  pt-[19px] pb-[19px]"
    >
      <div className="w-[167px] flex-none pl-[4px]">School Name</div>
      <div className="w-[167px] flex-none">
        <div className="w-full flex justify-center">Applicant List</div>
      </div>
      <div className="w-[533px] flex-none">
        <div className="w-full flex justify-center">Current Status</div>
        <div className="flex gap-4 justify-center items-cente mt-[4px]">
          <div className="flex items-center gap-1">
            <div className="h-[12px] w-[12px] border border-black bg-tertiary-a-10 rounded-full" />
            <div className="text-03 text-dark-20">Accepts</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-[12px] w-[12px] border border-black bg-tertiary-e-10 rounded-full" />
            <div className="text-03 text-dark-20">Pending</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-[12px] w-[12px] border border-black bg-secondary-30 rounded-full" />
            <div className="text-03 text-dark-20">Open</div>
          </div>
        </div>
      </div>
      <div className="w-[333px] flex-none">
        <div className="flex w-full justify-center">Open Seats</div>
      </div>
    </div>
  );
};
export default GradesTableHeader;
