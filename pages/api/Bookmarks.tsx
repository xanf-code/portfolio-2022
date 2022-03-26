import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const urls = ["https://palladiummag.com/2022/01/06/quit-your-job/", "https://chasem.co/notes"];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const list: any = [];
        const cred = Buffer.from('darshanaswath@gmail.com:B8MU3hnZqk9VB87n1gt1').toString('base64');
        urls.map(async (url) => {
            const response = await axios.get(`https://api.urlmeta.org?url=${url}`, {
                headers: {
                    'Authorization': 'Basic ' + cred
                }
            });
            list.push(response.data)
            console.log(list);
        })
        res.status(200).json(list);
    } catch (error: any) {
        return res.status(error.status || 500).end(error.message)
    }
}