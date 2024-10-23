import CardList from "@/components/shared/CardList/CardList";
import pic from '/public/image/jpg/PHOTO.png'

export default function Page() {
    const title = 'Костюми';
    const tagsArr = ['брюки', 'спідниця', 'жакети', 'футболки', 'сукні']

    return(
        <div className="lg:px-24 px-5 w-full">
            <CardList title={title} image={pic}/>
        </div>
    )
}