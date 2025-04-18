import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <motion.h1 
          className="about-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Mysterious Phenomena
        </motion.h1>
        
        <motion.section 
          className="about-section mission"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2>Our Mission</h2>
          <div className="section-content">
            <p>At Mysterious Phenomena, we bridge the gap between the known and unknown, conducting rigorous research into unexplained phenomena across the globe. Our dedication to scientific methodology combined with open-minded exploration drives our pursuit of understanding the universe's greatest mysteries.</p>
            <p>Since our founding, we have committed ourselves to documenting the extraordinary with scientific rigor while maintaining an appreciation for the wonder that these occurrences inspire. We believe that by applying structured investigation techniques to unexplained events, we can expand humanity's understanding of the natural world and potentially discover new principles that redefine our perception of reality.</p>
          </div>
        </motion.section>

        <motion.section 
          className="about-section history"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h2>Our History</h2>
          <div className="section-content">
            <p>Mysterious Phenomena was established in 2003 by a coalition of scientists, researchers, and explorers who recognized the need for systematic investigation of unexplained events. What began as a small research collective has evolved into a globally respected organization with field offices on six continents.</p>
            <p>Our founders, including renowned physicist Dr. Eleanor Vance and anthropologist Dr. Martin Blackwood, sought to create an institution where conventional science meets boundary-pushing exploration. Twenty years later, their vision has materialized into a multidisciplinary research organization that has documented thousands of phenomena and contributed to numerous scientific publications.</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">2003</div>
              <div className="timeline-content">Organization founded</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2008</div>
              <div className="timeline-content">First international expedition</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2015</div>
              <div className="timeline-content">Research institute established</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2023</div>
              <div className="timeline-content">Global network expansion completed</div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="about-section expertise"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2>Our Expertise</h2>
          <div className="section-content two-column">
            <div className="expertise-area">
              <h3>Scientific Research</h3>
              <p>Our team employs leading-edge investigation methods and advanced analytical tools to examine each case with scientific precision. Our laboratories are equipped with state-of-the-art technology for analyzing physical evidence, electromagnetic anomalies, and environmental factors associated with unexplained phenomena.</p>
              <p>We maintain rigorous standards that meet or exceed those found in academic and industrial research settings, ensuring that our findings can withstand scrutiny from the broader scientific community.</p>
            </div>
            <div className="expertise-area">
              <h3>Global Network</h3>
              <p>Mysterious Phenomena has cultivated collaborative partnerships with researchers, academic institutions, and indigenous knowledge keepers worldwide. This extensive network allows us to respond rapidly to reports of phenomena and to contextualize our findings within local cultural and historical frameworks.</p>
              <p>Our field researchers are stationed across strategic locations globally, allowing us to maintain continuous monitoring of active sites and collect longitudinal data that reveals patterns often missed in short-term studies.</p>
            </div>
          </div>
          <div className="section-content two-column">
            <div className="expertise-area">
              <h3>Documentation & Analysis</h3>
              <p>We've developed proprietary documentation protocols that capture comprehensive data about each phenomenon while preserving the integrity of evidence. Our archival system contains over 50,000 hours of audio-visual recordings, 250,000 photographic images, and countless physical samples collected from investigation sites.</p>
              <p>Our data analysis department employs machine learning algorithms and traditional statistical methods to identify correlations and patterns across seemingly disparate events, revealing connections that might otherwise remain hidden.</p>
            </div>
            <div className="expertise-area">
              <h3>Educational Outreach</h3>
              <p>Beyond research, we are committed to public education about mysterious phenomena through our lecture series, publications, and interactive exhibits. We believe that fostering scientific literacy and critical thinking about unexplained events serves both the scientific community and the public interest.</p>
              <p>Our educational programs reach over 100,000 individuals annually through partnerships with museums, universities, and online learning platforms, demystifying the process of scientific investigation while preserving the sense of wonder these phenomena inspire.</p>
            </div>
          </div>
        </motion.section>

        <motion.div 
          className="mystery-stats-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2>Our Impact</h2>
          <div className="mystery-stats">
            <div className="stat">
              <h3>1,750+</h3>
              <p>Phenomena Documented</p>
              <div className="stat-progress">
                <div className="stat-bar" style={{ width: '87.5%' }}></div>
              </div>
              <p className="stat-details">Comprehensive reports published</p>
            </div>
            <div className="stat">
              <h3>63</h3>
              <p>Countries Explored</p>
              <div className="stat-progress">
                <div className="stat-bar" style={{ width: '75%' }}></div>
              </div>
              <p className="stat-details">Across 6 continents</p>
            </div>
            <div className="stat">
              <h3>22</h3>
              <p>Years Experience</p>
              <div className="stat-progress">
                <div className="stat-bar" style={{ width: '95%' }}></div>
              </div>
              <p className="stat-details">Continuous field research</p>
            </div>
            <div className="stat">
              <h3>147</h3>
              <p>Research Partners</p>
              <div className="stat-progress">
                <div className="stat-bar" style={{ width: '65%' }}></div>
              </div>
              <p className="stat-details">Academic and institutional</p>
            </div>
          </div>
        </motion.div>

        <motion.section 
          className="about-section methodology"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <h2>Our Approach</h2>
          <div className="section-content">
            <p>Mysterious Phenomena follows a structured, multidisciplinary approach to investigating unexplained events. Our methodology integrates scientific rigor with contextual understanding, ensuring that each phenomenon is examined from multiple perspectives.</p>
          </div>
          <div className="methodology-process">
            <div className="process-step">
              <span className="step-number">01</span>
              <div className="step-content">
                <h4>Investigation</h4>
                <p>Our field teams conduct thorough on-site research using standardized protocols adapted to the specific phenomenon. This includes environmental monitoring, witness interviews, physical sampling, and spatial mapping. Each investigation begins with establishing baseline measurements and controls to differentiate anomalous readings from normal variations.</p>
              </div>
            </div>
            <div className="process-connector"></div>
            <div className="process-step">
              <span className="step-number">02</span>
              <div className="step-content">
                <h4>Analysis</h4>
                <p>Collected data undergoes rigorous laboratory analysis and computational modeling. Our interdisciplinary teams apply techniques from physics, geology, psychology, cultural anthropology, and other relevant disciplines to interpret findings. We employ peer-review processes internally before developing conclusions, and maintain transparency about the limitations of our analyses.</p>
              </div>
            </div>
            <div className="process-connector"></div>
            <div className="process-step">
              <span className="step-number">03</span>
              <div className="step-content">
                <h4>Documentation</h4>
                <p>Each phenomenon receives comprehensive documentation in our secure digital archives. Reports include raw data, analytical findings, contextual information, and proposed explanatory models. Our documentation system employs advanced categorization and cross-referencing capabilities, allowing researchers to identify patterns across different cases and geographic regions.</p>
              </div>
            </div>
            <div className="process-connector"></div>
            <div className="process-step">
              <span className="step-number">04</span>
              <div className="step-content">
                <h4>Verification</h4>
                <p>When possible, we conduct follow-up investigations to verify findings and test hypotheses developed during initial analysis. This longitudinal approach has proven valuable in distinguishing between one-time anomalies and recurring phenomena that may indicate underlying patterns. External experts are frequently consulted during this phase to provide independent assessment.</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="about-section team"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <h2>Our Leadership</h2>
          <div className="section-content">
            <p>Mysterious Phenomena is guided by a diverse team of scientists, researchers, and explorers who bring interdisciplinary expertise to our mission. Our leadership combines academic credentials with extensive field experience.</p>
          </div>
          <div className="leadership-team">
            <div className="team-member">
              <div className="member-photo placeholder"></div>
              <h4>Dr. Eleanor Vance</h4>
              <p className="member-title">Founder & Director of Research</p>
              <p className="member-bio">Ph.D. in Theoretical Physics with over 25 years of experience investigating electromagnetic anomalies. Former researcher at CERN and author of "Beyond the Measurable Universe."</p>
            </div>
            <div className="team-member">
              <div className="member-photo placeholder"></div>
              <h4>Dr. Martin Blackwood</h4>
              <p className="member-title">Co-Founder & Chief Anthropologist</p>
              <p className="member-bio">Specializes in the relationship between cultural beliefs and reported phenomena. Has conducted field research on six continents and worked extensively with indigenous communities.</p>
            </div>
            <div className="team-member">
              <div className="member-photo placeholder"></div>
              <h4>Dr. Samira El-Hassan</h4>
              <p className="member-title">Head of Data Analytics</p>
              <p className="member-bio">Expert in machine learning applications for pattern recognition in complex datasets. Developed our proprietary system for cross-referencing phenomena characteristics across geographic regions.</p>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="about-section contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <h2>Collaborate With Us</h2>
          <div className="section-content two-column">
            <div className="contact-info">
              <h3>Research Opportunities</h3>
              <p>Mysterious Phenomena welcomes collaboration with academic institutions, independent researchers, and qualified volunteers. Our visiting researcher program provides access to our extensive archives and laboratory facilities.</p>
              <p>If you have specialized expertise that could contribute to our mission, please contact our research coordination office to discuss potential partnerships.</p>
            </div>
            <div className="contact-info">
              <h3>Report a Phenomenon</h3>
              <p>Have you witnessed something extraordinary that defies conventional explanation? Our global monitoring team reviews all submitted reports and may initiate an investigation for cases that meet our research criteria.</p>
              <p>We maintain strict confidentiality for all witnesses and prioritize ethical field practices in all our investigations.</p>
            </div>
          </div>
          <div className="cta-container">
            <button className="cta-button primary">Contact Our Team</button>
            <button className="cta-button secondary">Submit a Report</button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default About;