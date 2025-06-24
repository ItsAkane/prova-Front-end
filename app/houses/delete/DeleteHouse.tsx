"use client";

import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";

export default function DeleteHouse() {
    const id = useSearchParams().get("id");
    const router = useRouter();

        async function handleDelete() {
            console.log("Casa deletada");
            try {
                const response = await fetch(`https://crudcrud.com/api/6fcbcfdb30fc459ca7553b61d9d1bb2d/casas/${id}`, {
                    method: "DELETE",
                })
                router.push("/casas");
            } catch (error) {
                console.error("Erro ao deletar a Casa:", error);
            }
        }
        return (
            <div className="flex flex-col items-center justify-center min-h-[150px] gap-4 bg-card rounded-md shadow p-4 mx-auto max-w-sm">
                <h1 className="text-lg font-semibold text-destructive">Deletar Casa?</h1>
                <p className="text-sm text-muted-foreground text-center">Tem certeza que deseja deletar? Esta ação não pode ser desfeita.</p>
                <Button variant="destructive" size="sm" className="w-full" onClick={handleDelete}>
                    Deletar
                </Button>
            </div>
        );
    }