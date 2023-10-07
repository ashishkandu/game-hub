import { HStack, ListItem, Skeleton, SkeletonText } from '@chakra-ui/react';

const GenreListItemSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <HStack>
        <Skeleton boxSize="32px" borderRadius={8} />
        <SkeletonText width="20" noOfLines={1} />
      </HStack>
    </ListItem>
  );
};

export default GenreListItemSkeleton;
