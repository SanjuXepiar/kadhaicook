function reducer(state, action) {
  const { type, payload } = action;
  if (type === "LOADING_VIDEOS") {
    return { ...state, filtered_Videos: payload, all_Videos: payload };
  }
  if (type === "FILTER_PRODUCTS") {
    const { ...state };
  }
  if(type===UPDATE_FILTERS){
    return{
        
    }
  }
}
export default reducer;
