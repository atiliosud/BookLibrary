import "devextreme/dist/css/dx.light.css";
import React, { useState } from "react";
import {
  DataGrid,
  Column,
  Pager,
  Paging,
  Scrolling,
} from "devextreme-react/data-grid";
import {
  Autocomplete,
  Button,
  SelectBox,
} from "devextreme-react";
import "./App.scss";

const books = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
  { id: 3, title: "Book 3", author: "Author 3" },
  // add more books here
];

const BooksPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedField, setSelectedField] = useState("title");
  const [selectedItems, setSelectedItems] = useState([]);
  const [filterValue, setFilterValue] = useState([
    ["title", "startswith", "B"],
  ]);
  const [selectedFilterOperation, setSelectedFilterOperation] =
    useState("startswith");
  const [searchField, setSearchField] = useState("title");

  const books = [
    { id: 1, title: "Book 1", author: "Author 1" },
    { id: 2, title: "Book 2", author: "Author 2" },
    { id: 3, title: "Book 3", author: "Author 3" },
    // add more books here
  ];

  const filteredBooks = books.filter((book) => {
    if (searchValue === "") {
      return true;
    } else if (
      book[selectedField].toLowerCase().includes(searchValue.toLowerCase())
    ) {
      return true;
    }
    return false;
  });
  const handleFilterValueChange = (newFilterValue) => {
    setFilterValue(newFilterValue);
  };
  const handleSearchChange = (e) => {
    setSearchValue(e.value);
  };

  const handleFieldChange = (e) => {
    setSelectedField(e.value);
  };

  const handleItemSelect = (e) => {
    setSelectedItems(e.addedItems);
  };

  return (
      <div className="books-page">
          <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <h1 className="books-page__title">Books</h1>
            <Button icon="add" className="books-page__search-button"></Button>
          </div>
      <div className="books-page__filter">
        <SelectBox
          items={["Title", "Author"]}
          value={selectedField}
          onValueChanged={handleFieldChange}
          className="books-page__search-field-select"
          label="Find By"
        />
        <Autocomplete
          label="Search"
          value={searchValue}
          onChange={handleSearchChange}
          className="books-page__search-input"
        />
        <Button icon="search" className="books-page__search-button"></Button>
      </div>
      <DataGrid
        id="data-grid"
        dataSource={filteredBooks}
        showBorders={true}
        keyExpr="id"
        filterValue={filterValue}
        onFilterValueChanged={handleFilterValueChange}
      >
        <div id="filter-builder-container" style={{ display: "none" }}></div>
        <Scrolling mode="virtual" />
        <Paging enabled={false} />
        <Pager showPageSizeSelector={false} showInfo={false} />
        <Column dataField="id" width={70} />
        <Column dataField={searchField} width={200} />
        <Column dataField="author" width={200} />
      </DataGrid>
    </div>
  );
};

export default BooksPage;
