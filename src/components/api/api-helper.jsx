import api from "./api.jsx";
const App = {
  getApp: async () => {
    const res = await api.get("/anime")
    const resp = await res.data
    return resp
    
  },
  getIdApp: async(_id) =>{
    const res = await api.get(`/anime/${_id}`)
    const resp = await res.data
    return resp
  },
  postApp: async() =>{
  const data = {
    image:'immmmmm',
    name: 'test',
    character: 'test',
    year:  2,
    description: 'jjfjadjncldl'
  }
   const res = await api.post(`/anime`, data)
   const resp = await res.data
   console.log(resp)
   console.log(data)
   return resp
  },

  patchApp: async(_id)=>{
   const data ={
    image:'Atualize',
    year:50
   }
   const res = await api.patch(`/anime/${_id}`, data)
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
