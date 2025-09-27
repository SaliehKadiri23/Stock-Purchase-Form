import { useEffect, useState } from "react"
import { MdCancelPresentation } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";

export default function StockPurchaseTable({ stocks, stocksChange = -1, deleteStock }) {
  let [stockTotal, setStockTotal] = useState(0);

  console.log(stocksChange);

  useEffect(() => {
    setStockTotal(
      stocks.reduce(
        (total, stock) =>
          total + Number(stock.quantity) * Number(stock.sellingPrice),
        0
      )
    );
  }, [stocksChange]);

  return (
    <>
      {stocks.length > 0 && (
        <>
          <p className="text-end px-5 fw-bold">Total : ${stockTotal}</p>
          <div className="container mb-4">
            <div className="container-fluid border rounded p-0 m-0 ">
              <table className="border text-center table table-bordered table-striped m-0 ">
                {/* Table Head */}
                <thead className="table-primary">
                  <tr>
                    <th>#</th>
                    <th>Item Name</th>
                    <th>QTY</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {stocks.map((stock, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{stock.itemName}</td>
                      <td>{stock.quantity}</td>
                      <td>{stock.sellingPrice}</td>
                      <td>{stock.quantity * stock.sellingPrice}</td>
                      <td onClick={() => deleteStock(index)}>
                        <MdCancelPresentation size={"1.4em"} color="red" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="d-flex justify-content-center p-3 mt-4">
            <button className="btn btn-primary px-4 py-2 transition-transform duration-300 hover:scale-110">
              <TiShoppingCart style={{ marginRight: "0.6em" }} size="1.5em" />
              Submit {stocks.length} Items
            </button>
          </div>
        </>
      )}
    </>
  );
}
