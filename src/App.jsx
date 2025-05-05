import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TiShoppingCart } from "react-icons/ti";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card m-3">
        <div className="card-header pt-3 text-white bg-primary d-flex justify-content-between align-items-center">
          <p className="text-start mt-1 pl-3 ">&lt; Back</p>
          <h3 className="text-center ">STOCK PURCHASE</h3>
          <span></span>
        </div>

        <div className="card-body">
          <form action="">
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
                  required
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
                  required
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
                  required
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
                  value={0}
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
                />
              </div>

              {/* Mode Of Payment */}
              <div className="col">
                <label htmlFor="itemName" className="form-label fw-bold">
                  Mode Of Payment
                </label>
                <select name="mop" id="mop" className="form-select">
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
                  required
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
      </div>
    </>
  );
}

export default App
