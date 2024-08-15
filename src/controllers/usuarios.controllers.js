import UserService from "../services/UserService.js"


export const getUsers = async (req, res) => {

    try {
        const users = await UserService.findAll();
        if(users.length === 0 || !users){
            throw({
                statusCode: 404,
                status: 'Not Found',
                message: 'No se han encontrado usuarios'
            })
        }
        return res.json(users)

    } catch (err) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status
        })
    }


}
export const registerUser = async (req, res) => {

    try {

        await UserService.create(req.body)
        return res.status(201).json({
            message: 'Usuario creado'
        })
        
    } catch (error) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status
        })
    }
}

export const updateUser = (req, res) => {
    try {
        UserService.update(req.body)    
        return res.json({
            msg: 'Usuario actualizado'
        })

    }

    catch (error) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status
        })
    }   
} 