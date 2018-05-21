import axios from "axios";

export const createMemo = ({title,body}) => axios.post('/memo', {title,body});

// 역순으로 최근 작성된 포스트 20개를 불러온다.
export const getInitialMemo = () => axios.get('/memo/?_sort=id&_order=DESC&_limit=20');

// 신규 로딩 API :  cursor기준 최근 작성된 메모를 불러온다.
// cursor (memo 의 id)를 파라미터로 받아와서 그 값보다 큰 id 를 가진 메모들을 불러옵니다.
export const getRecentMemo = (cursor) => axios.get(`memo/?id_gte=${cursor+1}&_sort=id&_order=DESC&`);


export const updateMemo = ({id, memo:{title, body}}) => axios.put(`/memo/${id}`, {title,body});
export const deleteMemo = (id) => axios.delete(`/memo/${id}`);

// endCursor 기준 이전 작성된 메모를 불러온다
export const getPreviousMemo = (endCursor) => axios.get(`/memo/?_sort=id&_order=DESC&_limit=20&id_lte=${endCursor-1}`);