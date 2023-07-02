import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import {useRef, useState, useEffect} from "react";
import "rc-pagination/assets/index.css";
import axios from "axios";
import {BASE_URL} from "../url";

const tableHead = {
  productName: "Product Name",
  productCode: "Code",
  productMrp: "MRP",
  productNlc: "NLC",
  productHtcBp: "HTC BP"
};

function DisplayPosts() {
  const [getAllPostData,setPostData] = useState('');

  useEffect(() => {
    axios.get(`${BASE_URL}/getAllPosts`).then((response) => {
      setPostData(response.data);
    });
  }, []);

  console.log("getAllPostData ++++", getAllPostData)
  
  //const getAllPostData = [{"_id":"6470d0862eb4f90254755822","productName":"LG Washing Machine 850","productCode":"LG850","productMrp":"16500","productNlc":"16250","productHtcBp":"16000","brandName":"LG","categoryName":"Washing Machine","author":"644d211b7a073d60e92e58b3","createdAt":"2023-05-26T15:30:14.094Z","updatedAt":"2023-05-26T15:30:14.094Z","__v":0},{"_id":"6470d03c2eb4f90254755812","productName":"LG FRIDGE 100","productCode":"LG100","productMrp":"17000","productNlc":"17500","productHtcBp":"16500","brandName":"LG","categoryName":"Fridge","author":"644d211b7a073d60e92e58b3","createdAt":"2023-05-26T15:29:00.194Z","updatedAt":"2023-05-26T15:29:00.194Z","__v":0},{"_id":"646e43063e16b4c8195eb991","productName":"Sony TV 9000","productCode":"SONY 9000","productMrp":"20000","productNlc":"19000","productHtcBp":"19500","brandName":"Sony","categoryName":"TV","author":"644d211b7a073d60e92e58b3","createdAt":"2023-05-24T17:01:58.730Z","updatedAt":"2023-05-24T17:01:58.730Z","__v":0}]

  const countPerPage = 25;
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [collection, setCollection] = useState(
    cloneDeep(getAllPostData.slice(0, countPerPage))
  );

  const searchData = useRef(
    throttle(val => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const data = cloneDeep(getAllPostData.filter(item => item.productName.toLowerCase().indexOf(query) > -1).slice(0, countPerPage));
      setCollection(data);
    }, 400)
  );

  useEffect(() => {
    if (!value) {
      updatePage(1);
    } else {
      searchData.current(value);
    }
  }, [value]);

  const updatePage = p => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    let setUpdatedPage;
    setUpdatedPage = cloneDeep(getAllPostData.slice(from, to));
    setCollection(setUpdatedPage);
  };

  const tableRows = rowData => {
    const { key, index } = rowData;
    const tableCell = Object.keys(tableHead);
    const columnData = tableCell.map((keyD, i) => {
      return <td key={i}>{key[keyD]}</td>;
    });

    return <tr key={index}>{columnData}</tr>;
  };
  
  let tableDataValue;
  tableDataValue = collection.map((key, index) => tableRows({ key, index }));

  const tableData = () => {
    return tableDataValue;
  };

  const headRow = () => {
    return Object.values(tableHead).map((title, index) => (
      <td key={index}>{title}</td>
    ));
  };

  return (
    <>
      <div className="search">
        <input
          placeholder="Search Product"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>{headRow()}</tr>
        </thead>
        <tbody className="trhover">{tableData()}</tbody>
      </table>
      <Pagination
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={getAllPostData.length}
      />
    </>
  );
};

export default DisplayPosts