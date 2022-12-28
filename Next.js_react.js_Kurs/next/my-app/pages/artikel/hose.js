import Image from "next/image";
import hose1 from "../../public/bilder/1.jpg"

export default function hose() {
  return (
    <div>
      
      <h1>Willkommen zu Hose</h1>
      <Image src={hose1} placeholder='blur' blurDataURL="" priority="true" alt='Artikel' width={600} height={600} />
    </div>
  );
}
