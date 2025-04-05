interface PopularCategoriesCardProps{
    title?: string,
    count?: number 
}

export function PopularCategoriesCard({title= "Undefined", count = 0}: PopularCategoriesCardProps){
    return (
        <>
            <div className="p-2 shadow-md flex flex-col gap-1 bg-white">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-[.9rem] text-gray-700">
                   {count == 1} <span>{count}</span> profissionals
                </p>
            </div>
           
        </>
    )
}