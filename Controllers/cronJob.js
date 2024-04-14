exports.cronJob = async(req,res) => {
    return res.status(200).json({
        sucsess  :true,
        message : 'server is working fine '
    })
}