import React from "react";

function About() {
  return (
    <div className="about">
      <div class="page-layout">
        <div class="page-visual">
          <div class="page-visual-label">
            <h1 class="font-weight-light">About</h1>
          </div>
          <div class="page-body">
            <ul>
              <li class="page-tag">SaaS</li>
              <li class="page-tag">Start-up</li>
              <li class="page-tag">Top 1 Canada</li>
            </ul>
            <hr />
            <div class="page-grid">
              <h2>Our Purpose</h2>
              <h1>
              We believe AI will have a vast impact on the world. 
              Anthropic is dedicated to building systems that people can rely on 
              and generating research about the opportunities and risks of AI.
              </h1>
              <div class="page-grid-2">
                <div>
                  <h2>We Build Safer Systems</h2>
                  <p>
                    We aim to build frontier AI systems that are reliable, interpretable, and steerable. 
                    We conduct frontier research, develop and apply a variety of safety techniques, 
                    and deploy the resulting systems via a set of partnerships and products.
                  </p>
                </div>
                <div>
                  <h2>Safety Is a Science</h2>
                  <p>
                    We treat AI safety as a systematic science, conducting research, 
                    applying it to our products, feeding those insights back into our research, 
                    and regularly sharing what we learn with the world along the way.
                  </p>
                </div>
                <div>
                  <h2>Interdisciplinary</h2>
                  <p>
                    Anthropic is a collaborative team of researchers, engineers, policy experts, 
                    business leaders and operators, who bring our experience from many different domains 
                    to our work.
                  </p>
                </div>
                <div>
                  <h2>AI Companies are One Piece of a Big Puzzle</h2>
                  <p>
                    AI has the potential to fundamentally change how the world works. 
                    We view ourselves as just one piece of this evolving puzzle. We collaborate with 
                    civil society, government, academia, nonprofits and industry to promote safety industry-wide.
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div class="page-grid">
              <h2>The Team</h2>
              <p>
                We’re a team of researchers, engineers, policy experts and operational leaders, 
                with experience spanning a variety of disciplines, all working together 
                to build reliable and understandable AI systems.
              </p>
              <div class="page-grid-2">
                <div>
                  <h2>Research</h2>
                  <p>
                    We conduct frontier AI research across a variety of modalities, 
                    and explore novel and emerging safety research areas from 
                    interpretability to RL from human feedback to policy and 
                    societal impacts analysis.
                  </p>
                </div>
                <div>
                  <h2>Policy</h2>
                  <p>
                    We think about the impacts of our work and strive to 
                    communicate what we’re seeing at the frontier to 
                    policymakers and civil society in the US and abroad to 
                    help promote safe and reliable AI.
                  </p>
                </div>
                <div>
                  <h2>Product</h2>
                  <p>
                    We translate our research into tangible, practical tools 
                    like Claude that benefit businesses, nonprofits and 
                    civil society groups and their clients and people 
                    around the globe.
                  </p>
                </div>
                <div>
                  <h2>Operations</h2>
                  <p>
                    Our people, finance, legal, and recruiting teams are 
                    the human engines that make Anthropic go. 
                    We’ve had previous careers at NASA, startups, 
                    and the armed forces and our diverse experiences 
                    help make Anthropic a great place to work (and we love plants!).
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div class="page-grid">
              <h2>Governance</h2>
              <p>
                Anthropic is a Public Benefit Corporation, whose purpose is 
                the responsible development and maintenance of advanced AI for 
                the long-term benefit of humanity. Our Board of Directors is elected by 
                stockholders and our Long-Term Benefit Trust, as explained here. Current members of the Board 
                and the Long-Term Benefit Trust (LTBT) are listed below.
                <br /><br />

                <strong>Anthropic Board of Directors</strong>
                <br />
                Dario Amodei, Daniela Amodei, Yasmin Razavi, Jay Kreps, Reed Hastings, Chris Liddell, and Vas Narasimhan.
                
                <br /><br />

                <strong>LTBT Trustees</strong>
                <br />
                Neil Buddy Shah, Richard Fontaine, and Mariano-Florentino Cuéllar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
