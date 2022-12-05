import { Button, IconWrapper } from "../components/button";
import { Container } from "../components/container";
import { Hero, HeroSubtitle, HeroTitle } from "../components/hero";
import { HeroImage } from "../components/hero-image";
import { ChevronIcon } from "../components/icons/chevron";

export default function Home() {
  return (
    <Container className=" py-[6.4rem]">
      <Hero>
        <Button
          className="animate-fade-in"
          href="/"
          variant="secondary"
          size="small"
        >
          Sello 2022 Release-Built for scale <IconWrapper>→</IconWrapper>
        </Button>
        <HeroTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]">
          Sello is a better way
          <br className="hidden md:block" />
          to build products
        </HeroTitle>
        <HeroSubtitle className="animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem] ">
          Meet the new standard for modern software development.
          <br className="hidden md:block" /> Streamline issues, sprints, and
          product roadmaps.
        </HeroSubtitle>
        <Button
          className="animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem]"
          href="/"
          variant="primary"
          size="large"
        >
          Get Started{" "}
          <IconWrapper>
            <ChevronIcon />
          </IconWrapper>
        </Button>
        <HeroImage />
      </Hero>
    </Container>
  );
}
