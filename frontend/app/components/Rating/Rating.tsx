import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';

type Props = {
    rating:number,
}

const Rating:React.FC<Props> = ({rating}) => {
    const star = [];

    for(let i = 1; i <= 5 ; i++){
        if(i <= rating){
            star.push(
                <AiFillStar key={i} size={20} color="#f6b100" className="mr-2 cursor-pointer"/>
            )
        }else{
            //i === Math.ceil(rating) && (Number.isInteger(rating))
            if(i - rating < 0.6){
                star.push(
                    <BsStarHalf key={i} size={20} color="#f6b100" className="mr-2 cursor-pointer"/>
                )
            }else{
                star.push(
                    <AiOutlineStar key = {i} size={20} color="#f6b100" className="mr-2 cursor-pointer"/>
                )
            }
        }
    }

    return (
        <div className='flex mt-1 800px:mt-0 800px:ml-0'>
            {star}
        </div>
    );
};

export default Rating;