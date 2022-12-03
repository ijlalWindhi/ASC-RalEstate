import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

type TitleType = {
    heading: number;
    title: string;
};

export default function Title({ heading, title }: TitleType) {
    const scrollRef = React.useRef(null);
    return (
        <Flex
            gap={4}
            alignItems={"center"}
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ root: scrollRef }}
            transition={{ duration: "5" }}
        >
            <Text fontSize={{ base: "xl", md: "4xl" }} fontWeight={"semibold"}>
                {heading}+
            </Text>
            <Text
                maxW={"40%"}
                fontWeight={"light"}
                fontSize={"sm"}
                lineHeight={"4"}
            >
                {title}
            </Text>
        </Flex>
    );
}
