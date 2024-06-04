import { BsThreeDotsVertical } from "react-icons/bs";
import { cards } from "../../data/main/data";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { BiChat, BiLike, BiShare } from "react-icons/bi";
// import Carousell from "../main/Carousel";

const Cards = () => {
  return (
    <div>
      {cards.map((card, ind) => {
        return (
          <div className="card" key={ind}>
            <Card padding="20px" backgroundColor="white" marginBottom="20px">
              <CardHeader padding="0px" backgroundColor="white">
                <Flex backgroundColor="white">
                  <Flex
                    flex="1"
                    gap="4"
                    alignItems="center"
                    flexWrap="wrap"
                    backgroundColor="white"
                  >
                    <Avatar
                      name="Segun Adebayo"
                      src={card.photoUrl}
                      borderRadius="1rem"
                    />
                    <Box backgroundColor="white">
                      <Heading size="sm" backgroundColor="white">
                        {card.artistName}
                      </Heading>
                      <Text backgroundColor="white">{card.tag}</Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={
                      <BsThreeDotsVertical
                        backgroundColor="white"
                        className="dots"
                      />
                    }
                    backgroundColor="white"
                  />
                </Flex>
              </CardHeader>
              <CardBody padding="20px 0" backgroundColor="white">
                <Text backgroundColor="transparent">{card.description}</Text>
              </CardBody>
              <Image objectFit="cover" src={card.url} alt="Chakra UI" />

              <CardFooter backgroundColor="white" padding="0px 0">
                <Button variant="ghost" leftIcon={<BiLike />}>
                  {card.likes}
                </Button>
                <Button variant="ghost" leftIcon={<BiChat />}>
                  {card.comments}
                </Button>
                <Button variant="ghost" leftIcon={<BiShare />}>
                  {card.shares}
                </Button>
              </CardFooter>
            </Card>
          </div>
        );
      })}
      {/* <Carousell cards={cards} /> */}
    </div>
  );
};

export default Cards;
