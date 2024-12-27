'use server'
import { cookies } from "next/headers";
import { revalidatePath } from 'next/cache';
import { redirect } from "next/navigation";

const API_BASE_URL = 'https://clothing-store-api-lh6l.onrender.com/api/v1';

export async function getCategories(params) {
    
    let res = await fetch (`https://clothing-store-api-lh6l.onrender.com/api/v1/category`)
    let categories = await res.json();
    return categories;
}

export async function getSubCategories(params) {
    
    let res = await fetch (`https://clothing-store-api-lh6l.onrender.com/api/v1/category/${params}`)
    let subCategories = await res.json();
    return subCategories;
}

export async function getModel(params) {
    
    let res = await fetch (`https://clothing-store-api-lh6l.onrender.com/api/v1/model`)
    let models = await res.json();
    return models;
}

export async function getTags(params) {
    
    let res = await fetch (`https://clothing-store-api-lh6l.onrender.com/api/v1/tag`)
    let tags = await res.json();
    return tags;
}

export async function getColors(params) {
    
    let res = await fetch (`https://clothing-store-api-lh6l.onrender.com/api/v1/color`)
    let colors = await res.json();
    return colors;
}

export async function getCollection(params) {
    
    let res = await fetch (`https://clothing-store-api-lh6l.onrender.com/api/v1/collection`)
    let collection = await res.json();
    return collection;
}

export async function getSizes(params) {
    
    let res = await fetch (`https://clothing-store-api-lh6l.onrender.com/api/v1/size`)
    let sizes = await res.json();
    return sizes;
}

//Images

export async function addProduct(prevState, formData) {
    const token = cookies().get('adminToken');
    console.log('added goods', formData);
    let redirectPath = null;

    if (!token?.value) {
        console.error('Отсутствует токен администратора');
        return { message: 'Требуется авторизация' };
    }

    try {
        //For main image
        const title = formData.get('title');
        const mainImage = formData.get('image');
        const mainImageColor = formData.get('color');
        const mainImageAlt = `${title} ${mainImageColor}`;

        if (!mainImage || !mainImageColor) {
            console.error('Одне з полів відсутнє ');
            return { message: 'Не все поля заполнены' };
        }
        const mainImageFormData = new FormData();
        mainImageFormData.append('image', mainImage);
        mainImageFormData.append('color', mainImageColor.toString());
        mainImageFormData.append('alt', mainImageAlt.toString());

        console.log('main image data перед отправкой', mainImageColor, mainImageAlt, mainImage);
        console.log('mainImageFormData перед отправкой', mainImageFormData);

        const mainImageRes = await fetch('https://clothing-store-api-lh6l.onrender.com/api/v1/image', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token.value}`
            },
            body: mainImageFormData,
        });

        if (!mainImageRes.ok) {
            const errorData = await mainImageRes.json();
            console.error('Помилка додавання основної картинки:', errorData.message || 'помилка');
            return {message: 'Помилка додавання основної картинки'}
        }

        const mainImageData = await mainImageRes.json();
        console.log('ответ с сервера', mainImageData);
        const mainImageId = mainImageData.mainImageId;
        console.log('Осмновну картинку додали, ID:', mainImageId);
        
        
        //Added other pictures
        const colors = [];
        for (const [key, value] of formData.entries()) {
            if (key.startsWith('colorName_')) {
                const colorIndex = key.split('_')[1];
                const colorName = value.toString();
                const images = formData.getAll(`images_${colorIndex}`);
                
                // const sizes = {};
                const sizeQuantities = {};
                const sizeEntries = [];
                const quantityEntries = [];

                for (const [subKey, subValue] of formData.entries()) {
                    if (subKey.startsWith(`sizes_${colorIndex}`)) {

                        sizeEntries.push(subValue);
                        
                    }
                    if (subKey === 'quantity') {
                        quantityEntries.push(subValue);
                    }
                };

                sizeEntries.forEach((size, index) => {
                    const quantity = parseInt(quantityEntries[index], 10);
                    sizeQuantities[size] = quantity || 0;
                });

                const colorFormData = new FormData();
                colorFormData.append('colorName', colorName);
                colorFormData.append('imagesAlt', `картинки ${title} ${colorName}`);
                images.forEach((img) => {
                    colorFormData.append('images', img);
                });

                console.log('colorFormData', colorFormData);

                const colorRes = await fetch('https://clothing-store-api-lh6l.onrender.com/api/v1/image/with-color', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token.value}`
                    },
                    body: colorFormData,
                });
        
                if (!colorRes.ok) {
                    const errorData = await colorRes.json();
                    console.error('Помилка додавання картинок:', errorData.message || 'помилка');
                    return {error: 'Помилка додавання картинок'}
                }

                const colorImageData = await colorRes.json();
                const colorId = colorImageData.colorId;
                const imageIds = colorImageData.uploadedImages.id;
                
                colors.push({ 
                    colorId, 
                    imageIds, 
                    sizes: {
                        sizeQuantities
                    } });
                console.log('Картинки додали, ID:', colorImageData);
            }
        }
        console.log('Картинки all додали', colors);
        

        //added goods
        const description = formData.get('description');
        const price = parseFloat(formData.get('price'));
        const discountPercentage = parseFloat(formData.get('discountPercentage'));
        const article = formData.get('article');
        const isNew = JSON.parse(formData.get('isNew'));
        const category = formData.get('category');
        const subCategory = formData.get('subCategory');
        const model = formData.get('model');
        const tags = formData.get('tags');
        const tagsArray = tags ? [tags] : [];
        const collection = formData.get('collection');
        
        console.log('productData перед отправкой', title, description, price, discountPercentage, article, isNew, category, subCategory, model, tags, colors, mainImageId, collection);

        const productRes = await fetch('https://clothing-store-api-lh6l.onrender.com/api/v1/catalog', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token.value}`
            },
            body: JSON.stringify({
                title: title,
                description: description,
                price: price,
                discountPercentage: discountPercentage,
                article: article,
                isNew: isNew,
                category: category,
                subCategory: subCategory,
                model: model,
                collection: collection,
                tags: tagsArray,
                colors: colors,
                mainImageId: mainImageId,
              }),
        });

        if (!productRes.ok) {
            const errorData = await productRes.json();
            console.error('Помилка додавання товару:', errorData.message || 'помилка');
            return {message: 'Помилка додавання товару'}
        }

        const product = await productRes.json();
        const productId = product.id;
        
        revalidatePath('/admin/ptoducts');
        console.log('товар додано', productId);
        
        redirectPath = `/admin/products/${productId}`;

    } catch (error) {
        console.error('Помилка мережі:', error.message);
        return{ message: 'Помилка мережі'}

    } finally {
        if (redirectPath)
            redirect(redirectPath);
    }
}

export async function deleteProduct(prevState, formData) {
    const token = cookies().get('adminToken');
    const id = formData.get('id');
    console.log('delete prod', formData, id)

    try {
        const res = await fetch(`https://clothing-store-api-lh6l.onrender.com/api/v1/catalog/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token.value}`
            },
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error('Помилка видалення товару:', errorData.message || 'помилка');
            return {error: 'Помилка видалення товару'}
        }
        
        revalidatePath('/admin/ptoducts');
        return true;

    } catch (error) {
        console.error('Помилка мережі:', error.message);
        return{ error: 'Помилка мережі'}
    }
}


export async function editProduct(prevState, formData) {
    const token = cookies().get('adminToken');
    console.log('edit information', formData);
    let redirectPath = null;
    let tagsArray = [];
    let allImageIds = [];

    if (!token?.value) {
        console.error('Отсутствует токен администратора');
        return { message: 'Требуется авторизация' };
    }

    try {
        const title = formData.get('title');
        const productId = formData.get('productId');
        const description = formData.get('description');
        const price = parseFloat(formData.get('price'));
        const discountPercentage = parseFloat(formData.get('discountPercentage'));
        const article = formData.get('article');
        const isNew = JSON.parse(formData.get('isNew'));
        const category = parseInt(formData.get('category'), 10);
        const subCategory = parseInt(formData.get('subCategory'), 10);
        const model = parseInt(formData.get('model'), 10);
        const tags = formData.getAll('tags');
        tagsArray = tags.map(Number);
        console.log('tags', tags);
        const images = formData.getAll('image');
        allImageIds = images.map(Number);

        // if (typeof tags === 'string') {
        //     console.log('это строка, разбиваем её в массив');
        //     // Если это строка, разбиваем её в массив
        //     tagsArray = [parseInt(tags, 10)]
        // } else if (Array.isArray(tags)) {
        //     console.log('это массив, просто копируем его');
        //     // Если это массив, просто копируем его
        //     tagsArray = tags.map(Number);
        // }
        
        console.log('tagsArray:', tagsArray);
        console.log('allimages', allImageIds)
        const collection = parseInt(formData.get('collection'), 10);
        
        console.log('productData перед отправкой', title, description, price, discountPercentage, article, isNew, category, subCategory, model, tags, tagsArray, collection);

        const productRes = await fetch(`${API_BASE_URL}/catalog/${productId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token.value}`
            },
            body: JSON.stringify({
                title: title,
                description: description,
                price: price,
                discountPercentage: discountPercentage,
                article: article,
                isNew: isNew,
                imagesIds: allImageIds,
                categoryId: category,
                subCategoryId: subCategory,
                modelId: model,
                collectionId: collection,
                tagsIds: tagsArray,
              }),
        });

        if (!productRes.ok) {
            const errorData = await productRes.json();
            console.error('Помилка додавання товару:', errorData.message || 'помилка');
            return {message: 'Помилка додавання товару'}
        }

        const product = await productRes.json();
        
        revalidatePath('/admin/ptoducts');
        console.log('товар додано', productId);
        
        redirectPath = `/admin/products`;

    } catch (error) {
        console.error('Помилка мережі:', error.message);
        return{ message: 'Помилка мережі'}

    } finally {
        if (redirectPath)
            redirect(redirectPath);
    }
}


export default async function AddImages (prevState, formData) {

    const token = cookies().get('adminToken');
    console.log('AddImages information', formData);
    const dataEntries = Array.from(formData.entries());
    console.log('dataEntries', dataEntries);
    const title = formData.get('title');
    const imageEntries = dataEntries.filter(([key]) => key.startsWith('image_'));
    console.log('imageEntry', imageEntries);
    const index = imageEntries[0][0].split('_')[1];
    console.log(index);
    const colorName = formData.get(`colorName_${index}`);
    const imagesAlt = `${title}_${colorName}_image`;

    const payload = new FormData();
    for (const [key, images] of imageEntries) {
        payload.append('images', images);
    }
    payload.append('imagesAlt', imagesAlt);
    payload.append('colorName', colorName);
    console.log('payload', payload);

    try {
        const addingImagesRes = await fetch('https://clothing-store-api-lh6l.onrender.com/api/v1/image/with-color', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token.value}`
            },
            body: payload,
        });
    
        if (!addingImagesRes.ok) {
            const errorData = await colorRes.json();
            console.error('Помилка додавання картинок:', errorData.message || 'помилка');
            return {message: 'Помилка додавання картинок'}
        }
        const newImageData = await addingImagesRes.json();
        // const colorId = newImageData.colorId;
        // const imageIds = newImageData.imageIds;
        // console.log('newImageData', newImageData);
        // console.log(colorId, imageIds);
        return {message: `Картинки додались успішно`, newImageData}
        
    } catch (error) {
        console.error('Помилка мережі:', error.message);
        return{ message: 'Помилка мережі'}
    }
}
