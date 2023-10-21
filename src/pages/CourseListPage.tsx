import { Container, SimpleGrid } from "@chakra-ui/react";
import CourseCard from "../components/CourseCard";
import { mockData } from "../mock/course";

const CourseListPage: React.FC = () => {
  return (
    <Container maxW={"5xl"}>
      <SimpleGrid columns={2} spacing={10}>
        {mockData.map((course) => {
          return (
            <CourseCard
              id={course.id}
              title={course.title}
              professor={course.professor}
            />
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default CourseListPage;
