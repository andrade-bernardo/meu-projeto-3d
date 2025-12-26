import Image from "next/image";

export function ProductGrid() {
  const products = [
    { id: 1, name: "Fire Hoodie v1", price: "R$ 299", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800" },
    { id: 2, name: "Tech Runner", price: "R$ 549", img: "https://images.unsplash.com/photo-1542291026-7eec264c2744?w=800" },
    { id: 3, name: "Cyber Cap", price: "R$ 129", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
      {products.map((product) => (
        <div key={product.id} className="group bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl hover:border-orange-500 transition-all cursor-pointer">
          <div className="relative overflow-hidden rounded-lg mb-4 h-48 w-full">
            <Image 
              src={product.img} 
              alt={product.name} 
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
            />
          </div>
          <h3 className="text-white font-bold text-xl">{product.name}</h3>
          <p className="text-orange-500 font-mono mt-2 font-bold">{product.price}</p>
          <button className="w-full mt-4 py-2 bg-zinc-800 text-white text-sm rounded-lg group-hover:bg-orange-600 transition-colors">
            Adicionar ao Carrinho
          </button>
        </div>
      ))}
    </div>
  );
}