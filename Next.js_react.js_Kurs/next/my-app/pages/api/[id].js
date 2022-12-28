// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {pullover} from '../../data/artikel'
export default function handler(req, res) {
  res.status(200).json({ pullover })
}
