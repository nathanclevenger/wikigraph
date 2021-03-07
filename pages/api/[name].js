// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import wiki from 'wikijs';

export default async (req, res) => {
  let page = await wiki().page(req.query.name);
  let data = { 
    name: req.query.name,
    summary: await page.summary().catch() ,
    infobox: await page.fullInfo().catch(),
    tables: await page.tables().catch(),
    // backlinks: await page.backlinks().catch(),
    // categories: await page.categories().catch(),
    images: await page.images().catch(),
  }
  res.statusCode = 200
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.json(data)
}




    