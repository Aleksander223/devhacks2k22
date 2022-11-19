import { useEffect, useState } from "react";

const UserProfile = () => {
    return (
        <>
        <div className="grid grid-cols-5 gap-4">
  
  <div className="col-span-2 bg-red-500 col-start-2 col-end-4">
        col mare stg
        <div class="grid grid-rows-3 grid-flow-col gap-4">
  <div class="col-span-2 ...">2</div>
  <div class="row-span-2 col-span-2 ...">3</div>
</div>
  </div>
  <div className="bg-blue-500">
  col mare dr
  </div>
</div>
        </>
    );
};

export default UserProfile;
