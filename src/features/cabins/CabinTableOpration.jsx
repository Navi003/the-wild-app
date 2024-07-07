import React from "react";
// import TableOperations from "../..ui/TableOperations";
import Filter from "../../ui/Filter";
function CabinTableOpration() {
  return (
    <>
      <Filter
        filterField="discount"
        options={[
          {
            value: "all",
            label: "All",
          },
          {
            value: "no-discount",
            label: "No Discount",
          },
          {
            value: "with-discount",
            label: "With Discount",
          },
        ]}
      />
    </>
  );
}

export default CabinTableOpration;
