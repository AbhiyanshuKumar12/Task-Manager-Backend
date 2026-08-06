export const registeruser = (req,res)=>{
    const {name,email,password} = req.body


    if(!name || !email || !password){
        return res.status(400).json({
            "message":"name,email and password is required"
        })
    }

    res.status(201).json({
        "message":"user registered successfully"
    })
}