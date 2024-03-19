import React from "react";
import { ICourse } from "../../interface";
import { Link } from "react-router-dom";

const TableRow: React.FC<ICourse> = ({
  _id,
  name,
  author,
  createdAt,
  thumbnail,
  updatedAt,
}) => {
  return (
    <>
      <tr className="table-row">
        <td style={{ flex: 0.2 }}>
          <div className="img-container">
            <div className="img-div">
              <img src={thumbnail} alt={name} />
            </div>
          </div>
        </td>
        <td
          style={{ flex: 1, justifyContent: "flex-start" }}
          className="link-style"
        >
          <Link to={`/course/${_id}`}>{name}</Link>
        </td>
        <td style={{ flex: 0.5 }}>{author}</td>
        <td style={{ flex: 0.5 }}>
          {new Date(createdAt).toDateString() +
            " " +
            new Date(createdAt).toLocaleTimeString()}
        </td>
        <td style={{ flex: 0.5 }}>
          {new Date(updatedAt).toDateString() +
            " " +
            new Date(updatedAt).toLocaleTimeString()}
        </td>
      </tr>
    </>
  );
};

export default TableRow;
