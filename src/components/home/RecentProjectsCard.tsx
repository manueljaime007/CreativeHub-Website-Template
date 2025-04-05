interface RecentProjectCardProps{
    imgUrl: string, 
    title: string, 
    subtitle: string,
    badge: string,
    price: number
}
export function RecentProjectCard({imgUrl, title, subtitle, badge, price = 0}: RecentProjectCardProps){
    return(
        <article>
            <div>
                <img src={imgUrl} alt="article" className="rounded-t-2xl w-full h-auto" />
            </div>
            <div className="p-3 bg-white rounded-b-2xl">
                <h3 className="font-semibold text-[.9rem] mb-1">{title}</h3>
                <p className="text-[.8rem] mb-3">{subtitle}</p>
                <div className="flex justify-between px-2">
                    <span className="text-[.8rem] bg-gray-100 px-1">{badge}</span>
                    <span className="text-[.8rem] font-semibold">${price},00</span>
                </div>
            </div>
        </article>
    )
}