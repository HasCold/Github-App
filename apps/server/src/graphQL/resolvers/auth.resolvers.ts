import passport from "passport";
import { Response, Request } from 'express';

const authResolver = {
    Query: {
        isAuth: async (_: any, args: any, context: any) => {
            // console.log("R", _);  // Parent or Root Element which is undefined
            // console.log("args", args);  // args comes from the req object of client side

            const CLIENT_URL = process.env.CLIENT_BASE_URL || '';
            const cont = context.authenticate('github', {scope: ["user: email"]});
            if(!cont){
                passport.authenticate('github', { failureRedirect: process.env.CLIENT_BASE_URL+'/login' }),
                function(req: Request, res: Response) {
                  res.redirect(CLIENT_URL);
                    }
                }  
            }
        }
}

export default authResolver;