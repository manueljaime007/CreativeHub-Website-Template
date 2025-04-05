interface TalentCardProps{
    imageUrl: string,
    talentName: string,
    role: string
    rate: number
    reviews: number,
    price: number
}
export function TalentCard({imageUrl, talentName, role, rate, reviews = 0, price = 0} : TalentCardProps){
    return(
        <article>
            <div className="flex flex-col gap-2 p-2">
                <div className="flex gap-2">
                    <div>
                        <img src={imageUrl} 
                            alt="person_1" height="50" width="50" className="rounded-[50%]" 
                        />
                    </div>
                    <div>
                        <h4 className="text-[.9rem] font-semibold">{talentName}</h4>
                        <h5 className="text-[.8rem]">{role}</h5>
                    </div>
                </div>
                <p className="text-[.8rem]">
                    <span className="text-[.9rem] text-gray-700"><i className="fas fa-star text-yellow-400"></i></span>
                    <strong>{rate}</strong> <span>({reviews} reviews)</span>
                </p>
                <div className="flex justify-between items-center">
                    <span className="text-[.8rem]">${price}</span>
                    <span className="text-[.8rem] text-teal-600">Available Now</span>
                </div>
            </div>
        </article>
    )
}