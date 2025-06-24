export default function TableRowUniversity({house}:any){
    return(
        <tr className="border-b hover:bg-muted">
          <td className="px-4 py-2 font-medium">{house.caracteristicas}</td>
          <td className="px-4 py-2">{house.bairro}</td>
          <td className="px-4 py-2">{house.constructionYear}</td>
          <td className="px-4 py-2">
            <a
              href={`/houses/delete?id=${house.id}`}
              className="text-destructive hover:underline"
            >
              Deletar
            </a>
          </td>
        </tr>
    )
}