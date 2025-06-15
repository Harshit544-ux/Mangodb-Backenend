const users=[
    {
        name:"sai",
        email:"sai@gmail.com",
        password:"123456",
    },
    {
        name:"sai1",
        email:"sai1@gmail.com",
        password:"123456",
    }
]


// get all users
exports.getAllUsers = (req, res) => {
    res
    .status(200)
    .json({
       status:"success",
       data:{
        users,
        total:users.length
       }
    })
}
