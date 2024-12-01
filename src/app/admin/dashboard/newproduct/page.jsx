
import AdminTitle from "../../lib/title";
import { AddProductForm } from "../../lib/forms/addProductForm";
import { getColors, getTags, getModel, getCategories, getSizes, getCollection } from "../../lib/actions/newProduct";


export default async function NewProductPage() {
    const colorsList = await getColors();
    const tags = await getTags();
    const models = await getModel();
    const categories = await getCategories();
    const sizes = await getSizes();
    const collection = await getCollection();

    return(
        <div>
            <AdminTitle text={'Сторінка додавання'}/>
            <div>
                <AddProductForm 
                    colorsList={colorsList}
                    tags={tags}
                    models={models}
                    categories={categories}
                    sizes={sizes}
                    collection={collection}
                />
            </div>


        </div>
    )
}