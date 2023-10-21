import { Text, Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  professor: string;
  id: string;
}

const CourseCard: React.FC<Props> = ({ title, professor, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/courses/${id}`);
  };
  return (
    <Card onClick={handleClick} cursor="pointer" _hover={{ bgColor: "red" }}>
      <CardHeader>
        <Heading size="md"> {title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{professor}</Text>
      </CardBody>
    </Card>
  );
};

export default CourseCard;
