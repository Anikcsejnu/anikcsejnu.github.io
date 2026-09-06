import Button from '../../atoms/Button/Button';
import Reveal from '../../atoms/Reveal/Reveal';
import SectionLabel from '../../atoms/SectionLabel/SectionLabel';
import { GITHUB_PROFILE_URL, PROJECTS } from '../../data/projects';
import ProjectItem from '../../molecules/ProjectItem/ProjectItem';
import sharedStyles from '../../styles/shared.module.css';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <Reveal as="section" className={`${sharedStyles.section} ${styles.projects}`} id="projects">
      <div className={sharedStyles.sectionWrap}>
        <SectionLabel>04 — Projects</SectionLabel>
        <h2 className={sharedStyles.sectionHeading}>
          Selected
          <br />
          <em>work.</em>
        </h2>
        <div className={styles.list}>
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} item delay={index * 0.1}>
              <ProjectItem
                number={project.number}
                title={project.title}
                description={project.description}
                tech={project.tech}
                link={project.link}
              />
            </Reveal>
          ))}
        </div>
        <div className={styles.cta}>
          <Button href={GITHUB_PROFILE_URL} external variant="ghost">
            All Projects on GitHub ↗
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
