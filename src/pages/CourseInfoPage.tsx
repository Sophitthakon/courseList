import { mockData } from "../mock/course";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const CourseInfoPage: React.FC = () => {
  const { id } = useParams();

  if (!id || Number(id) >= mockData.length) {
    return (
      <>
        <h1> invalid course id </h1>
      </>
    );
  }

  const course = mockData[Number(id) - 1];
  const mySyllabus = course.syllabus.map((syllabus) => {
    return (
      <Box border="1px solid black" p="20px" borderRadius="16px" bgColor='blue'>
        <p> name: {syllabus.name}</p>
        <p> hour: {syllabus.hour} </p>
        <p> description: {syllabus.description} </p>
      </Box>
    );
  });

  return <h1> {mySyllabus} </h1>;
};

export default CourseInfoPage;
