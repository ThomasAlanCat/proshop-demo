import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
//import { productsApiSlice } from "../slices/productsApiSlice";

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      setKeyword("");
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type="text"
        name="q"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search products..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="outline-light" className="p-2 ms-2">
        search
      </Button>
    </Form>
  );
};
export default SearchBox;
