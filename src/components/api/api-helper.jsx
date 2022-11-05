import api from "./api.jsx";

const App = {
  getApp: async () => {
    const res = await api.get("/anime")
    const resp = await res.data
    return resp
    
  },

  deleteApp: async(_id) =>{
    const res = await api.delete(`/anime/${_id}`)
    const resp = await res.data
    return resp
  } 
};

export default App;
