import api from "./api.jsx";

const App = {
  getApp: async () => {
    const res = await api.get("/anime")
    const resp = await res.data
    console.log(resp)
    return resp
    
  },
};

export default App;
