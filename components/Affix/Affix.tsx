"use client";

import { Affix as ScrollBtn } from "@mantine/core";
import { FaArrowUp } from "react-icons/fa";
import { useWindowScroll } from "@mantine/hooks";
import {  Text, Transition, rem } from "@mantine/core";
import { Button } from "@mantine/core";

 const Affix = () => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <ScrollBtn position={{ bottom: 40, right: 40 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button type="button" style={transitionStyles} onClick={() => scrollTo({ y: 0 })}>
            <FaArrowUp style={{ width: rem(16), height: rem(16) }} />
          </Button>
        )}
      </Transition>
    </ScrollBtn>
  );
};
export default Affix