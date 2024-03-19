import React from "react";
import { ICourse } from "../../interface";
import TableRow from "./TableRow";
import "./table.css";

interface Props {
  courses: ICourse[];
}

const ListingTable: React.FC<Props> = ({ courses }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr className="table-row">
            <th style={{ flex: 0.2 }}>Thumbnail</th>
            <th style={{ flex: 1, justifyContent: "flex-start" }}>Name</th>
            <th style={{ flex: 0.5 }}>Author</th>
            <th style={{ flex: 0.5 }}>CreatedAt</th>
            <th style={{ flex: 0.5 }}>Last Modified</th>
          </tr>
        </thead>

        <tbody>
          {courses.length > 0 ? (
            <>
              {courses.map((course) => {
                return <TableRow key={course._id} {...course} />;
              })}
            </>
          ) : (
            <tr style={{ textAlign: "center" }}>
              <td colSpan={10}>No Rows</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListingTable;
