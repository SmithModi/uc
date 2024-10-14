import {
  Box,
  Grid,
  Flex,
  Button,
  Spacer,
  Show,
  Hide,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Center
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";



export default function Navbar() {

  
  const handleSideBar = () => {};

  return (
    <Flex
      w="full"
      alignItems="center"
      gap="2"
      p={5}
      pl="40px"
      pr="40px"
      borderRadius={16}
      justifyContent="space-between"
      bg="#fcebce"
      color={"black"}
    >
    <Box>
      
      
    <Link to="/">
      <img
        className="logo"
        src="/favicon.svg"  // Accessing from public folder
        alt="Favicon"
        height={70}
        width={150}
      />
    </Link>




      </Box>
      <Spacer />
      <Show breakpoint="(min-width: 1000px)">
        <Flex gap="5">
         <Center>
            <Link to="/"> Home</Link>
          </Center>
          <Center>
            <Link to="/Blog"> Blog</Link>
          </Center>
          <Center>
            <Link to="/about">About</Link>
          </Center>
          <Center>  
            <Link to="/contact">Contact us</Link>
          </Center>

          <Link>
            
            <Center> 
              
            </Center>
          </Link>
        </Flex>
      </Show>
      <Hide above="1000px">
        <Popover>
          <PopoverTrigger>
            <Button>
              <HamburgerIcon w={8} h={8} onClick={handleSideBar} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />

            <PopoverBody color="black">
              <Grid gap="20px" p={8} >
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact us</Link>

              </Grid>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Hide>
      <Box></Box>
    </Flex>
  );
}
