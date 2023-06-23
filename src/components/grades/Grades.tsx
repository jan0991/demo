import GradesTable from "./GradesTable";
const GradesSection = () => {
  return (
    <>
      <div className="flex justify-between items-center text-dark-10 pb-[48px]">
        <h3 className="text-lg lg:text-heading-3">Grades</h3>

        <p className="text-03">Last Updated 1/24/22 at 10:31 am</p>
      </div>
      <GradesTable />
    </>
  );
};

export default GradesSection;
