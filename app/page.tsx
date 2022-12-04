import { Button } from "../components/button";
import { Container } from "../components/container";
import { Hero, HeroSubtitle, HeroTitle } from "../components/hero";

export default function Home() {
  return (
    <Container className="pt-[6.4rem]">
      <Hero>
        <Button href="/" variant="secondary" size="small">
          Linear 2022 Release-Built for scale
        </Button>
        <HeroTitle>
          Linear is a better way
          <br className="hidden md:block" />
          to build products
        </HeroTitle>
        <HeroSubtitle>
          Meet the new standard for modern software development.
          <br className="hidden md:block" /> Streamline issues, sprints, and
          product roadmaps.
        </HeroSubtitle>
        <img src="/img/hero.webp" alt="hero-image" className="rounded-2xl" />
      </Hero>
    </Container>
  );
}
