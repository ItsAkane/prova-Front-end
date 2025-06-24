"use client"

import { Button } from "@/components/ui/button";

export default function NewHouse() {

    async function saveHouse(event: React.FormEvent) {
        event.preventDefault(); // Impede o reload da página
        console.log("Enviado")
        const caracteristicas = document.getElementById("caracteristicas") as HTMLInputElement;
        const bairro = document.getElementById("bairro") as HTMLInputElement;
        const constructionYear = document.getElementById("constructionYear") as HTMLInputElement;

        const house = {
            caracteristicas: caracteristicas.value,
            bairro: bairro.value,
            constructionYear: constructionYear.value,
        }

        console.log(house)
        try {
            const response = await fetch("https://crudcrud.com/api/6fcbcfdb30fc459ca7553b61d9d1bb2d/casas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(house)
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Cadastrar Casa</h1>
            <form onSubmit={saveHouse} className="space-y-5">
            <div>
                <label htmlFor="caracteristicas" className="block text-sm font-medium mb-1">
                Caracteristicas
                </label>
                <input
                type="text"
                placeholder="Caracteristicas"
                id="caracteristicas"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <div>
                <label htmlFor="bairro" className="block text-sm font-medium mb-1">
                Bairro
                </label>
                <input
                type="text"
                placeholder="Bairro"
                id="bairro"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <div>
                <label htmlFor="constructionYear" className="block text-sm font-medium mb-1">
                Ano de Construção
                </label>
                <input
                type="text"
                placeholder="Ano de construção"
                id="constructionYear"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <Button type="submit" className="w-full">
                Salvar
            </Button>
            </form>
        </div>

    )
}