import './KakaoList.scss';
const KakaoList = ({ itemImg, itemName, itemPrice, styling }) => {
  return (
    <li className={`item ${styling}`}>
      <img alt="item" src={itemImg} />
      <div>
        <div>
          <p>{itemName}</p>
          <p className="price">{itemPrice}원</p>
        </div>
        <button className="button" />
      </div>
    </li>
  );
};

export default KakaoList;
