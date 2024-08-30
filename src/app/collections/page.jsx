import CardList from "@/components/shared/CardList/CardList";

export default function Page() {
    const title = 'Колекції';
    const tagsArr = ['Усі', 'autumn `24', 'spring `24', 'summer `23', 'Кофти та боді', 'Светри та худі', 'Низ']

    return(
        <div className="lg:px-24 px-5 w-full">
            <CardList title={title} tags={tagsArr}/>
        </div>
    )
}