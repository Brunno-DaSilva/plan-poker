import NextImage from "next/image";
import NextLink from "next/link";
import {
  List,
  Box,
  ListIcon,
  ListItem,
  Center,
  Divider,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";

import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
  MdOutlineLooks,
} from "react-icons/md";

const NAV_MENU = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const MUSIC_MENU = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorite",
    icon: MdFavorite,
    route: "/favorite",
  },
];

const playlists = new Array(25).fill(1).map((_, i) => `Play List ${i + 1}`);

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      bg="#f4f4f4"
      paddingX="5px"
      color="gray"
      bgGradient="linear(to-t, #ffffff, #f3f2f1)"
      borderRight="2px solid #b5ffff"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingY="20px">
          <NextImage src="/blogo-gray.png" width={66} height={108} />
        </Box>

        <Box marginBottom="20px">
          <List spacing={2}>
            {NAV_MENU.map((menu) => {
              return (
                <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                  <LinkBox>
                    <NextLink href={menu.route} passHref>
                      <LinkOverlay>
                        <ListIcon
                          as={menu.icon}
                          color="#868e8f"
                          marginRight="20px"
                        />
                        {menu.name}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {MUSIC_MENU.map((music) => {
              return (
                <ListItem paddingX="20px" fontSize="16px" key={music.name}>
                  <LinkBox>
                    <NextLink href={music.route} passHref>
                      <LinkOverlay>
                        <ListIcon
                          as={music.icon}
                          color="#868e8f"
                          marginRight="20px"
                        />
                        {music.name}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Divider color="gray.400" />

        <Box height="66%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playlists.map((playlist) => {
              return (
                <ListItem paddingX="20px" key={playlist}>
                  <LinkBox>
                    <NextLink href="/" passHref>
                      <LinkOverlay>{playlist}</LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
