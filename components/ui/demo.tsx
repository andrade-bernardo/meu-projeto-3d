'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full">
        {/* Lado Esquerdo - Conteúdo */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Interfaces que Ganham Vida
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Deixe para trás o layout estático. Engaje seus usuários com elementos 3D 
            em tempo real que respondem ao toque e ao movimento, elevando o padrão 
            de interatividade do seu site.
          </p>

          {/* Botão de Chamada para Ação */}
          <div className="mt-8">
            <button className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors">
              Explorar agora
            </button>
          </div>
        </div>

        {/* Lado Direito - Robô 3D */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}