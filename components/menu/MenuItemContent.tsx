
interface ContentProps {
    title: string;
    description: string;
}

export interface MenuItemContentProps {
    title: string;
    items: ContentProps[];
}


export default function MenuItemContent({ title: tittle, items }: MenuItemContentProps) {
    return (
        <div>
            <h1 className="mt-8 font-bold text-2xl">{tittle}</h1>
            {items.map((item, index) => (
                <div key={index}>
                    <p className="pt-4 pr-6 text-sky-700 underline hover:no-underline">{item.title}</p>
                    <p className="pr-6">{item.description}</p>
                </div>
            ))}
        </div>
    );
}