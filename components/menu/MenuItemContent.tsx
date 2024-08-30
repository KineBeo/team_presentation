
interface ContentProps {
    title: string;
    description: string;
}

export interface MenuItemContentProps {
    title: string;
    items: ContentProps[];
}

export function MenuItemSubContent({ title, description }: ContentProps) {
    return (
        <div>
            <p className="pt-4 pr-6 text-sky-700 underline hover:no-underline">{title}</p>
            <p className="pr-6">{description}</p>
        </div>
    );
}

export default function MenuItemContent({ title: tittle, items }: MenuItemContentProps) {
    return (
        <div>
            <h1 className="mt-8 font-bold text-2xl">{tittle}</h1>
            {items.map((item, index) => (
                <MenuItemSubContent key={index} title={item.title} description={item.description} />
            ))}
        </div>
    );
}