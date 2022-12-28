import { useRouter } from 'next/router'

export default function ID() {
    const router = useRouter();
    const {artikelid, varianteid} = router.query;

    return (
        <div>
            <h1>Die Artikel ID lautet {artikelid} für Variante {varianteid}</h1>
        </div>
    )
}