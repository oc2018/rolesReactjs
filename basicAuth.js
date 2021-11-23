import { Users }  from './data.js';


export const authUser = (req, res, next) => {
    if(req.user == null){
        res.status(403)
        return res.send('You need to log in');
    }
    next();
}

export const authRole = (role) => {
    return ( req, res, next ) => {
        if(req.user.role !== role){
            res.status(401)
            return res.send(" You are Not allowed ");
        }
        next();
    }
}

export const setUser = (req, res, next) => {
    const userId = req.body.userId;
    if(userId){
        req.user = Users.find( user => user.id === userId);
    }
    next();
}