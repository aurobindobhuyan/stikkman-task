import React from "react";

interface Props {
  search: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: boolean;
  toggleRadio: () => void;
  handleCreateCourse: () => void;
}

const ContainerHeader: React.FC<Props> = ({
  search,
  handleSearch,
  value,
  toggleRadio,
  handleCreateCourse,
}) => {
  return (
    <div className="container-header">
      <input
        className="user-input"
        placeholder="Search Author"
        type="string"
        value={search}
        onChange={handleSearch}
      />
      <label className="switch">
        <input type="checkbox" checked={value} onChange={toggleRadio} />
        <span className="slider"></span>
      </label>
      <button onClick={handleCreateCourse}>Create Course</button>
    </div>
  );
};

export default ContainerHeader;
