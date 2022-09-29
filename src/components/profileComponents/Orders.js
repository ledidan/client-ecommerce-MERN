import React from "react";

export default function Orders() {
  return (
    <div className="d-flex justify-content-center align-item-center flex-column">
      {/* <div className="col-12 alert alert-info text-center mt-3">
            No Orders
            <Link className="btn btn-success mx-2 px-3 py-2" to="/" style={{fontSize: "12px"}}>
                Start Shopping
            </Link>
        </div> */}
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Date</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr className={"alert-success"}>
              <td>
                <a href={"/"} className="link">
                  1
                </a>
              </td>
              <td>Paid</td>
              <td>Oct 22 2022</td>
              <td>$234</td>
            </tr>
            {/* Canceled */}
            <tr className={"alert-danger"}>
              <td>
                <a href={"/"} className="link">
                  2
                </a>
              </td>
              <td>Not Paid</td>
              <td>Oct 22 2022</td>
              <td>$234</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
