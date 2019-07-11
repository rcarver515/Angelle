const User = require("./../models/Admin")
const Customers = require("./../models/Customers")
const Artwork = require("./../models/Artwork")
const HomeAccessories = require("./../models/HomeAccessories")
const Accessories = require("./../models/Accessories")

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
    app.post("/registerUser", (req, res) => {
        console.log(req.body)
        const newCustomer={
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            comment:req.body.comment
            
        }
        Customers.create(newCustomer).then(result => {
            res.json(result)
        })
    });
    app.get("/getCustomers", (req,res) => {
        Customers.find({}).then(results => {
            res.json(results)
        })
    })
    app.post("/createNewArt", (req, res) => {
        const newArt = {
            artImg:req.body.artImg,
            artImgTitle:req.body.artImgTitle,
            artImgDimensions:req.body.artImgDimensions,
            artImgPrice:req.body.artImgPrice
        }
        Artwork.create(newArt).then(result => {
            res.json(result)
        })
    })
    app.post("/createNewHomeAcc", (req, res) => {
        const newHomeAcc = {
            homeAccImg:req.body.homeAccImg,
            homeAccTitle:req.body.homeAccTitle,
            homeAccDimensions:req.body.homeAccDimensions,
            homeAccPrice:req.body.homeAccPrice
        }
        HomeAccessories.create(newHomeAcc).then(result => {
            res.json(result)
        })
    })
    app.post("/createNewAcc", (req, res) => {
        const newAcc = {
            accImg:req.body.accImg,
            accTitle:req.body.accTitle,
            accDimensions:req.body.accDimensions,
            accPrice:req.body.accPrice
        }
        Accessories.create(newAcc).then(result => {
            res.json(result)
        })
    })
}