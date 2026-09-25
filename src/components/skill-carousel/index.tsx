import React, {useRef, useState} from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './skill-carousel.module.css';

interface SkillCarouselItem {
  id: string;
  icon: string;
  label: string;
  usage: string[];
}

interface SkillCarouselProps {
  skills: SkillCarouselItem[];
  skillsPerSlide?: number;
}

interface SkillRowProps {
  skill: SkillCarouselItem;
}

function SkillRow({skill}: SkillRowProps): JSX.Element {
  const iconSrc = useBaseUrl(skill.icon);
  return (
    <div className={styles.skillRow}>
      <div className={styles.skillBadge}>
        <img className={styles.icon} src={iconSrc} alt="" />
        <span className={styles.label}>{skill.label}</span>
      </div>
      <ul className={styles.usage}>
        {skill.usage.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// Mobile-only horizontal slider: native scroll + CSS scroll-snap handles
// swiping, this component only groups the skills and syncs the dots.
export default function SkillCarousel({
  skills,
  skillsPerSlide = 3,
}: SkillCarouselProps): JSX.Element {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides: SkillCarouselItem[][] = [];
  for (let i = 0; i < skills.length; i += skillsPerSlide) {
    slides.push(skills.slice(i, i + skillsPerSlide));
  }

  const slideElements = (): HTMLElement[] =>
    Array.from(trackRef.current?.children ?? []) as HTMLElement[];

  // The active slide is the one whose center is closest to the track's center.
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let closestDistance = Infinity;
    slideElements().forEach((slide, index) => {
      const distance = Math.abs(
        slide.offsetLeft + slide.clientWidth / 2 - trackCenter,
      );
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = index;
      }
    });
    setActiveIndex(closest);
  };

  const goToSlide = (index: number) => {
    const track = trackRef.current;
    const slide = slideElements()[index];
    if (!track || !slide) {
      return;
    }
    track.scrollTo({
      left: slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.skillCarousel}>
      <div className={styles.track} ref={trackRef} onScroll={handleScroll}>
        {slides.map((slide, index) => (
          <div
            key={slide.map((skill) => skill.id).join('-')}
            className={styles.slide}
            aria-label={`Skills ${index + 1} of ${slides.length}`}>
            {slide.map((skill) => (
              <SkillRow key={skill.id} skill={skill} />
            ))}
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {slides.map((slide, index) => (
          <button
            key={slide.map((skill) => skill.id).join('-')}
            type="button"
            className={clsx(styles.dot, index === activeIndex && styles.dotActive)}
            aria-label={`Show skills ${index + 1} of ${slides.length}`}
            aria-current={index === activeIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
