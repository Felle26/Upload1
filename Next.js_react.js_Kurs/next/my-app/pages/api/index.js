// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {pullover} from '../../data/artikel'
export default function handler({ query: { id } }, res) {
  const ausgabe = pullover.filter(pullover => pullover.id === id)
  

  if (ausgabe.length > 0){
    res.status(200).json(ausgabe[0])
  } else {
    res.status(404).json('ID nicht vorhanden')
  }
}
