// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  import wiki from 'wikijs';
  let page = await wiki().page(params.name);
  let data = { 
    name: params.name,
    summary: await page.summary() ,
    infobox: await page.fullInfo(),
    tables: await page.tables()
  }
  res.statusCode = 200
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.json(data)
}




    