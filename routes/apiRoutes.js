const User = require("./../models/Admin")

module.exports = function (app) {
    app.get("/test", (req, res) => {
        console.log("Hi")
        res.json({
            text: "fafdjsk"

        })
    })
    app.post("/newAdmin", (req, res) => {
        const newUser = {
            adminName:"Robert",
            adminEmail:"test.com",
            adminPassword:"1221"
        }
        User.create(newUser).then(result => {
            res.json(result)
        })
    })
    app.post("/adminLogin", (req, res) => {
        const userInfo = {
            adminName:"Robert",
            adminEmail:"test.com",
            adminPassword:"1221"
        }
        User.find({adminEmail:userInfo.adminEmail,adminPassword:userInfo.adminPassword}).then(result => {
            if (result.length > 0){
                res.status(200).json(result)
            } else {
                res.status(401).json({errorMessage:"Username or password are incorrect."})
            }
            
        })
    })

}