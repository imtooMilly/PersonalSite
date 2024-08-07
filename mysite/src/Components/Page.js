import React from 'react';
import { useEffect } from 'react';
import { Box, Text, Flex, Image, Heading, Tabs, TabList, TabPanel, TabIndicator, Tab, TabPanels, Button, Card, CardBody, List, ListItem, Link, Stack, Divider, Container } from '@chakra-ui/react';
import headshot from './pics/headshot.jpg';
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
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' minH='120vh'>
                <Text>Hi, my name is</Text>
                <Text fontSize="60px" color='#03346E'>Milton Morris.</Text>
                <Text fontSize="50px" color='#6EACDA'>I am a Software and Full stack developer</Text>
            </Box>
            </section>
                
            <section className='hidden'>
            <Box class='hidden' display='flex' flexDirection='column' justifyContent='center' alignItems='center' minH='120vh' bg="#021526" color="#E2E2B6">
                <Heading as="h2" fontSize="40px" textAlign="center" color="#E2E2B6">About Me</Heading>
                <Image src={headshot} boxSize="500px" borderRadius="lg" mt={5} />
                <Text mt={5}>Computer Science B.S | University at Buffalo Student</Text>
                <Text fontSize="20px" mt={5} maxW="800px" color="white">
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
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' minH='120vh'>
                <Heading as="h2" fontSize="40px" textAlign="center" color="#E2E2B6">Skills</Heading>
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
            <Box display='grid' justifyContent='center' alignItems='center' minH='100vh'>
            <Heading as="h2" fontSize="40px" textAlign="center" color="#E2E2B6">Projects</Heading>
                <Box display='grid' gridGap='40px' gridTemplateColumns='repeat(3,1fr)' maxW='1200px'>
                    <Card maxW='sm' id='card'>
                        <CardBody>
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Nize</Heading>
                                <Text>a Calendar app, to-do list, and file storage all in one, what more could a student want?</Text>
                            </Stack>
                        </CardBody>
                        <Divider/>
                        <Button variant='solid' colorScheme='blue' id='visit-btn'><Link href='https://github.com/imtooMilly/Nize'>Visit</Link></Button>
                    </Card>

                    <Card maxW='sm' id='card'>
                        <CardBody>
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>In Progress</Heading>
                                <Text>To-Do</Text>
                            </Stack>
                        </CardBody>
                        <Divider/>
                        <Button variant='solid' colorScheme='blue' id='visit-btn'><Link href='/'>Visit</Link></Button>
                    </Card>

                    <Card maxW='sm' id='card'>
                        <CardBody>
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Web Application</Heading>
                                <Text>To-do</Text>
                            </Stack>
                        </CardBody>
                        <Divider/>
                        <Button variant='solid' colorScheme='blue' id='visit-btn'><Link href='/'>Visit</Link></Button>
                    </Card>
                </Box>
            </Box>
            </section>

            <section className='hidden'>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' minH='100vh'>
            <Heading as="h2" fontSize="40px" textAlign="center" color="#E2E2B6">Contact Me</Heading>
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