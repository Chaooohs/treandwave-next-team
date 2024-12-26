'use client';
import { useState } from "react";
import Image from "next/image";


export default function SingleProductCard({ product }) {
  console.log(product);
  const [images, setImages] = useState(product.colors[0]?.images || []);
  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [discount, setDiscount] = useState(product.discountPercentage);
  const [category, setCategory] = useState(product.category?.name);
  const [subCategory, setSubCategory] = useState(product.subCategory);
  const [tags, setTags] = useState(product.tags);
  const [selectedTag, setSelectedTag] = useState('');

  // Обработчик для удаления изображения
  const handleDeleteImage = async (imageId) => {
    
      // await fetch(`/api/images/${imageId}`, {
      //   method: 'DELETE'
      //   });
      // setImages(images.filter((img) => img.id !== imageId));
  };

   // Обработчик для добавления тегов
   const handleAddTag = async () => {
    // if (!selectedTag) return;
  
    // try {
    //   const response = await fetch(`/api/v1/catalog/${product.id}/${encodeURIComponent(selectedTag)}`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   });
  
    //   if (!response.ok) {
    //     throw new Error("Ошибка при добавлении тега");
    //   }
  
    //   setTags((prevTags) => [...prevTags, selectedTag]);
    //   setSelectedTag("");
    // } catch (error) {
    //   console.error("Ошибка при добавлении тега:", error);
    // }
  };


  // Обработчик для добавления изображения
  const handleAddImage = async (imageUrl, alt) => {
    
  };

  // Функция для обновления информации о товаре
  const handleUpdateProduct = () => {
    // Обновление товара в базе данных
    
  };

  return (
    <div className="p-4  w-full flex flex-col gap-5 ">
      <h2 className="text-xl uppercase font-bold ">{title}</h2>
      <p className="text-gray-500 ">{description}</p>
      <p className="text-gray-700 ">Категорія: {category}</p>
      {subCategory && <p className="text-gray-700 ">Підкатегорія: {subCategory.name}</p>}
      <div className=" flex space-x-2">
        <p>Теги: </p>
        {tags.map((tag) => (
          <span key={tag.id} className="bg-gray-200 px-2 py-1 rounded-full text-sm">
            {tag.name}
          </span>
        ))}
      </div>

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

      {/* Галерея изображений */}
      <div className="grid grid-cols-2 gap-2 ">
        {images.map((img) => (
          <div key={img.id} className="relative">
            <Image priority={true} src={img.imageUrl} alt={img.alt} width={125} height={188} className="rounded-md" />
            <button
              onClick={() => handleDeleteImage(img.id)}
              className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full"
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      {/* Цвета */}
      <div className="flex flex-col gap-2">
        <h3>Кольори:</h3>
        <div className="flex space-x-2 mb-4">
          {product.colors.map((color) => (
            <span key={color.id} className="px-2 py-1 bg-gray-200 rounded-md">
              {color.colorName}
            </span>
          ))}
        </div>
      </div>
      

      {/* Поля для редактирования */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label>Назва:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Назва"
            className="border rounded px-2 py-1"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <h3>Опис:</h3>
          <textarea
            value={description}
            autoCorrect="on"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Описание"
            className="border rounded px-2 py-1"
          ></textarea>
        </div>

        <div className="flex flex-col gap-2">
          <h3>Ціна, грн:</h3>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Цена"
            className="border rounded px-2 py-1"
            />
        </div>
        
        
        <div className="flex flex-col gap-2">
          <h3>Знижка, %:</h3>
          <input
            type="number"
            value={discount || ""}
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="Знижка (%)"
            className="border rounded px-2 py-1"
          />
        </div>
        
        <button onClick={handleUpdateProduct} className="bg-[#0047FF] uppercase text-white p-4 rounded">
          Оновити товар
        </button>
      </div>
    </div> 
  );
};

