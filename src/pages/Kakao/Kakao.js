import React, { useState, useEffect } from 'react';
import './Kakao.scss';
import KakaoCard from '../../components/KakaoCard/KakaoCard';

/**********************************************************
  
  현재는 카드 뷰 / 리스트 뷰가 구현되어 있지만,
  중복되는 구조가 반복되어서 코드가 불필요하게 길어진 것을 확인할 수 있습니다.
  
  오늘 배운 컴포넌트 재사용 개념을 활용해 반복되는 구조를 컴포넌트화하고
  props에 따라서 다른 UI를 보여줄 수 있도록 구현해 주세요!

  - props로 전달할 데이터를 mock data 혹은 상수 데이터를 담고 있는
    js 파일을 생성해서 관리해 주세요!
  - 컴포넌트를 분리하면 그에 따라 scss도 분리해 주세요!

***********************************************************/

const Kakao = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const checkStatus = res => {
      if (!res.ok) throw new Error(`Again Check Status: ${res.status}`);
      return res.json();
    };

    const uploadPostData = data => {
      setData([...data]);
    };

    const getPosts = url =>
      fetch(url, {
        method: 'GET',
      });

    getPosts('/data/data1.json')
      .then(checkStatus)
      .then(uploadPostData)
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="kakao">
      {data.map(item => (
        <KakaoCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Kakao;
