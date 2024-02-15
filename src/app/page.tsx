import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:items-center">
      <div className="bg-red-500 w-52 h-52">
        <Image
          className="object-contain"
          width={200}
          height={200}
          src="https://images.pexels.com/photos/18434225/pexels-photo-18434225/free-photo-of-blooming-potted-plant-and-a-wooden-bench-standing-by-a-stone-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-4xl">Thorned Heel Slicers</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quo,
          porro dolores dolor mollitia officia, facere inventore, eius dolorem
          vel voluptate officiis! Sed quaerat nisi totam dolore ea nam a?
        </p>
        <div>
          <button className="btn btn-warning">CHECK IT OUT</button>
        </div>
      </div>
    </div>
  );
}
