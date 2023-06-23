import Card from "react-bootstrap/Card";
import { Image } from "react-bootstrap";

const CardPokemon = ({ title, imagePokemon, borderNone, stats }) => {
  const border = borderNone ? "none" : "2px solid #000";

  return (
    <div className="justify-content-center d-flex aling-items-center">
      <Card style={{ width: "auto", border }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Image width="280" src={imagePokemon} />

          {stats?.length > 0 && (
            <ul>
              {stats.map((stat) => (
                <li>{`${stat.stat.name}: ${stat.base_stat}`}</li>
              ))}
            </ul>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardPokemon;
