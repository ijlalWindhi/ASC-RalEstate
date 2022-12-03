import React from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "react-feather";
import { Link } from "react-router-dom";
import {
    Button,
    Box,
    FormControl,
    Input,
    Text,
    InputGroup,
    InputRightElement,
    IconButton,
    FormHelperText,
    useColorModeValue,
} from "@chakra-ui/react";
import LoginHandler from "./LoginHandler";

export default function LoginForm() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    const bg = useColorModeValue("gray.800", "white");
    const color = useColorModeValue("white", "gray.800");
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = async (data: any) => {
        setIsLoading(!isLoading);
        await LoginHandler(data);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    return (
        <Box width={{ lg: "70%" }} mx={"auto"}>
            <Link to={"/"}>
                <Text>{"<-- Back"}</Text>
            </Link>
            <Box mt={4}>
                <Text fontSize={{ base: "2xl", lg: "4xl" }} fontWeight={700}>
                    Login
                </Text>
                <Text fontSize="md" my={3}>
                    Login for explore more
                </Text>
            </Box>
            <Box>
                <FormControl>
                    <Input
                        type="email"
                        id="email"
                        borderRadius="full"
                        focusBorderColor="black"
                        placeholder="Email"
                        {...register("email", {
                            required: true,
                        })}
                    />
                    {errors.email?.type === "required" && (
                        <FormHelperText textColor="red" mb={4}>
                            Please fill email
                        </FormHelperText>
                    )}
                    <InputGroup mt={4}>
                        <Input
                            type={show ? "text" : "password"}
                            id="password"
                            borderRadius="full"
                            focusBorderColor="black"
                            placeholder="Password"
                            {...register("password", {
                                required: true,
                                minLength: 8,
                            })}
                        />
                        <InputRightElement>
                            <IconButton
                                borderRadius="full"
                                size="sm"
                                variant="ghost"
                                mr={[2, 6, 10]}
                                onClick={handleClick}
                                aria-label={"whod hide"}
                                icon={show ? <EyeOff /> : <Eye />}
                            />
                        </InputRightElement>
                    </InputGroup>
                    {errors.password?.type === "required" && (
                        <FormHelperText textColor="red">
                            Please fill password
                        </FormHelperText>
                    )}
                    {errors.password?.type === "minLength" && (
                        <FormHelperText textColor="red">
                            Password minimum 8 characters
                        </FormHelperText>
                    )}
                    <Button
                        mt={8}
                        bg={bg}
                        color={color}
                        type="submit"
                        w="full"
                        borderRadius="full"
                        borderWidth={2}
                        borderColor="black"
                        _hover={{ bg: "white", color: "black" }}
                        isLoading={isLoading}
                        onClick={handleSubmit(onSubmit)}
                    >
                        Login
                    </Button>
                </FormControl>
            </Box>
            <Text mt={4}>
                Don't have account? <Link to={"/register"}>Register here</Link>{" "}
            </Text>
        </Box>
    );
}