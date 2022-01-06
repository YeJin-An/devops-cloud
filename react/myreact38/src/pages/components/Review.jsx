import Rating from './Rating';
import { useState } from 'react';

function Review({ review, handleEdit, handleDelete }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleClickedEditButton = () => {
    if (handleEdit) {
      handleEdit();
    } else {
      console.warn('[Review] handleEdit 속성값이 지정되지 않았습니다.');
    }
  };

  const handleClickedDeleteButton = () => {
    // handleDelete 속성값이 없을 때에 대한 안내가 없기에, 비추천
    // handleDelete && handleDelete();

    if (handleDelete) {
      handleDelete();
    } else {
      console.warn('[Review] handleDelete 속성값이 지정되지 않았습니다.');
    }
  };

  return (
    <div
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
      className="bg-white my-1 p-1 pt-3 border-2 border-green-600  relative"
    >
      {showMenu && (
        <div className="text-xs absolute top-0 right-0">
          <span
            onClick={handleClickedEditButton}
            className="text-green-700 hover:bg-green-300 cursor-pointer mr-1"
          >
            수정
          </span>
          <span
            onClick={handleClickedDeleteButton}
            className="text-red-700 hover:bg-red-300 cursor-pointer"
          >
            삭제
          </span>
        </div>
      )}
      {review.content}
      <Rating score={review.score} />
    </div>
  );
}

export default Review;
