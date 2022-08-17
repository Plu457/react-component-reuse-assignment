import { useState, useEffect } from 'react';
import KakaoList from './KakakoList';

const KakaoCard = ({ cardImg, cardStatus, cardTitle, cardText, listCheck }) => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    const checkStatus = res => {
      if (!res.ok) throw new Error(`Again Check Status: ${res.status}`);
      return res.json();
    };

    const uploadPostData = data => {
      setCard([...data]);
    };

    const getPosts = url =>
      fetch(url, {
        method: 'GET',
      });

    getPosts('/data/data2.json')
      .then(checkStatus)
      .then(uploadPostData)
      .catch(error => console.error(error));
  }, []);

  return (
    <article className="card">
      <div>
        <img alt="card" src={cardImg} />
      </div>
      <div className="cardMain">
        <div>
          <span className={cardStatus}>{cardStatus}</span>
        </div>
        <h3>{cardTitle}</h3>
        <div>
          <p>{cardText}</p>
        </div>
      </div>
      <div>
        <ul>
          {listCheck.hasList &&
            card.map(item => (
              <KakaoList key={item.id} {...item} {...listCheck} />
            ))}
        </ul>
      </div>
    </article>
  );
};

export default KakaoCard;
