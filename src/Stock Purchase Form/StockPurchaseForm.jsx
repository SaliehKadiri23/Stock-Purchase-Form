import { TiShoppingCart } from "react-icons/ti";
import StockPurchaseTable from "./Stock Purchase Table/StockPurchaseTable";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { object, string, number, date } from 'yup';

// import {useFormik} from "formik"

export default function StockPurchaseForm() {
    const [stocks, setStocks] = useState([]);

    let [formData, setFormData] = useState({
      supplierName: "",
      itemCategory: "",
      itemName: "",
      uom: "",
      barCodeNumber: "",
      costPrice: "",
      quantity: "",
      sellingPrice: "",
      reorderLevel: "0",
      expiryDate: "",
      mop: "",
      receivingStore: "",
      truckNumber: "",
      waybillNumber: "",
      otherDetails: "",
    });


    let validateFormSchema = object({
      supplierName: string().required("Enter the Supplier's name"),
      itemCategory: string().required("Enter the Item's category"),
      itemName: string().required("Enter the Item's category"),
      uom: string().required("Enter the Item's Unit Of Measurement"),
      barCodeNumber: number()
        .required("Enter the Item's Bar Code Number")
        .positive()
        .integer(),
      costPrice: number()
        .required("Enter the Item's Cost price")
        .positive()
        .integer(),
      quantity: number()
        .required("Enter the Item's Quantity ")
        .positive()
        .integer(),
      sellingPrice: number()
        .required("Enter the Item's Selling Price")
        .positive()
        .integer(),
      reorderLevel: number()
        .required("Enter the Reorder level")
        .positive()
        .integer(),
      expiryDate: date().required("Enter the Item's Expiry date"),
      mop: string()
        .oneOf(["Cash", "Bank Transfer", "Pay On Delivery"])
        .required("Select a mode of payment"),
      receivingStore: string()
        .oneOf(["Brainstorm Innovation Hub", "Halal Stores", "Vee Enterprises"])
        .required("Select the Receiving store"),
      truckNumber: number()
        .required("Enter the Truck number")
        .positive()
        .integer(),
      waybillNumber: number()
        .required("Enter the Waybill number")
        .positive()
        .integer(),
      otherDetails: string(),
    });

    function handleChange(evt) {
      const {name, value} = evt.target;
      setFormData(prevFormData => ({...prevFormData, [name]: value}));
    }

    


    // Pop Up Toast Function
    const notify = () =>
      toast.success("Item(s) Added Successfully!!! ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

   
    // Add New Stocks
    async function handelSubmit() {

      try{
          await validateFormSchema.validate(formData, {abortEarly: false})
      } catch (error) {
        console.log(error);
      }

      setStocks(previousStocks => [...previousStocks, formData])
      setFormData({
        supplierName: "",
        itemCategory: "",
        itemName: "",
        uom: "",
        barCodeNumber: "",
        costPrice: "",
        quantity: "",
        sellingPrice: "",
        reorderLevel: "0",
        expiryDate: "",
        mop: "",
        receivingStore: "",
        truckNumber: "",
        waybillNumber: "",
        otherDetails: "",
      });
      // console.log(newStocks);
      notify()
    }


    // Delete A Stock
    function deleteStock (idx) {
        setStocks(
            stocks.filter((stock, index) => idx !== index)
        )
    }

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <div style={{maxWidth: "1100px"}}>
      <div className="card m-3">
        <div className="card-header pt-3 text-white bg-primary d-flex justify-content-between align-items-center">
          <p className="text-start mt-1 pl-3 ">&lt; Back</p>
          <h3 className="text-center ">STOCK PURCHASE</h3>
          <span></span>
        </div>

        <div className="card-body">
          <form action={handelSubmit}>
            {/* First Row */}
            <div className="row mb-3">
              {/* Supplier Name */}
              <div className="col">
                <label htmlFor="supplierName" className="form-label fw-bold">
                  Supplier Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="supplierName"
                  id="supplierName"
                  placeholder="Salieh Kadiri"
                  value={formData.supplierName}
                  onChange={handleChange}
                />
              </div>

              {/* Item Category */}
              <div className="col">
                <label htmlFor="itemCategory" className="form-label fw-bold">
                  Item Category
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="itemCategory"
                  id="itemCategory"
                  placeholder="Comodities"
                  value={formData.itemCategory}
                  onChange={handleChange}
                />
              </div>

              {/* Item Name */}
              <div className="col">
                <label htmlFor="itemName" className="form-label fw-bold">
                  Item Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="itemName"
                  id="itemName"
                  placeholder="Search items by name"
                  value={formData.itemName}
                  onChange={handleChange}

                />
              </div>

              {/* Unit Of Measurement */}
              <div className="col">
                <label htmlFor="uom" className="form-label fw-bold">
                  Unit Of Measurement
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="uom"
                  id="uom"
                  placeholder="Unit"
                  value={formData.uom}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="row mb-3">
              {/* Bar Code Number */}
              <div className="col">
                <label htmlFor="barCodeNumber" className="form-label fw-bold">
                  Bar Code Number
                </label>
                <input
                  className="form-control"
                  type="number"
                  name="barCodeNumber"
                  id="barCodeNumber"
                  value={formData.barCodeNumber}
                  onChange={handleChange}
                />
              </div>

              {/* Cost Price */}
              <div className="col">
                <label htmlFor="costPrice" className="form-label fw-bold">
                  Cost Price
                </label>
                <input
                  className="form-control"
                  type="number"
                  name="costPrice"
                  id="costPrice"
                  value={formData.costPrice}
                  onChange={handleChange}
                />
              </div>

              {/* Quantity */}
              <div className="col">
                <label htmlFor="itemName" className="form-label fw-bold">
                  Quantity
                </label>
                <input
                  className="form-control"
                  type="number"
                  name="quantity"
                  id="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </div>

              {/* Selling Price */}
              <div className="col">
                <label htmlFor="uom" className="form-label fw-bold">
                  Selling Price
                </label>
                <input
                  className="form-control"
                  type="number"
                  name="sellingPrice"
                  id="sellingPrice"
                  value={formData.sellingPrice}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Third Row */}
            <div className="row mb-3">
              {/* Reorder Level */}
              <div className="col">
                <label htmlFor="supplierName" className="form-label fw-bold">
                  Reorder Level
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="reorderLevel"
                  id="reorderLevel"
                  value={formData.reorderLevel}
                  onChange={handleChange}
                />
              </div>

              {/* Expiry Date */}
              <div className="col">
                <label htmlFor="itemCategory" className="form-label fw-bold">
                  Expiry Date
                </label>
                <input
                  className="form-control"
                  type="date"
                  name="expiryDate"
                  id="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                />
              </div>

              {/* Mode Of Payment */}
              <div className="col">
                <label htmlFor="itemName" className="form-label fw-bold">
                  Mode Of Payment
                </label>
                <select
                  name="mop"
                  id="mop"
                  className="form-select"
                  value={formData.mop}
                  onChange={handleChange}
                >
                  <option value="" defaultChecked>
                    -- Select --
                  </option>
                  <option value="Cash">Cash</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="Pay On Delivery">Pay On Delivery</option>
                </select>
              </div>

              {/* Receiving Store */}
              <div className="col">
                <label htmlFor="itemName" className="form-label fw-bold">
                  Receiving Store
                </label>
                <select
                  name="receivingStore"
                  id="receivingStore"
                  className="form-select"
                  value={formData.receivingStore}
                  onChange={handleChange}
                >
                  <option value="" defaultChecked>
                    -- Select --
                  </option>
                  <option value="Brainstorm Innovation Hub">
                    Brainstorm Innovation Hub
                  </option>
                  <option value="Halal Stores">Halal Stores</option>
                  <option value="Vee Enterprises">Vee Enterprises</option>
                </select>
              </div>
            </div>

            {/* Fourth Row */}
            <div className="row mb-3">
              {/* Truck Number */}
              <div className="col">
                <label htmlFor="barCodeNumber" className="form-label fw-bold">
                  Truck No.
                </label>
                <input
                  className="form-control"
                  type="number"
                  name="truckNumber"
                  id="truckNumber"
                  value={formData.truckNumber}
                  onChange={handleChange}
                />
              </div>

              {/* Waybill Number */}
              <div className="col">
                <label htmlFor="costPrice" className="form-label fw-bold">
                  Waybill No.
                </label>
                <input
                  className="form-control"
                  type="number"
                  name="waybillNumber"
                  id="waybillNumber"
                  value={formData.waybillNumber}
                  onChange={handleChange}
                />
              </div>

              {/* Other Details */}
              <div className="col">
                <label htmlFor="itemName" className="form-label fw-bold">
                  Other Details
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="otherDetails"
                  id="otherDetails"
                  placeholder="Additional information..."
                  value={formData.otherDetails}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Add To Cart Button */}
            <div className="d-flex justify-content-center p-3 mt-4">
              <button className="btn btn-primary px-4 py-2 ">
                <TiShoppingCart style={{ marginRight: "0.6em" }} size="1.5em" />
                Add To Cart
              </button>
            </div>
          </form>
        </div>

        <StockPurchaseTable
          stocks={stocks}
          stocksChange={stocks.length}
          deleteStock={deleteStock}
        />
      </div>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
    </div>
  );
}
