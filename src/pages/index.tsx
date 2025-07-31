import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Maria's Digital Garden
        </Heading>
        <p className="hero__subtitle">Learning in public, building in the open</p>
      </div>
    </header>
  );
}

function HomepageContent() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <Link to="/docs/about-me" className={styles.featureCard}>
              <div className="text--center padding-horiz--md">
                <Heading as="h3">🧭 Start Here</Heading>
                <p>
                  New to L&D work or want to understand my approach? Begin with my
                  First Principles and background.
                </p>
              </div>
            </Link>
          </div>
          <div className="col col--4">
            <Link to="/docs/field-guide/" className={styles.featureCard}>
              <div className="text--center padding-horiz--md">
                <Heading as="h3">🌱 Learning Field Guide</Heading>
                <p>
                  Dive into the Field Guide to Learning and
                  practical methodology for building programs.
                </p>
              </div>
            </Link>
          </div>
          <div className="col col--4">
            <Link to="/digital-garden" className={styles.featureCard}>
              <div className="text--center padding-horiz--md">
                <Heading as="h3">🌿 Digital Garden</Heading>
                <p>
                  Explore my learning journal, experiments, and reflections - 
                  thoughts and ideas growing over time.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A practical field guide for anyone responsible for learning at work or interested in how to learn best. Learning in public, building in the open.">
      <HomepageHeader />
      <main>
        <HomepageContent />
      </main>
    </Layout>
  );
}
