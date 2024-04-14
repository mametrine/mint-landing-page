import { getTicketType, getTier, getPrice } from "../js/data-service.js";

export const ProductTableRow = ({ data }) => {
  const ticketType = getTicketType(data);
  const rowElements = ticketType.map((row) => (
    <tr key={row.id} className="text-[18px] xl:text-[23px]">
      <td className="py-0.5">{getTier(row)}</td>
      <td className="py-0.5 text-right">{getPrice(row)}</td>
    </tr>
  ));
  return <>{rowElements}</>;
};
