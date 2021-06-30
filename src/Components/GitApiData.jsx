import axios from "axios";
import React from "react";
import reactDom from "react-dom";
import GitApiCard from "./GitApiCard";
import { getApiUser } from "./gitApiUser";
import styles from "./GirApiUser.module.css";

const GitApiData = () => {
  const [query, setQuery] = React.useState("masai");
  const [user, setUser] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [pageNum, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState("");

  React.useEffect(() => {
    handleClick();
  }, [pageNum]);

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const handleClick = () => {
    setIsLoading(true);
    getApiUser(query)
      .then((res) => {
        const { items, total_count } = res.data;
        const total_pages = Math.ceil(total_count / 20);
        setUser(items);
        setTotalPage(total_pages);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  };

  //  axios(config).then(res => console.log(res)).catch(e=>console.log(e))
  // }
  return (
    <>
      {isLoading && <p> Loading...</p>}
      {isError && <p> Errorrrrrr</p>}
      <input
        type="text"
        name="user"
        id="user"
        value={query}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>

      {/* {
           new Array(totalPage).fill(0).map((_,index) =>
            <button key = {index} onClick = {() => setPage(index+1)}>{index+1}</button>)
        } */}
      {/* 
    <div>
        {
            user?.map((item)=>(
                <div key={item.id}> {item.login}</div>
            ))
        }
    </div> */}
      <div className={styles.wrapDiv}>
        {user?.map((item) => (
          <GitApiCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default GitApiData;
