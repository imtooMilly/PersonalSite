import React from 'react';
import { useEffect } from 'react';
import { Box, Text, Icon, Flex, Image, Heading, Tabs, TabList, TabPanel, TabIndicator, Tab, TabPanels, Button, Card, CardBody, List, ListItem, Link, Stack, Divider, Container, CardFooter, CardHeader } from '@chakra-ui/react';
import headshot from './pics/headshot.jpg';
import folder from './icons/folder.svg'
import star from './icons/star.svg'
import linkedIn from './icons/linkedin.svg'
import './style.css';

const Page = () => {

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        }, { threshold: 0.1 });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach(el => observer.observe(el));

        return () => {
            hiddenElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <div className='sections'>
            <section className='hidden'>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' minH='90vh'>
                <Text fontSize='30px'>Hi, my name is</Text>
                <Text fontSize="60px" color='#03346E'>Milton Morris.</Text>
                <Text fontSize="50px" color='#6EACDA'>I am a Software Engineer and Full stack Developer</Text>
            </Box>
            </section>
                
            <section className='hidden'>
            <Box class='hidden' display='flex' flexDirection='column' justifyContent='center' alignItems='center' minH='120vh' color="#E2E2B6">
                <Heading as="h2" fontSize="40px" textAlign="center" color="#6EACDA">About Me</Heading>
                <br/>
                <Image src={headshot} boxSize="500px" borderRadius="lg" mt={5} />
                <br/>
                <Text mt={5} color='#233c53'>Computer Science B.S | University at Buffalo Student</Text>
                <br/>
                <Text fontSize="20px" mt={5} maxW="800px" color="#6EACDA">
                    Hello! My name is Milton, a student currently pursuing a degree in Computer Science at the University at Buffalo. 
                    I find my true joy at the intersection of gaming, programming, and problem-solving. 
                    As a fervent gamer, coding enthusiast, and creative problem solver, 
                    I'm on a mission to fuse my passions into meaningful tech solutions. 
                    I am interested in looking into machine learning, software engineering, 
                    and cybersecurity for future career paths. 
                    My skill set includes proficiency in languages such as JavaScript, Python, and C, 
                    as well as experience with web development technologies like HTML, CSS, and ReactJS, 
                    and even experience with MySQL and PHP.
                </Text>
            </Box>
            </section>

            <section className='hidden'>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' minH='50vh'>
                <Heading as="h2" fontSize="40px" textAlign="center" color="#6EACDA">Skills</Heading>
                <br/>
                <Tabs position='relative' variant='unstyled'>
                    <TabList>
                        <Tab>One</Tab>
                        <Tab>Two</Tab>
                        <Tab>Three</Tab>
                    </TabList>
                    <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
                    <TabPanels>
                        <TabPanel><p>one!</p></TabPanel>
                        <TabPanel><p>two!</p></TabPanel>
                        <TabPanel><p>three!</p></TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
            </section>

            <section className='hidden'>
            <Box display='grid' justifyContent='center' alignItems='center' minH='50vh'>
            <Heading as="h2" fontSize="40px" textAlign="center" color="#6EACDA">Projects</Heading>
            <br/>
                <Box display='grid' gridGap='40px' gridTemplateColumns='repeat(3,1fr)' maxW='1200px'>

                    <Card maxW='sm' id='card' bg='#031d35' alignItems='center'>
                        <CardHeader textAlign='center' display='flex'>
                            <Image src={folder} marginRight='10px' />
                            <Heading size='md' color='#6EACDA'>Nize</Heading>
                        </CardHeader>
                        <CardBody textAlign='center'>
                            <Stack mt='6' spacing='3'>
                                <br/>
                                <Text color='#90b9da'>a Calendar app, to-do list, and file storage all in one, what more could a student want?</Text>
                                <br/>
                                <Text color='#233c53'>PHP <Image src={star}/> ReactJS <Image src={star}/> MySQL</Text>
                            </Stack>
                        </CardBody>
                        <Divider borderColor="white" borderWidth="2px" mt="4" mb="4" />
                        <CardFooter textAlign='center'>
                            <Button variant='solid' colorScheme='blue'><Link color='#90b9da' href='https://github.com/imtooMilly/Nize' textDecoration="none">Visit</Link></Button>
                        </CardFooter>
                    </Card>

                    <Card maxW='sm' id='card' bg='#031d35'>
                        <CardBody>
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>In Progress</Heading>
                                <br/>
                                <Text>To-Do</Text>
                            </Stack>
                        </CardBody>
                        <Divider/>
                        <CardFooter>
                            <Button variant='solid' colorScheme='blue' id='visit-btn'><Link href='/'>Visit</Link></Button>
                        </CardFooter>
                    </Card>

                    <Card maxW='sm' id='card' bg='#031d35'>
                        <CardBody>
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Web Application</Heading>
                                <br/>
                                <Text>To-do</Text>
                            </Stack>
                        </CardBody>
                        <Divider borderColor="white" borderWidth="2px" mt="4" mb="4" />
                        <CardFooter>
                            <Button variant='solid' colorScheme='blue' id='visit-btn'><Link href='/'>Visit</Link></Button>
                        </CardFooter>
                    </Card>
                </Box>
            </Box>
            </section>

            <section className='hidden'>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' minH='100vh'>
            <Heading as="h2" fontSize="40px" textAlign="center" color="#6EACDA">Contact Me</Heading>
            <br/>
                <Container>
                    <Box>
                        <List>
                            <ListItem>Primary email: milmor122@gmail.com</ListItem>
                            <ListItem>Secondary email: morris56@buffalo.edu</ListItem>
                            <ListItem>Phone: 516-984-5387</ListItem>
                        </List>
                    </Box>
                </Container>
            </Box>
            </section>
        </div>
    )
};

export default Page;