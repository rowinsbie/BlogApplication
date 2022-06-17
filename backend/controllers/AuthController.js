const Authenticate = (req, res) => {
    res.status(200).json({
        login: "success"
    })
}

const LogOut = (req, res) => {
    res.status(200).json({
        logout: true
    })
}


module.exports = {
    Authenticate,
    LogOut
}