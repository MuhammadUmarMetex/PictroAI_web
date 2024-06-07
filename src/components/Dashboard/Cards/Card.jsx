import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function SnapCard({ img, title, description, alt, linkTo }) {
  return (
    <Link to={linkTo} className="flex-grow-1 ">
      <Card
        style={{ width: "18rem" }}
        className="col-lg-3 col-md-6 my-2 py-3 px-3 rounded-4 generate_img_sec text-white text-center"
      >
        <Card.Img
          variant="top"
          src={img}
          alt={`card img ${alt + 1}`}
          width="100%"
          height="241.9px"
          className="mb-2 rounded"
        />
        <Card.Body>
          <Card.Title style={{ fontSize: "18px" }} className="">
            {title ? title : " "}
          </Card.Title>
          <Card.Text style={{ fontSize: "12px" }} className="fw-3 mx-5 ls-1">
            {description ? description : ""}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default SnapCard;
