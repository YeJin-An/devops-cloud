react'

review : 보여줄 review 객체
handleEdit : 인자없는 함수, 수정 버튼 클릭 시에 호출.
handleDelete : 인자 없는 함수, 삭제 버튼 클릭시 호출

onClick = {()=> handleDelete()}

-->

const handleClickedDeleteButton = () => {
// handleDelete && handleDelete( );
if(handleDelete){handleDelete();
else {console.warn("속성값이 지정되지 않음")}}
];

const handleClickedEditButton = () => {
if(handleEdit){handleEdit();
else(handleEdit) {console.warn("속성값 지정 노")}; }
};
