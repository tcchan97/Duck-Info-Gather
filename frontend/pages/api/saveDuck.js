// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      console.log("data", req.body);
      const response = await fetch('http://localhost:8000/saveDuckInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      });
      console.log(response.status);
      if (response.status === 200){
        res.status(200).json({ status: 'Data Saved' })
      }
    }
    catch {
      res.status(400).json({ status: 'Data Not Saved' })
    }
  }
}
