const State = {
  products: [],

  user: "",
  login: "",
};


export default function ProductsReducer(state = State, action) {
  if (action.type === "ADD_PRODUCT") {
    const copyState = { ...state };

    copyState.products.push({ ...action.payload.product, id: Date.now() });

    return { ...copyState };
  }

  if (action.type === "CLEAR_LIST") {
    return {
      ...state,
      products: [],
    };
  }

  if (action.type === "CLEAR_ELEMENT") {
    const updatedElements = state.products.filter((element) => element.id !== action.payload);
    console.log(updatedElements)
    return {
      ...state,
      products: updatedElements,
    };
  }


  return state;
}
