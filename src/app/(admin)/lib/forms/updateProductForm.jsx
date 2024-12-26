'use client';
import { useState } from "react";
import { editProduct } from "../actions/newProduct";
import NotificationModal from "../notificationModal";
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';
import Image from "next/image";
import { CircleX } from 'lucide-react';
import AddImages from "../actions/newProduct";
import { AddImageForm } from "./addImageForm";


const initialState = {
    message: '',
  };

function SubmitButton() {
    const { pending, error } = useFormStatus();

    return (
        <button 
            type="submit" 
            className="bg-[#0047FF] p-2 rounded text-white uppercase">
            {pending ? 'Редагування...' : 'Редагувати'}
        </button>
    );
}

export function UpdateProductForm({ data, colorsList, tags, models, categories, sizes, collection }) {
    console.log('data', data)
    const [selectedCategories, setSelectedCategories] = useState(data.category.name);
    const [selectedTags, setSelectedTags] = useState(data.tags.map(tag => tag.id));
    const [additionalFields, setAdditionalFields] = useState(data.colors.map((color) => ({ 
        color: color.colorName || '', 
        colorId: color.id || '',
        altText: '', 
        images: color.images || [], 
        sizes: color.sizes || [{size:'', quantity: ''}] })));
    const [additionalSizeFields, setAdditionalSizeFields] = useState([]);
    const [state, formAction] = useFormState(editProduct, initialState);
    // const [editTags, setTags] = useState(data.tags);
    console.log('selectedTags',selectedTags);


    const handleSelected = (e) => {
        const selectedCategory = e.target.value;
        setSelectedCategories(selectedCategory);
    }

    const handleTagChange = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag)); // Убираем тег
        } else {
            setSelectedTags([...selectedTags, tag]); // Добавляем тег
        }
    };

    const handleImageDelate = (fieldIndex, imageIndex) => {
        console.log(fieldIndex, imageIndex);
        setAdditionalFields((prevFields) => 
        prevFields.map((field, i) => {
            console.log('field',field, i);
            if (i === fieldIndex) {
                console.log(prevFields);
                return {
                    ...field,
                    images: 
                    field.images.filter((_, idx) => idx !== imageIndex)
                };
            }
            return field;
        }));
    };

    const handleImageAdd = (colorId, uploadedImages) => {
        console.log('handleImageAdd');
        setAdditionalFields((prev) => 
        prev.map((field) => 
            field.colorId === colorId ? {...field, images: [...field.images, ...uploadedImages.map((image) => ({
                id: image.id,
                imageUrl: image.imageUrl,
                alt: `new Image ${image.id}`
            }))]} : field
            )
        );
        console.log(additionalFields);
    };

    const addField = () => {
        setAdditionalFields([
            ...additionalFields,
            { colorName: '', altText: '', images: null, sizes: [{size:'', quantity: ''}] },
        ]);
    };

    const addSizeField = () => {
        setAdditionalSizeFields([
            ...additionalSizeFields,
            { size:'', quantity: '' },
        ]);
    };

    

  return (
    <div className="w-full flex-col relative pt-10">
        <div className=" relative">
          <NotificationModal message={state?.message}/>
        </div>
        <form action={formAction} className="flex w-full flex-col gap-10">
            <div className="border border-[#0047FF] mob:border-0 rounded p-5 mob:p-0 flex w-full flex-col gap-2">
                <input type="hidden" name="productId" value={data.id}/>
                <label htmlFor="title">Назва товару</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    defaultValue={data.title}
                    className="focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]"
                />
                <label htmlFor="description">Опис товару</label>
                <textarea
                    type="text"
                    id="description"
                    name="description"
                    required
                    defaultValue={data.description}
                    className="focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]"
                />
                <div className="grid grid-cols-2 mob:grid-cols-1 gap-2">
                    <div>
                        <label htmlFor="price">Ціна</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            required
                            defaultValue={data.price}
                            className="focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]"
                        />
                    </div>
                    <div>
                        <label htmlFor="discountPercentage">Знижка,%</label>
                        <input
                            type="number"
                            id="discountPercentage"
                            name="discountPercentage"
                            defaultValue={data.discountPercentage}
                            className="focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]"
                        />
                    </div>
                </div>
                <div className="flex gap-2 mob:flex-col">
                    <div>
                        <label htmlFor="article">Артикул</label>
                        <input
                            type="text"
                            id="article"
                            name="article"
                            required
                            defaultValue={data.article}
                            className="focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]"
                        />
                    </div>
                    <div>
                        <label htmlFor="isNew">Новинка</label>
                        <select 
                            name="isNew"
                            id="isNew"
                            defaultValue={data.isNew} 
                            className="focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]"
                        >
                            <option value={true}>Новий</option>
                            <option value={false}>Ні</option>
                        </select>
                    </div>
                </div>
                <div className="flex gap-2 mob:flex-col">
                    <div>
                        <label htmlFor="category">Категорія</label>
                        <select
                            name="category"
                            id="category"
                            defaultValue={data.category.id}
                            className="capitalize focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]"
                            onChange={(e) => handleSelected(e)}
                        >
                            {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="subCategory">Підкатегорія</label>
                        <select
                            name="subCategory"
                            id="subCategory"
                            defaultValue={data.subCategory?.id || ''}
                            className="capitalize focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]"
                        >
                            {categories
                            .find((category) => category.name === selectedCategories)
                            ?.subCategories.map((subCategory) => (
                                <option key={subCategory.id} value={subCategory.id}>
                                    {subCategory.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div>
                        <label htmlFor="model">Модель</label>
                        <select 
                            name="model" 
                            defaultValue={data.model.id}
                            className="capitalize focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]"
                            >
                            {models.map((model) => (
                                <option 
                                    key={model.id} 
                                    value={model.id}
                                    >
                                        {model.name} 
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="model">Колекція</label>
                        <select 
                            name="collection" 
                            // defaultValue={data.collection}
                            className="capitalize focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]"
                            >
                            {collection.map((collItem) => (
                                <option 
                                    key={collItem.id} 
                                    value={collItem.id}
                                    >
                                        {collItem.name} 
                                </option>
                            ))}
                        </select>
                    </div>
                    
                    <div className="">
                        <label htmlFor="tags">Теги</label>
                        <div id="tags" name="tags" className="flex flex-wrap gap-5">
                            {tags.map((tag) => (
                                <label key={tag.id} className="flex items-center space-x-2">
                                    <input
                                        name="tags"
                                        type="checkbox"
                                        value={tag.id}
                                        checked={selectedTags.includes(tag.id)}
                                        onChange={() => handleTagChange(tag.id)}
                                        className="w-4 h-4 accent-blue-500"
                                    />
                                    <span className="capitalize">{tag.name}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-[#0047FF] mob:border-0 rounded p-5 mob:p-0 flex flex-col gap-5">
                <h3 className="w-full text-center uppercase">Фото товару</h3>
                {additionalFields.map((field, index) => (
                    <div key={index} className="flex flex-col gap-5">
                        <div className="flex gap-2 justify-center items-center">
                        <label htmlFor={`colorName_${index}`}>Колір</label>
                        <select
                            id={`colorName_${index}`}
                            name={`colorName_${index}`}
                            defaultValue={field.color}
                            className="capitalize focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]"
                        >
                            
                            {colorsList.map((color) => (
                                <option 
                                    key={color.id} 
                                    value={field.colorName}
                                    defaultValue={data.colors[0].colorName}
                                >
                                    {color.colorName}
                                </option>
                            ))}
                        </select>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            {field.images.map((image, imageIdx) => (
                                <div key={imageIdx} className="relative">
                                    <Image src={image.imageUrl} alt={image.alt} width={500} height={500}/>
                                    <button 
                                        type="button"
                                        className="absolute top-3 right-3"
                                        onClick={() => handleImageDelate(index, imageIdx)}
                                        > 
                                        <CircleX/>
                                    </button>
                                    <input type="hidden" name={`image`} value={image.id} />
                                </div>
                            ))}
                        </div>
                        <div>
                            <AddImageForm 
                                color={field} 
                                name={data.title} 
                                index={index}
                                handleImageAdd={handleImageAdd}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>Наявність:</p>
                            {field.sizes.map((size, index) => (
                                <div key={index} className="flex gap-2">
                                    <div className="p-2 border-[1px] w-10 flex justify-center rounded uppercase bg-slate-100">{size.size.name}</div>
                                    <div className="flex items-center">{size.available} шт</div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-2">
                            {additionalSizeFields.map((field, subindex) => (
                                <div key={subindex} className="flex mob:flex-col gap-2">
                                    <select
                                        defaultValue={field.size}
                                        name={`sizes_${index}_${subindex}`}
                                        className="capitalize focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]"
                                    >
                                        <option value="">Оберіть розмір</option>
                                        {sizes.map((size) => (
                                            <option key={size.id} value={size.size}>
                                                {size.size}
                                            </option>
                                        ))}
                                    </select>
                                    <input 
                                        type="number"
                                        min={0}
                                        name={`quantity`}
                                        placeholder="кількість"
                                        className="focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]" 
                                    />
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={addSizeField}
                                className="bg-[#0047FF] text-white p-2 rounded uppercase"
                            >
                                Додати поле з розміром
                            </button>
                        </div>
                    </div>
                ))}
                {/* <button
                    type="button"
                    onClick={addField}
                    className="bg-[#0047FF] mt-2 text-white p-2 rounded uppercase"
                >
                    Додати колір
                </button> */}
            </div>
        <SubmitButton />
        </form>
    </div>
  );
}