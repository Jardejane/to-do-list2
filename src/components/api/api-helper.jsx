import api from './api.jsx'

const App = {

   getApp: async() =>{
       api.get("/anime")
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export default App