import CardList from "@/components/ui/cardList";

export default function Page() {
    const title = 'Sale';

    return(
        <div className="lg:px-24 px-5 w-full">
            <CardList title={title}/>
            
        </div>
    )
}