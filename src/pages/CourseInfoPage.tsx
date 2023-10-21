import { useEffect } from "react";
import { mockData } from "../mock/course";
import { useParams, useSearchParams } from "react-router-dom";

const CourseInfoPage: React.FC = () => {
  const { id, jake } = useParams();
  const [searchParam, setSearchParam] = useSearchParams();

  useEffect(() => {
    setSearchParam((param) => {
      param.set("aom", "kuyy");
      return param;
    });
  }, [setSearchParam]);

  if (!id || Number(id) >= mockData.length) {
    return (
      <>
        <h1> {jake} </h1>
        <h1> {searchParam.get("show") == "true" ? "true" : "false"}</h1>
        <h1> {searchParam.get("hello")}</h1>
        <h1> {Number(searchParam.get("item"))}</h1>
      </>
    );
  }

  const course = mockData[Number(id) - 1];

  return <h1> {JSON.stringify(course)} </h1>;
};

export default CourseInfoPage;
