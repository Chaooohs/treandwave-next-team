import CardList from "@/components/ui/cardList";

export default function Page() {
    const title = 'Каталог';
    const tagsArr = ['брюки', 'спідниця', 'жакети', 'футболки', 'сукні']

    return(
        <div className="lg:px-24 px-5 w-full">
            <CardList title={title} tags={tagsArr}/>
            
        </div>
    )
}