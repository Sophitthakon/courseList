import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  description: string;
}
const CourseDetail: React.FC<Props> = ({ description }) => {
  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      <h1>{description}</h1>
    </Box>
  );
};

export default CourseDetail;
