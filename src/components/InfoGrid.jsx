import "./InfoGrid.css";

function InfoGrid({ items, columns = 2 }) {
  return (
    <ul
      className="info-grid"
      data-col={columns}
    >
      {items.map((item) => (
        <li
          key={item.id}
          className="info-grid__item"
        >
          <img
            className="info-grid__icon"
            src={item.icon}
            alt=""
          />

          <h3 className="info-grid__title">
            {item.title}
          </h3>

          {item.text && (
            <p className="info-grid__text">
              {item.text}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

export default InfoGrid;