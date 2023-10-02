import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartitem: [],
};

const ProductSlices = createSlice({
  name: "ProductSlices",
  initialState,
  reducers: {
    addtocartredux: (state, action) => {
      state.cartitem.push({...action.payload,quantity:1})
    },
    removefromcartredux:(state,action)=>
    {
        state.cartitem=state.cartitem.filter((item)=>item.id!=action.payload.id)
    },
    updatequantity:(state, action) =>
    {
        const{id,quantity}=action.payload;
        const product=state.cartitem.find((item)=>item.id===id)
        if(product)
        {
            product.quantity=quantity;
        }
    },
   
  },
});
export const { addtocartredux,removefromcartredux ,updatequantity} = ProductSlices.actions;
export default ProductSlices.reducer;
