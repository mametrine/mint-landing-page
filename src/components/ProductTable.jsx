export const ProductTable = ({ data }) => {
  let id = 0;
  const tableElements = data.map((record) => {
    return (
      <div
        key={(id += 1)}
        className="w-auto bg-white mb-5 p-8 rounded-[25px] xl:rounded-[50px] xl:p-12"
      >
        <span className="block text-[18px] font-intersemibold text-[#ff5599] xl:text-[23px]">
          {record["date"]}
        </span>
        <table className="w-full table-auto mt-4">
          <tbody className="divide-y divide-black/10">
            {createRow(record, "type")}
          </tbody>
        </table>
      </div>
    );
  });
  return <>{tableElements}</>;
};

const createRow = (tableRecord, fieldName) => {
  let id = 0;
  let rowElements = null;
  if (tableRecord[fieldName] && typeof Array) {
    rowElements = tableRecord[fieldName].map((fieldValue, index) => {
      return (
        <tr key={(id += 1)} className="text-[18px] xl:text-[23px]">
          <td className="py-0.5">{fieldValue}</td>
          <td className="py-0.5 text-right">&pound;{tableRecord["price"][index]}</td>
        </tr>
      );
    });
  }
  return rowElements;
};
