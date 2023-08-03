import {
  BellIcon,
  HamburgerIcon,
  LinkIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { IoIosNotifications } from "react-icons/io";
import { BsBuildings, BsCurrencyDollar } from "react-icons/bs";
import { FaUserSecret, FaRegHandshake, FaUsers, FaUserAlt } from "react-icons/fa";
import { RiMoneyPoundCircleLine, RiNotification4Line, RiUserSettingsLine } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import { TfiClose } from "react-icons/tfi";
import {CgMenuMotion} from 'react-icons/cg'
import { useState,useEffect,useRef } from "react";
import ReactLogo from '../public/next.svg';



const navIcons ={
 fontSize: '1.5em',
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'center',
}



const itemStyles = {
  color: "white",
  fontSize: "1em",
  padding: "5px",
  bg: "#78B8EA",
  ":hover": {
    color: "white",
    bg: "#597086",
  },
  ":active": {
    color: "white",
    bg: "#597086",
  },
};

const iconStyles = {
  marginRight: "20px",
  fontSize: "1.5em",
};

const Navbar = () => {
  return (
    <Stack
      direction="row"
      h="40px"
      bgColor="#FFFFFF"
      boxShadow="5px 5px 5px"
      pl="20px"
      display="flex"
      alignItems="center"
      spacing={7}
      pr="20px"
      justifyContent="space-between"
    >
      <Heading as="h3" size="xs" >
        Hello Obi
            
    </Heading>
      <InputGroup size='xs' w='600px' ml='auto' mr='auto'>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          type="text"
          placeholder="Search"
          borderRadius="20px"
          bg="#F5F5F5"
        />
      </InputGroup>
      <Stack direction="row" alignItems="center">
        <IconButton
          variant='unstyled'
          sx={navIcons}
          aria-label="Notification"
          icon={<RiNotification4Line/>}
        />
        <Avatar size="xs" />
        <IconButton
          variant='unstyled'
          sx={navIcons}
          aria-label="Logout"
          icon={<BiLogOut/>}
        />
      </Stack>
    </Stack>
  );
};

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const sidebarRef = useRef(null);

  useEffect(() => {
    // add event listener to the window object to listen for clicks outside the sidebar
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    // cleanup function to remove event listener
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);


  const toggleForms = (event) => {
    event.stopPropagation()
    setIsVisible(!isVisible);
  };

  return (
    <div ref={sidebarRef}>
      {isVisible ? (
        <Flex alignItems="center" justifyContent="right">
          <IconButton
            _hover={{ color: "#ABCDEF", backgroundColor: "white" }}
            variant=""
            color="white"
            fontSize='1.5em'
            aria-label="Hamburger Menu"
            icon={<CgMenuMotion />}
            textAlign="right"
            onClick={(event) => toggleForms(event)}
            />
        </Flex>
      ) : (
        <Flex alignItems="center" justifyContent="center">
          <IconButton
            _hover={{ color: "#ABCDEF", backgroundColor: "white" }}
            variant=""
            fontSize='1.5em'
            color="white"
            aria-label="Hamburger Menu"
            icon={<HamburgerIcon />}
            textAlign="right"
            onClick={(event) => toggleForms(event)}
            />
        </Flex>
      )}

      {isVisible ? (
        <List as="nav" spacing={0.5}>
          <ListItem sx={itemStyles}>
            <NextLink href="/dashboard" className="sideLinks mRight">
            <Image src="dashboard.svg" mr="20px" boxSize='16px'/>
              Dashboard
            </NextLink>
          </ListItem>
          <ListItem sx={itemStyles}>
            <NextLink href="/users" className="sideLinks mRight">
            <ListIcon as={FaUserAlt} mr='20px' />
              Users
            </NextLink>
          </ListItem>
          <ListItem sx={itemStyles}>
            <NextLink href="/assets" className="sideLinks mRight">
            <Image src="assets-icon.svg" mr="20px" boxSize='16px'/>
              Assets
            </NextLink>
          </ListItem>

          <ListItem sx={itemStyles}>
            <NextLink href="/assetsmanagers" className="sideLinks mRight">
            <Image src="assets-manager-icon.svg" mr="20px" boxSize='16px'/>
              Assets Managers
            </NextLink>
          </ListItem>

          <ListItem sx={itemStyles}>
            <NextLink href="/collaborators" className="sideLinks mRight">
            <Image src="collaborators-icon.svg" mr="20px" boxSize='16px'/>
              Collaborators
            </NextLink>
          </ListItem>

          <ListItem sx={itemStyles}>
            <NextLink href="/collaborators" className="sideLinks mRight">
            <ListIcon as={FaUserSecret} mr='20px' />
              Facility Managers
            </NextLink>
          </ListItem>
          <ListItem sx={itemStyles}>
            <NextLink href="/consumers" className="sideLinks mRight">
            <ListIcon as={FaUsers} mr="20px" />
              Consumers
            </NextLink>
          </ListItem>

          <ListItem sx={itemStyles}>
            <NextLink href="/notifications" className="sideLinks mRight">
              <ListIcon as={IoIosNotifications} mr="20px" />
              Notifcations
            </NextLink>
          </ListItem>

          <ListItem sx={itemStyles}>
            <NextLink href="/account" className="sideLinks mRight">
            <ListIcon as={BsCurrencyDollar} mr='20px' />
              Accounts
            </NextLink>
          </ListItem>

          <ListItem sx={itemStyles}>
            <NextLink href="/profile" className="sideLinks mRight">
              <ListIcon as={RiUserSettingsLine} mr="20px" />
              Profile Settings
            </NextLink>
          </ListItem>
        </List>
      ) : (
        <List as="nav" spacing={0.5} >
          <ListItem sx={itemStyles}>
            <NextLink href="/dashboard" className="sideLinks">
            <Image src="dashboard.svg" sx={iconStyles}/>
            </NextLink>
          </ListItem>
          <ListItem sx={itemStyles}>
            <NextLink href="/users" className="sideLinks">
            <ListIcon as={FaUserAlt} sx={iconStyles} />
            </NextLink>
          </ListItem>
          <ListItem sx={itemStyles}>
            <NextLink href="/assets" className="sideLinks">
            <Image src="assets-icon.svg" sx={iconStyles}/>
            </NextLink>
          </ListItem>

          <ListItem sx={itemStyles}>
            <NextLink href="/asset-managers" className="sideLinks">
            <Image src="assets-manager-icon.svg" sx={iconStyles}/>
            </NextLink>
          </ListItem>

          <ListItem sx={itemStyles}>
            <NextLink href="/collaborators" className="sideLinks">
            <Image src="collaborators-icon.svg" sx={iconStyles}/>
            </NextLink>
          </ListItem>

          <ListItem sx={itemStyles}>
            <NextLink href="/facility-managers" className="sideLinks">
            <ListIcon as={FaUserSecret} sx={iconStyles} />
            </NextLink>
          </ListItem>

          <ListItem sx={itemStyles}>
            <NextLink href="/consumers" className="sideLinks">
            <ListIcon as={FaUsers} sx={iconStyles} />
            </NextLink>
          </ListItem>

          <ListItem sx={itemStyles}>
            <NextLink href="/notifications" className="sideLinks">
              <ListIcon as={IoIosNotifications}  sx={iconStyles}/>
            </NextLink>
          </ListItem>

          <ListItem sx={itemStyles}>
            <NextLink href="/account" className="sideLinks">
              <ListIcon as={BsCurrencyDollar} sx={iconStyles} />
            </NextLink>
          </ListItem>

          <ListItem sx={itemStyles}>
            <NextLink href="/profile" className="sideLinks">
              <ListIcon as={RiUserSettingsLine} sx={iconStyles} />
            </NextLink>
          </ListItem>
        </List>
      )}
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <Grid
      templateAreas={`"nav header"
                "nav main"`}
      gridTemplateRows={"40px 1fr "}
      gridTemplateColumns={"auto 1fr"}
      h="100vh"
      fontWeight="normal"
    >
      <GridItem bg="#F8FAFB" area={"header"}>
        <Navbar />
      </GridItem>
      <GridItem bg="#5DADEC" area={"nav"}>
        <Sidebar />
      </GridItem>
      <GridItem pl="2" pr='2' bg="#F5F5F5" area={"main"}>
        {children}
      </GridItem>
    </Grid>
  );
};

export default Layout;
