import React from "react";
import MyBlock from "./UI/block/MyBlock";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter, limit, setLimit }) => {
  return (
    <MyBlock style={{flexDirection: "row", justifyContent: 'start'}}>
      <MySelect
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue="Number of elements"
        options={[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: 25, name: '25'},
          {value: -1, name: 'show all'},
        ]}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
        defaultValue="Sort by"
        options={[
          { value: "title", name: "By title" },
          { value: "body", name: "By description" },
        ]}
      />

      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search..."
      />
    </MyBlock>
  );
};

export default PostFilter;
