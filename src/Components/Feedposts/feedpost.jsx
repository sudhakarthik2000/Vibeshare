import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { Box, Image } from "@chakra-ui/react";
const Feed = ({ img, username, avatar, caption }) => {
  return (
    <>
      <PostHeader username={username} avatar={avatar} />
      <Box my={1} borderRadius={4} overflow={"hidden"}>
        <Image src={img} alt={username} />
      </Box>
      <PostFooter username={username} caption={caption} />
    </>
  );
};

export default Feed;
