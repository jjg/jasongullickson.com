export default function handler(req, res){
  res.setHeader('Cache-Control', 's-maxage=30');
  res.status(200).json({msg:'Hello from Lambda'});
}
