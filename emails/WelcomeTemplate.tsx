import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import React, { CSSProperties } from "react";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome Aboard!~</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="http://google.com">Google</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const bodyStyleOptions: CSSProperties = {
  background: "#fff",
};

const headingStyleOptions: CSSProperties = {
  fontSize: "32px",
};

export default WelcomeTemplate;
