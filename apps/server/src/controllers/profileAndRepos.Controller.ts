import {Request, Response} from 'express';
import { asyncErrorHandler, errorHandler } from '../middleware/errorHandlers';

export const userProfileAndRepos = asyncErrorHandler( async (req: Request, res: Response) => {
    try {
        const {username} = req.body;
        if(!username) return errorHandler(res, 404, "Username Not Found");

        const response = await fetch('https://api.github.com/users/'+username, {
            headers: {
                authorization: `token ${process.env.GITHUB_API_KEY}`
              }
        });

        if(!response.ok){
            throw new Error(`GitHub API returned status: ${response.status}`);
        }

        const data = await response.json();
        res.status(201).json({
            success: true,
            data
        })

    } catch (error: any) {
        console.error("Error in /userProfieAndRepos :- ", error)
        res.status(500).json({
            success: false,
            message: "Error in Fetching the User Profile And Repos"
        })
    }
});