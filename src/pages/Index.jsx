import { Container, Box, Text, VStack, HStack, Image, Link, Button, Input, Textarea, FormControl, FormLabel, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const books = [
  {
    title: "Book Title 1",
    author: "Author 1",
    description: "Short description of Book 1.",
    cover: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjAxfGVufDB8fHx8MTcxNjQyMTkwMXww&ixlib=rb-4.0.3&q=80&w=1080",
    link: "https://www.amazon.com/dp/example1",
  },
  {
    title: "Book Title 2",
    author: "Author 2",
    description: "Short description of Book 2.",
    cover: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjAyfGVufDB8fHx8MTcxNjQyMTkwMXww&ixlib=rb-4.0.3&q=80&w=1080",
    link: "https://www.amazon.com/dp/example2",
  },
  // Add more books as needed
];

const Index = () => {
  return (
    <Container maxW="container.xl" bg="black" color="gold" p={4}>
      {/* Homepage */}
      <Box as="header" textAlign="center" mb={8}>
        <Image src="https://images.unsplash.com/photo-1510759591315-6425cba413fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWdpYyUyMHByaW50JTIwcHJvZHVjdGlvbiUyMGxvZ298ZW58MHx8fHwxNzE2NDIyMjIxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Magic Print Production Logo" mx="auto" mb={4} />
        <Text fontSize="3xl" fontWeight="bold">
          Magic Print Production
        </Text>
        <Text fontSize="lg">Creating Magic with Every Print</Text>
      </Box>

      <VStack spacing={8} mb={16}>
        <Text fontSize="2xl" fontWeight="bold">
          Featured Books
        </Text>
        <HStack spacing={8} wrap="wrap" justify="center">
          {books.map((book, index) => (
            <Box key={index} textAlign="center" maxW="200px">
              <Image src={book.cover} alt={book.title} mb={4} />
              <Text fontSize="lg" fontWeight="bold">
                {book.title}
              </Text>
              <Text fontSize="md">{book.author}</Text>
              <Text fontSize="sm" mb={4}>
                {book.description}
              </Text>
              <Link href={book.link} isExternal>
                <Button colorScheme="yellow" variant="outline">
                  View on Amazon
                </Button>
              </Link>
            </Box>
          ))}
        </HStack>
      </VStack>

      {/* Books Section */}
      <Box as="section" mb={16}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          All Books
        </Text>
        <VStack spacing={8}>
          {books.map((book, index) => (
            <HStack key={index} spacing={8} align="start">
              <Image src={book.cover} alt={book.title} boxSize="100px" />
              <VStack align="start">
                <Text fontSize="lg" fontWeight="bold">
                  {book.title}
                </Text>
                <Text fontSize="md">{book.author}</Text>
                <Text fontSize="sm">{book.description}</Text>
                <Link href={book.link} isExternal>
                  <Button colorScheme="yellow" variant="outline">
                    View on Amazon
                  </Button>
                </Link>
              </VStack>
            </HStack>
          ))}
        </VStack>
      </Box>

      {/* About Us */}
      <Box as="section" mb={16}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          About Us
        </Text>
        <Text fontSize="md">Magic Print Production is dedicated to bringing the magic of books to life. Our mission is to create captivating and inspiring books that leave a lasting impression on readers. Founded with a passion for storytelling, we strive to produce high-quality books that resonate with audiences of all ages.</Text>
      </Box>

      {/* Contact Us */}
      <Box as="section" mb={16}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Contact Us
        </Text>
        <VStack spacing={4} align="start">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Your Name" />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Your Email" />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Your Message" />
          </FormControl>
          <Button colorScheme="yellow" variant="outline">
            Send Message
          </Button>
        </VStack>
        <HStack spacing={4} mt={8}>
          <Link href="https://facebook.com" isExternal>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" colorScheme="yellow" variant="outline" />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" colorScheme="yellow" variant="outline" />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" colorScheme="yellow" variant="outline" />
          </Link>
        </HStack>
      </Box>

      {/* Blog/News Section */}
      <Box as="section" mb={16}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Blog & News
        </Text>
        <Text fontSize="md">Stay tuned for updates about new releases and author insights.</Text>
      </Box>

      {/* Newsletter Signup */}
      <Box as="section" mb={16}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Newsletter Signup
        </Text>
        <VStack spacing={4} align="start">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Your Email" />
          </FormControl>
          <Button colorScheme="yellow" variant="outline">
            Subscribe
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
