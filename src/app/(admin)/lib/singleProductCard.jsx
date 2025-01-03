'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pencil } from 'lucide-react';


export default function SingleProductCard({ product }) {
  console.log('product', product);
  const [images, setImages] = useState(product.colors[0]?.images || []);
  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [discount, setDiscount] = useState(product.discountPercentage);
  const [category, setCategory] = useState(product.category?.name);
  const [subCategory, setSubCategory] = useState(product.subCategory);
  const [tags, setTags] = useState(product.tags);
  const [model, setModel] = useState(product.model?.name || '');
  const [article, setArticle] = useState(product.article || '');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.images || '');
  const [sizes, setSizes] = useState(product.colors[0]?.sizes || '');
  console.log(sizes);
  const handleColorClick = (color) => {
    setImages(color.images);
    setSelectedColor(color.colorName);
  }

  return (
    <div className="p-4 relative  w-full flex flex-col gap-5 pt-10">
      <div className="absolute -top-2 -right-2 z-10">
        <Link 
          href={`/admin/products/edit/${product.id}`}
          className="bg-[#336CFF] text-white flex gap-2 items-center p-2 uppercase rounded"
        >
          <Pencil size={20}/>
          Редагувати
        </Link>
      </div>
      <h2 className="text-xl uppercase font-bold ">{title}</h2>
      <p className="">{description}</p>
      <p className="">Артикул: {article}</p>
      <p className="">Категорія: {category}</p>
      {subCategory && <p className="">Підкатегорія: {subCategory.name}</p>}
      <div className=" flex gap-2">
        <p>Теги: </p>
        {tags.map((tag) => (
          <span key={tag.id} className="bg-gray-200 px-2 py-1 rounded text-xs uppercase flex justify-center items-center">
            {tag.name}
          </span>
        ))}
      </div>
      <p className="">Модель: {model}</p>

      {/* Цена и скидка */}
      <div className="flex items-center ">
        {discount ? (
          <>
            <span className="text-red-500 font-semibold mr-2">
              {Math.round(price * (1 - discount / 100))} грн
            </span>
            <span className="line-through text-gray-500">{price} грн</span>
          </>
        ) : (
          <span className="font-semibold">{price} грн</span>
        )}
      </div>
      
      <div className="flex flex-col gap-2">
        <h3>Кольори:</h3>
        <div className="flex space-x-2 mb-4">
          {product.colors.map((color) => (
            <button 
              key={color.id}
              onClick={() => handleColorClick(color)} 
              style={{backgroundColor: color.colorName}}
              className={`px-2 py-1 border  bg-gray-200 rounded-md ${selectedColor === color.colorName ? ' border-blue-600' : 'border-white'}`}>
              {color.colorName}
            </button>
          ))}
        </div>
      </div>
      {/* Галерея изображений */}
      <div className="grid mob:grid-cols-2 grid-cols-4 gap-2 ">
        {images.map((img) => (
          <div key={img.id} className="relative">
            <Image priority={true} src={img.imageUrl} alt={img.alt} width={250} height={360} className="rounded" />
          </div>
        ))}
      </div>
      <div>
      <h3>Розміри:</h3>
      {sizes.map((size) => (
        <div key={size.size.id} className="flex gap-2 uppercase">
          <p>{size.size.name}</p> -
          <p>{size.available} шт</p>
        </div>
      ))}
      </div>
      
    </div> 
  );
};

