import { getId } from "../js/utils.js";
import { getDate } from "../js/data-service.js";
import { ProductTableRow } from "./ProductTableRow";

export const ProductTable = ({ data }) => {
  const tableElements = data.map((record) => {
    return (
      <div
        key={getId()}
        className="w-auto bg-white mb-5 p-8 rounded-[25px] xl:rounded-[50px] xl:p-12"
      >
        <span className="block text-[18px] font-intersemibold text-[#ff5599] xl:text-[23px]">
          {getDate(record)}
        </span>
        <table className="w-full table-auto mt-4">
          <tbody className="divide-y divide-black/10">
            <ProductTableRow data={record} />
          </tbody>
        </table>
      </div>
    );
  });
  return <>{tableElements}</>;
};
