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
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Start Here
          </Link>
          <Link
            className="button button--outline button--primary button--lg"
            to="/docs/field-guide/"
            style={{marginLeft: '1rem'}}>
            Learning Field Guide
          </Link>
          <Link
            className="button button--outline button--primary button--lg"
            to="/docs/learning"
            style={{marginLeft: '1rem'}}>
            Ideas & Explorations
          </Link>
        </div>
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
            <div className="text--center padding-horiz--md">
              <Heading as="h3">🧭 Start Here</Heading>
              <p>
                New to L&D work or want to understand my approach? Begin with my
                <Link to="/docs/first-principles"> First Principles</Link> and
                <Link to="/docs/about-me"> background</Link>.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <Heading as="h3">🌱 Learning Field Guide</Heading>
              <p>
                Dive into the <Link to="/docs/field-guide/index">Field Guide to Learning</Link> and
                practical <Link to="/docs/field-guide/thinking-models-ld">methodology</Link> for building programs.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <Heading as="h3">� Ideas & Explorations</Heading>
              <p>
                Explore my <Link to="/docs/learning">learning journal</Link>, 
                <Link to="/docs/experiments"> experiments</Link>, and
                <Link to="/docs/reflections"> reflections</Link> in my digital garden.
              </p>
            </div>
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
