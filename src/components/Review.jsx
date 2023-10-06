import React from 'react'

const Review = ({review}) => {
  return (
    <div className='review-con'>
        <div className='review-author'> 작성자: {review.author}</div>
        <div className='review-content'>내용 : {review.content}</div>
        <div></div>

    </div>
  )
}

export default Review