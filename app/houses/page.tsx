import TableRowUniversity from "../components/TableRowUniversity";

export default async function House(){
   
    const request = await fetch("https://crudcrud.com/api/6fcbcfdb30fc459ca7553b61d9d1bb2d/casas")
    const listHouse = await request.json();

    const houses = [];
    for (const house of listHouse){
        houses.push(<TableRowUniversity key={house.id} house={house} />)
    }

    return (
        <div className="container mx-auto py-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6 text-center">Lista de Casas</h1>
            <div className="rounded-lg border shadow-sm bg-background w-full max-w-3xl">
            <table className="w-full text-sm text-center">
                <thead>
                <tr>
                    <th className="py-2">Caracteristicas</th>
                    <th className="py-2">Bairro</th>
                    <th className="py-2">Ano de construção</th>
                    <th className="py-2">Ações</th>
                </tr>
                </thead>
                <tbody>
                {houses}
                </tbody>
            </table>
            </div>
        </div>
    )
}