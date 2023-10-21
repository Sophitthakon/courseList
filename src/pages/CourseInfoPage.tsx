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
<<<<<<< HEAD
      <Box border="1px solid black" p="20px" borderRadius="16px" bgColor='green'>
=======
      <Box border="1px solid black" p="20px" borderRadius="16px" bgColor="red">
>>>>>>> 68542e0274fa96af37f941297c2e05d0dac18def
        <p> name: {syllabus.name}</p>
        <p> hour: {syllabus.hour} </p>
        <p> description: {syllabus.description} </p>
      </Box>
    );
  });

  return <h1> {mySyllabus} </h1>;
};

export default CourseInfoPage;
