const {kisahService} = require("../services")

const AllkisahController=(req,res)=>{
    const allKisah = kisahService.getSemuaKisah()
    return res.send(allKisah)
}
const kisahByIdController=(req,res)=>{
    const number = req.params.id
    const allKisah = kisahService.getKisahById(number)
    return res.send(allKisah)
}


module.exports = {AllkisahController,kisahByIdController}