'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[600px] bg-black/[0.96] relative overflow-hidden border-zinc-800">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="orange"
      />
      
      <div className="flex h-full flex-col md:flex-row">
        {/* Lado Esquerdo - Texto Fire Mode */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-orange-400 to-red-600 tracking-tighter">
            FIRE MODE
          </h1>
          <p className="mt-4 text-zinc-400 max-w-lg text-lg leading-relaxed">
            Aqueça seu estilo com a tecnologia do futuro. 
            Performance máxima e design exclusivo para quem dita as regras.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-8 py-3 bg-red-600 text-white font-bold rounded-md hover:bg-orange-500 transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(239,68,68,0.3)]">
              Comprar Agora
            </button>
            <button className="px-8 py-3 border border-zinc-700 text-white font-bold rounded-md hover:bg-zinc-800 transition-all uppercase tracking-widest">
              Coleções
            </button>
          </div>
        </div>

        {/* Lado Direito - O Robô 3D */}
        <div className="flex-1 relative min-h-[300px]">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}