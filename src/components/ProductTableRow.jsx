import { getId } from "../js/utils.js";
import { getTicketType, getPrice } from "../js/data-service.js";

export const ProductTableRow = ({ data }) => {
  const rowElements = getTicketType(data).map((type, index) => (
    <tr key={getId()} className="text-[18px] xl:text-[23px]">
      <td className="py-0.5">{type}</td>
      <td className="py-0.5 text-right">&pound;{getPrice(data, index)}</td>
    </tr>
  ));
  return <>{rowElements}</>;
};
