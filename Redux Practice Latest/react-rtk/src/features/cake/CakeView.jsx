import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered,restocked } from "./cakeSlice";
export const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>No of cakes : {numOfCakes}</h2>
      <button onClick={()=>dispatch(ordered())}>Order cakes </button>
      <button onClick={()=>dispatch(restocked(3))}>Restock cakes </button>
    </div>
  );
};
