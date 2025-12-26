import { SplineSceneBasic } from "@/components/ui/demo";
import { ProductGrid } from "@/components/product-grid";

export default function Home() {
  return (
    // Mudamos 'flex' para 'block' para o conteúdo empilhar um embaixo do outro
    <main className="min-h-screen bg-black p-4 md:p-8">
      
      {/* Container principal centralizado */}
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* HERO SECTION - O Robô 3D (Início do Site) */}
        <section className="w-full">
          <SplineSceneBasic />
        </section>

        {/* VITRINE DE PRODUTOS - Aparece logo abaixo ao rolar */}
        <section className="py-12">
          <div className="flex flex-col mb-10">
            <h2 className="text-3xl font-black text-white uppercase italic border-l-8 border-red-600 pl-4 tracking-tighter">
              🔥 Lançamentos Fire Mode
            </h2>
            <p className="text-zinc-500 mt-2 text-sm uppercase tracking-widest">
              Tecnologia e Estilo em Chamas
            </p>
          </div>

          {/* Chamando a grade de produtos que você criou no Passo 2 */}
          <ProductGrid />
        </section>

      </div>

      {/* RODAPÉ */}
      <footer className="mt-20 border-t border-zinc-900 py-10 text-center">
        <p className="text-zinc-500 text-sm font-mono">
          &gt; FIRE_MODE_SYSTEM_v1.0.25
        </p>
      </footer>
    </main>
  );
}