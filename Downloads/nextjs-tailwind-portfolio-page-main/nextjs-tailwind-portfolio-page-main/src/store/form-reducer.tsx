const formReducer = (state: any, action: any) => {
  switch (action.type) {
    case "TITLE":
      return { ...state, title: action.payload };
    case "DESCRIPTION":
      return { ...state, description: action.payload };
    case "SOURCE_URL":
      return { ...state, sourceUrl: action.payload };
    case "LIVE_URL":
      return { ...state, LiveUrl: action.payload };
    case "RESET":
      return { ...state, ...action.payload };
    default:
      return {};
  }
};

export default formReducer;
