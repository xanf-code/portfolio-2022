import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { urls } from "../../URL/bookmarks";


function paginator(items: any[], current_page: number, per_page_items: number) {
    let page = current_page || 1,
        per_page = per_page_items || 10,
        offset = (page - 1) * per_page,

        paginatedItems = items.slice(offset).slice(0, per_page_items),
        total_pages = Math.ceil(items.length / per_page);

    return {
        page: page,
        per_page: per_page,
        pre_page: page - 1 ? page - 1 : null,
        next_page: (total_pages > page) ? page + 1 : null,
        total: items.length,
        total_pages: total_pages,
        data: paginatedItems
    };
}

// FIX NEXT REQUEST TYPE
export default async function handler(req: any, res: NextApiResponse): Promise<void> {

    const page_no = parseInt(req.query.page);
    const items = parseInt(req.query.item);

    try {
        const cred = Buffer.from('darshanaswath@gmail.com:B8MU3hnZqk9VB87n1gt1').toString('base64');
        let list: any = [];

        var promises = urls.map(url => axios.get(`https://api.urlmeta.org?url=${url}`, {
            headers: {
                'Authorization': 'Basic ' + cred
            }
        }).then(y => y.data = {
            url: url,
            response: y.data
        }));
        await Promise.all(promises).then((results) => {
            list.push(results)
            res.status(200).json(paginator(list[0], page_no, items));
        });
    } catch (error: any) {
        res.status(error.status || 500).end(error.message)
    }
}